import Prompt from "../Prompt";
import styles from "./CommandLine.module.scss";

import BOOT_SEQUENCE from "../../public/assets/sequence.js";
import React, { useEffect, useRef, useState } from "react";
import commands from "../../utils/commands";
import { ICommand } from "../../utils/interfaces";

const CommandLine = () => {
  const [isBooted, setIsBooted] = useState<boolean>(false);
  const [history, addCmdToHistory] = useState<Array<ICommand>>([]);

  // Refs
  const promptInput = useRef<HTMLInputElement>(null);
  const scrollElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    promptInput.current?.focus();
  }, []);

  const resolveCommand = (command: string) => {
    //! Perform search and other stuff
    let resolvedCommand = commands.find((c) => c.name == command);
    if (typeof resolvedCommand !== undefined) {
      //@ts-ignore
      addCmdToHistory((prev) => [...prev, resolvedCommand]);
    }

    // Focus on the input and scroll down
    scrollToBottom();
    promptInput.current?.focus();
  };

  const scrollToBottom = () => {
    scrollElRef.current?.scrollTo(0, scrollElRef.current.scrollHeight);
  };

  return (
    <div
      className={styles.commandline}
      onClick={() => {
        // Ensure to stay focused in prompt input
        promptInput.current?.focus();
      }}
    >
      <div className={styles.outputs}>
        <div className={styles.history} ref={scrollElRef}>
          <div className={styles.boot}>
            {isBooted ? (
              ""
            ) : (
              <BootSequence
                updateHandler={() => {
                  scrollToBottom();
                }}
              />
            )}
          </div>
          <div className={styles.list}>
            {history.map((c) => {
              return c?.output;
            })}
          </div>
        </div>
      </div>
      <div className={styles.prompt}>
        <Prompt />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let cmd = promptInput.current?.value;
            cmd === undefined ? resolveCommand("") : resolveCommand(cmd);
          }}
        >
          <input type="text" spellCheck="false" ref={promptInput} />
        </form>
      </div>
    </div>
  );
};

export default CommandLine;

//! Boot sequence related components

const BootSequence = (props: {
  startHandler?: () => any;
  endHandler?: () => any;
  updateHandler: () => any;
}) => {
  return (
    <div className="boot-outputs">
      {BOOT_SEQUENCE.map((d, i) => {
        return (
          <SequenceElement
            text={d}
            delay={i}
            key={i}
            updateHandler={() => props.updateHandler()}
          />
        );
      })}
    </div>
  );
};

const SequenceElement = (props: {
  text: string;
  delay: number;
  updateHandler: () => any;
}) => {
  const delay = props.delay * 50;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible((prev) => true);
    }, delay);
  }, []);

  useEffect(() => {
    isVisible ? window.scrollTo(0, document.body.scrollHeight) : "";
    props.updateHandler();
  }, [isVisible]);

  return isVisible ? (
    <div>
      <span>{props.text}</span>
    </div>
  ) : (
    <></>
  );
};

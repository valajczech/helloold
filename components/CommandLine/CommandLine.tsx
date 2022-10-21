import Prompt from "../Prompt";
import styles from "./CommandLine.module.scss";

import BOOT_SEQUENCE from "../../public/assets/sequence.js";
import { useEffect, useRef, useState } from "react";
import commands from "../../utils/commands";
import { ICommand } from "../../utils/interfaces";

const CommandLine = () => {
  const [isBooted, setIsBooted] = useState<boolean>(false);
  const [history, addCmdToHistory] = useState<Array<ICommand>>([]);

  // Refs
  const promptInput = useRef<HTMLInputElement>(null);

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
    window.scrollTo(0, document.body.scrollHeight);
    promptInput.current?.focus();
  };

  return (
    <div
      className={styles.commandline}
      onClick={() => {
        // Ensure to stay focused in prompt input
        promptInput.current?.focus();
      }}
    >
      <div className="outputs">
        <div className={styles.boot}>
          {isBooted ? "" : <BootSequence endHandler={() => {}} />}
        </div>
        <div className={styles.list}>
          {history.map((c) => {
            return c?.output;
          })}
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
  endHandler: () => any;
}) => {
  return (
    <div className="outputs">
      {BOOT_SEQUENCE.map((d, i) => {
        if (i + 1 == BOOT_SEQUENCE.length) {
          props.endHandler();
        }
        return <SequenceElement text={d} delay={i} key={i} />;
      })}
    </div>
  );
};

const SequenceElement = (props: { text: string; delay: number }) => {
  const delay = props.delay * 50;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible((prev) => true);
    }, delay);
  }, []);

  useEffect(() => {
    isVisible ? window.scrollTo(0, document.body.scrollHeight) : "";
  }, [isVisible]);

  return isVisible ? (
    <div>
      <span>{props.text}</span>
    </div>
  ) : (
    <></>
  );
};

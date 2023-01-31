import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./api.module.scss";

const ApiRoute = () => {
  const [currentRequest, setCurrentRequest] = useState<string>("");
  return (
    <div className={styles.apiRoute}>
      <div className={styles.token}>
        Token will appear here (after captcha validation)
      </div>
      <div className={styles.consoleWrapper}>
        <div className={styles.requestList}>
          <span>Request One</span>
          <span>Request Two</span>
          <span>Request will be reworked soon</span>
          <span>Request One</span>
          <span>Request One</span>
          <span>Request One</span>
          <span>Request One</span>
        </div>
        <div className={styles.console}>
          <div className={styles.input}>
            <Input
              type={"text"}
              value={currentRequest}
              fixedPlaceholder={"https://randomserver.com/api/v1/"}
              onChange={(e) => {
                setCurrentRequest((prev) => e);
              }}
            />
            <Button text="Send" icon={<FaPaperPlane />} />
          </div>
          <div className={styles.output}>
            <span>Output:</span>
            <textarea id="" readOnly cols={30} rows={10}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiRoute;

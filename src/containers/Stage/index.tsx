// eslint-disable-next-line no-use-before-define
import React from "react";
import { Button } from "zarm";
import styles from "./index.module.css";

function Index() {
  return (
    <div className={styles.Index}>
      <Button theme="primary">primary</Button>
    </div>
  );
}

export default Index;

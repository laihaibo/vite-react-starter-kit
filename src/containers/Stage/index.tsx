// eslint-disable-next-line no-use-before-define
import React from "react";
import { useLocalStore, observer } from "mobx-react";
import { Button } from "zarm";
import uiStore from "../../stores/uiStore";

import styles from "./index.module.css";

// 使用uselocalstore
function Index() {
  const store = useLocalStore(() => uiStore);

  return (
    <div className={styles.Index}>
      <Button theme="primary" onClick={() => store.increment()}>
        Plus 1
      </Button>
      <div>{uiStore.price}</div>
    </div>
  );
}

export default observer(Index);

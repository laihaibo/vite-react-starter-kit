// eslint-disable-next-line no-use-before-define
import React from "react";
import { observer } from "mobx-react";
import { Button } from "zarm";
import { useStores } from "../../stores";

import styles from "./index.module.css";

// 使用context
function Index() {
  const { uiStore } = useStores();

  return (
    <div className={styles.Index}>
      <Button theme="primary" onClick={() => uiStore.increment()}>
        inject: Plus 1
      </Button>
      {uiStore.price}
    </div>
  );
}

export default observer(Index);

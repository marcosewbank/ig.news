import React from "react";

import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  console.log(
    "🚀 ~ file: index.tsx ~ line 10 ~ SubscribeButton ~ priceId",
    priceId
  );

  return (
    <button type="button" className={styles.subscriptionButton}>
      Subscribe now
    </button>
  );
}

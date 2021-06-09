import React from "react";
import { useSession, signIn } from "next-auth/client";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();
  const router = useRouter();

  console.log(
    "🚀 ~ file: index.tsx ~ line 24 ~ handleSubscribe ~ session",
    session
  );
  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
      router.push("/posts");
      return;
    }

    // criação checkout session
    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscriptionButton}
      onClick={() => handleSubscribe()}
    >
      Subscribe now
    </button>
  );
}

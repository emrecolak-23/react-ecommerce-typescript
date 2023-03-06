import { loadStripe } from '@stripe/stripe-js';
import { Stripe } from '@stripe/stripe-js';

export const stripePromise:Promise<Stripe|null> = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

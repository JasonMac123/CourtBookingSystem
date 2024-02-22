import { Dispatch, SetStateAction } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

import { STEPS } from "../modal/checkoutModal";
import { Button } from "../ui/button";

interface CheckoutFormProps {
  clientSecret: string;
  courtId: string;
  setStep: Dispatch<SetStateAction<STEPS>>;
}

const CheckoutForm = ({
  clientSecret,
  setStep,
  courtId,
}: CheckoutFormProps) => {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      clientSecret: clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/court/${courtId}`,
      },
    });

    if (result.error) {
      toast("Something went wrong with the payment process");
    }

    setStep(STEPS.CONFIRM);
    return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement
        options={{
          business: { name: "CourtBooking" },
          layout: {
            type: "accordion",
            defaultCollapsed: false,
            radios: false,
            spacedAccordionItems: true,
          },
        }}
      />
      <Button>Submit</Button>
    </form>
  );
};

export default CheckoutForm;

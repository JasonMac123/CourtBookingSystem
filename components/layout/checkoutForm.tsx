import { Dispatch, SetStateAction } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

import { Button } from "../ui/button";

import { STEPS } from "../modal/checkoutModal";

interface CheckoutFormProps {
  clientSecret: string;
  courtId: string;
  setStep: Dispatch<SetStateAction<STEPS>>;
}

const CheckoutForm = ({
  clientSecret,
  courtId,
  setStep,
}: CheckoutFormProps) => {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      toast(`${submitError.message}`);
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      clientSecret: clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/court/${courtId}`,
      },
      redirect: "if_required",
    });

    if (result.error) {
      toast("Something went wrong with the payment process");
    } else {
      setStep(STEPS.CONFIRM);
    }
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
      <Button className="w-full mt-2">Submit</Button>
    </form>
  );
};

export default CheckoutForm;

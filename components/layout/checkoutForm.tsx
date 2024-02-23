import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

import { Button } from "../ui/button";

interface CheckoutFormProps {
  clientSecret: string;
  courtId: string;
}

const CheckoutForm = ({ clientSecret, courtId }: CheckoutFormProps) => {
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
    });

    if (result.error) {
      toast("Something went wrong with the payment process");
    }

    toast("Booking confirmed");
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
      <Button className="mt-4 w-full">Submit</Button>
    </form>
  );
};

export default CheckoutForm;

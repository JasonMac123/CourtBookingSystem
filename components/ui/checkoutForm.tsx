import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form>
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
    </form>
  );
};

export default CheckoutForm;

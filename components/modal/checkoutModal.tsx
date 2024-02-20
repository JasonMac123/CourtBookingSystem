import { useCheckout } from "@/hooks/useCheckout";
import Modal from "./modal";

export const CheckoutModal = () => {
  const { isOpen, onClose } = useCheckout();

  const bodyContent = <div></div>;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle="Purchase"
      body={bodyContent}
    />
  );
};

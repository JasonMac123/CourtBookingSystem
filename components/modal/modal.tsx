"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

import { Button } from "../ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  disabled: boolean;
  buttonTitle: string;
  body: React.ReactElement;
  onSubmit: () => void;
}

const Modal = ({
  isOpen,
  onClose,
  disabled,
  buttonTitle,
  body,
  onSubmit,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const handleSubmit = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-11/12 md:w-3/5 lg:w-1/2 xl:w-2/5 my-6 mx-auto h-auto">
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`translate border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none h-auto 
              `}
            >
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                >
                  <IoMdClose />
                </button>
                <div className="text-lg font-semibold">Checkout</div>
              </div>
              <div className="relative p-7 flex-auto overflow-y-auto">
                {body}
              </div>
              {!disabled && (
                <div className="flex flex-col gap-2 p-6">
                  <div className="flex items-center w-full">
                    <Button
                      onClick={() => handleSubmit()}
                      className="w-full py-4 font-semibold text-white"
                    >
                      {buttonTitle}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

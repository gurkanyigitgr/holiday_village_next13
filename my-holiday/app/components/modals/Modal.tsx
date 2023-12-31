"use client";
import { GrClose } from "react-icons/gr";
import Button from "../buttons/Button";
import { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  btnLabel: string;
  title: string;
  bodyElement?: React.ReactElement;
  footerElement?: React.ReactElement;
};
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  btnLabel,
  title,
  bodyElement,
  footerElement,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeFunc = () => {
    onClose();
  };
  const submitFunc = () => {
    onSubmit();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="bg-black bg-opacity-70 fixed flex items-center justify-center w-full h-full z-50">
      <div className="bg-white rounded-lg p-10 w-2/5" ref={modalRef}>
        <div className="flex items-center justify-between pb-3 mb-3 border-b">
          <div className="text-2xl ">{title}</div>
          <div onClick={closeFunc}>
            <GrClose size={25} className="cursor-pointer" />
          </div>
        </div>
        <div>{bodyElement}</div>
        <div className="py-2">
          <Button onSubmit={submitFunc} btnLabel={btnLabel} />
        </div>
        <div>{footerElement}</div>
      </div>
    </div>
  );
};

export default Modal;

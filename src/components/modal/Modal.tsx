import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ closeModal, children }: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80">
      <div ref={modalRef} className="max-w-[640px]">
        {children}
      </div>
    </div>,
    document.body
  );
};

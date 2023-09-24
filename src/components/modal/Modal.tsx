import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
}: ModalProps): JSX.Element | null => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (isOpen) {
        handleClickOutside(e);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80">
      <div ref={modalRef} className="max-w-[640px]">
        {children}
      </div>
    </div>,
    document.body
  );
};

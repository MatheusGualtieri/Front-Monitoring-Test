import { ReactNode, useEffect, useRef } from "react";
import { StyledModal } from "./style";

interface IModalProps {
  toggleModal: () => void;
  children: ReactNode;
  blockClosing?: boolean;
}

export const Modal = ({ children, blockClosing, toggleModal }: IModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  return (
    <StyledModal>
      <div ref={blockClosing ? null : ref}>{children}</div>
    </StyledModal>
  );
};

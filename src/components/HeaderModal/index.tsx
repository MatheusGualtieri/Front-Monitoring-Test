import { FaTimesCircle } from "react-icons/fa";
import { ReactNode } from "react";
import { StyledModalHeader } from "./style";
import { ButtonIcon } from "../../styles/Buttons";
interface IHeaderModal {
  children: ReactNode;
  toggleModal: () => void;
}

const HeaderModal = ({ children, toggleModal }: IHeaderModal) => {
  return (
    <StyledModalHeader>
      {children}

      <ButtonIcon onClick={toggleModal}>
        <FaTimesCircle />
      </ButtonIcon>
    </StyledModalHeader>
  );
};

export { HeaderModal };

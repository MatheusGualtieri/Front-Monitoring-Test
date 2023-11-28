import { useAuth } from "../../hooks/useAuth";
import { ButtonA, ButtonNegative } from "../../styles/Buttons";
import { StyledH2, StyledText1 } from "../../styles/Fonts";
import { FaUserCircle } from "react-icons/fa";
import { FaRightToBracket } from "react-icons/fa6";

import {
  StyledContainer,
  StyledHeader,
  StyledNav,
  UserInformation,
} from "./style";

interface IHeaderProps {
  toggleModal: () => void;
}

export const Header = ({ toggleModal }: IHeaderProps) => {
  const { logout, user } = useAuth();
  return (
    <StyledHeader>
      <StyledContainer>
        <UserInformation>
          <FaUserCircle />
          <div>
            <StyledH2>{user?.username}</StyledH2>
            <StyledText1>{user?.name}</StyledText1>
            <StyledText1>{user?.email}</StyledText1>
          </div>
        </UserInformation>
        <StyledNav>
          <ButtonNegative type="button" onClick={logout}>
            <FaRightToBracket />
          </ButtonNegative>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

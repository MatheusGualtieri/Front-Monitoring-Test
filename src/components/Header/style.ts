import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--grey-5);
  @media (min-width: 800px) {
    height: 80px;
    border-bottom: 2px solid var(--brand-1);
  }
`;

export const StyledNav = styled.nav`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  display: flex;
  padding: 1rem;
  border-bottom: 2px solid var(--brand-1);

  @media (min-width: 800px) {
    width: 45%;
    gap: 1rem;
    border: none;
  }
`;

export const UserInformation = styled.div`
  padding: 1rem;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--brand-1);
  svg {
    height: 50px;
    width: 50px;
  }
  div h2 {
    color: var(--grey-1);
  }
  div p {
    color: var(--grey-3);
  }
  @media (min-width: 800px) {
    justify-content: center;
    height: 100%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  height: 100%;
  @media (min-width: 800px) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 90%;
    margin: 0 auto;
  }
`;

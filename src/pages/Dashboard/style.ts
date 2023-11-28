import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-4);
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  width: 90%;
  margin: 0 auto;
  button {
    width: fit-content;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  @media (min-width: 800px) {
    flex-wrap: nowrap;
    justify-content: start;
  }
`;

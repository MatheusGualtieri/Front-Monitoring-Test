import styled from "styled-components";

export const StyledModal = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--grey-4);
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    height: fit-content;
    width: 100%;
    max-width: 400px;
    border-radius: var(--border-radius-1);
  }
  div form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
  div form button {
    margin-top: 1rem;
  }
`;

import styled from "styled-components";

export const StyledSignupPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-1);
  color: var(--grey-4);
`;

export const StyledSignupForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SignupContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    width: 80%;
  }
`;
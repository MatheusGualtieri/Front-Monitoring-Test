import styled from "styled-components";
export const StyledLoginPage = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-1);
`;

export const LoginSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  color: var(--grey-4);
  @media (min-width: 800px) {
    height: 100%;
    width: 100%;
  }
`;

export const StyledLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LoginContainer = styled.div`
  max-width: 400px;
  width: 100%;
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

export const LoginHeader = styled.div`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--brand-1);
  h1{

    color: var(--grey-5);
  }
`;


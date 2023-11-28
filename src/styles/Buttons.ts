import styled from "styled-components";

export const ButtonBrand = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--grey-4);
  border: 2px solid var(--grey-4);
  border-radius: var(--border-radius-1);
  font-size: var(--font-size-2);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: var(--grey-4);
    color: var(--grey-1);
  }
`;
export const ButtonFile = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color:  var(--grey-4);
  color: var(--grey-4);
  border: 2px solid var(--grey-4);
  border-radius: var(--border-radius-1);
  font-size: var(--font-size-2);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: var(--grey-4);
    color: var(--brand-1);
  }
`;
export const ButtonBrandSecondary = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: var(--brand-1);
  color: var(--grey-4);
  border: 2px solid var(--brand-1);
  border-radius: var(--border-radius-1);
  font-size: var(--font-size-2);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: var(--grey-4);
    color: var(--brand-1);
  }
`;

export const ButtonNegative = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--negative);
  border: 2px solid var(--negative);
  border-radius: var(--border-radius-1);
  font-size: var(--font-size-2);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: var(--negative);
    color: var(--grey-4);
  }
`;

export const ButtonA = styled.a`
  width: fit-content;
  padding: 0.5rem 1rem;
  color: var(--grey-2);
  font-size: var(--font-size-2);
  transition: 0.5s;
  border: 2px solid var(--grey-5);
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid var(--brand-1);
    transition: 0.5s;
    color: var(--brand-1);
  }
`;

export const ButtonIcon = styled.button`
  border: none;
  padding: none;
  background-color: transparent;
  color: var(--grey-5);
  svg {
    width: 25px;
    height: 25px;
    transition: 0.5s;
    cursor: pointer;
  }
  svg:hover {
    filter: brightness(0.85);
    transition: 0.5s;
  }
`;

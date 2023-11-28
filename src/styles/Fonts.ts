import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: var(--title-size-1);
  }
`;

export const StyledH2 = styled.h2`
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: var(--title-size-2);
  }
`;

export const StyledText1 = styled.p`
  font-size: var(--text-size-1);
`;
export const StyledText2 = styled.p`
  font-size: var(--text-size-2);
`;
export const StyledText3 = styled.p`
  font-size: var(--text-size-3);
`;

export const StyledLabel1 = styled.p`
  font-size: var(--text-size-1);
`;

export const StyledLabel2 = styled.p`
  font-size: var(--text-size-3);
`;

export const StyledError = styled.p`
  font-size: var(--text-size-2);
  color: yellow;
`;

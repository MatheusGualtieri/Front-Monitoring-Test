import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --brand-1: #3c41f5;
        --brand-2: #3c67f5;
        --brand-3: #5895fc;

        --negative: #EB5757;

        --grey-0: #000000;
        --grey-1: #333333;
        --grey-2: #4F4F4F;
        --grey-3: #828282;
        --grey-4: #F2F2F2;
        --grey-5: #ffffff;

        --title-size-1: 2rem;
        --title-size-2: 1.5rem;
        --title-size-2: 1rem;

        --text-size-1: 1rem;
        --text-size-2: 0.875rem;
        --text-size-3: 0.75rem;

        --font-family: 'Inter', sans-serif;

        --border-radius-1: 1.25rem;
        --border-radius-2: 1rem;
    }
    body{
        font-family: var(--font-family);
        background-color: var(--grey-4);
    }
    
    h1{
        font-size: 1.5rem;
    }
    h2{
        font-size: 1rem;
    }

`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --pink: #FF577F;
        --pinkFocus: #FF427F;   
        --pinkNegative: #59323F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
    }

    body{
        background-color: var(--grey-4);
        color: var(--grey-0);
    }

    body, input, button{
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`
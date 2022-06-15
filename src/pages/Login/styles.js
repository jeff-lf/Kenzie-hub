import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width:369px;

    h1{
        color: var(--pink);
        font-size: 1rem;
        margin-bottom: 20px;
    }

    form{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`
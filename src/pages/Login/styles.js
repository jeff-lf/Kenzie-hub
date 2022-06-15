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
        justify-content: space-evenly;
        gap: 20px;
        background-color: var(--grey-3);
        width: 80%;
        height: 400px;
        box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
        border-radius: 3.20867px;

        span{
            font-weight: 600;
            font-size: 9.62602px;
            color: var(--grey-1)
        }

        h2{
            margin-top: 20px;
        }

        button{
            margin-bottom: 20px;
            width: 80%;
        }
    }
`
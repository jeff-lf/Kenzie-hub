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
    max-width:400px;

    .header{
        display: flex;
        width: 80%;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 20px;

        button{
            width: 79.54px;
            height: 31.95px;
            border: none;
            color: #ffff;
            font-size: 10px;
            font-weight: 600px;
            background: #212529;
            border-radius: 4px;
        }
    }

    h1{
        max-width: 100px;
        color: var(--pink);
        font-size: 1rem;
    }

    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 20px;
        background-color: var(--grey-3);
        width: 80%;
        height: 90vh;
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
            width: 80%;
            margin-bottom: 30px;
        }


        .modulo{
            width: 80%;

            label{
            font-size: 10px;
            text-align: left;
            }

            select{
            background: var(--grey-2);
            height: 38px;
            width: 100%;
            display: flex;
            border: 0.9772px solid #F8F9FA;
            border-radius: 3.20867px;
            margin-top: 8px;
            align-items: center;
            text-align: left;
            color: #868E96;
            }
        }

        

    }
`
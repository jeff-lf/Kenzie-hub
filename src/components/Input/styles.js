import styled,{css} from "styled-components";

export const Container = styled.div`
    text-align: left;
    width: 80%;
    color: var(--grey-0);
    font-size: 10px;
    
  
    span{
        color: red;
    }
`

export const InputContainer = styled.div`
    background: var(--grey-2);
    height: 38px;
    width: 100%;
    display: flex;
    border: 0.9772px solid #F8F9FA;
    border-radius: 3.20867px;
    margin-top: 8px;
    align-items: center;
    
    ${props => props.isErrored && css`
        border-color: red;
        svg{
            color: red;
        }
    `}

    input{
        background: transparent;
        align-items: center;
        font-size: 13px;
        font-weight: 400;
        height: auto;
        flex: 1;
        border: 0;
        color: var(--grey-0);
        &::placeholder{
            color:#868E96;
        }
        margin-left: 10px;
    }

    svg{
        color: var(--grey-1);
        margin-right: 5px;
        font-size: 10px;
    }
    
`
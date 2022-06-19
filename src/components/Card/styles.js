import styled from "styled-components"


export const Container = styled.div`
    background: #121214;
    height: 49px;
    border-radius: 4.06066px;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    
    
    h3{
        color: ${(props) => props.show ||  props.showAtualizar === true ? '#868E96' : '#F8F9FA'};
        width: 50%;
        font-size: 14px;
        margin-left: 5px;
    }

    p{
        color: var(--grey-1);
        width: 40%;
        margin-right: 20px;
        text-align: right;
        font-size: 12px;
    }

`
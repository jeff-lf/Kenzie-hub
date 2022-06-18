import styled from "styled-components";

export const Container = styled.button`
    background: ${(props) => (props.pinkSchema ? '#FF577F' : '#868E96')};
    color: #FFFFFF;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    height: 40px;
    border: none;
    border-radius: 4px;
    width: 100%;
    transition: 0.5s;

    :hover{
        background: #FF427F;
        
    }
`
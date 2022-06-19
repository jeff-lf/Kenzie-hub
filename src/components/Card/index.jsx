import { Container } from "./styles"

export const Card = ({title, status, show}) => {

    return (
        <Container> 
            <h3>{title}</h3>
            <p>{status}</p>
            <button></button>
        </Container>
    )   
}
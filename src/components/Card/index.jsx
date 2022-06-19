import { Container } from "./styles"
import {CgTrash} from 'react-icons/cg'


export const Card = ({title, status, show, onClick, showAtualizar}) => {

    return (
        <Container show={show} onClick={onClick} showAtualizar={showAtualizar}> 
            <h3>{title}</h3>
            <p>{status}</p>
        </Container>
    )   
}
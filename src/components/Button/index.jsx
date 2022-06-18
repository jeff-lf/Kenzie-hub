import { Container } from "./styles"

export const Button = ({ children, pinkSchema=false, ...rest}) => {
    return (
        <Container pinkSchema={pinkSchema} type='button' {...rest}>
            {children}
        </Container>
    )
}
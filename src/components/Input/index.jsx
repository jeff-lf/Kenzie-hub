import { Container, InputContainer } from "./styles"

export const Input = ({label, icon: Icon, register, name,   error='', ...rest}) => {
    return (
        <Container>
            {label} {!!error && <span> - {error}</span>}
            <InputContainer>
                <input {...register(name)} {...rest}/>
                {Icon && <Icon />}
            </InputContainer>
        </Container>
    )
}
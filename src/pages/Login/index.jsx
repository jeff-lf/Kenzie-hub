import { Container, Content } from "./styles"
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form"
import {AiFillEye} from 'react-icons/ai'


export const Login  = () => {

    const { 
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm()

    return (
        <Container>
            <Content>
                <h1>Kenzie Hub</h1>
                <form>
                    <h2>Login</h2>
                    <Input placeholder='Digite o email' label='Email'  register={register} name='email'/>
                    <Input placeholder='Digite a senha' type='password' label='Senha' icon={AiFillEye} register={register} name='password'/>
                    <button>Entrar</button>
                    <span>Ainda não possui conta?</span>
                    <button>Cadastre-se</button>
                </form>
            </Content>
        </Container>
    )
}


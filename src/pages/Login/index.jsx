import { Container, Content } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useForm } from "react-hook-form"
import {AiFillEye} from 'react-icons/ai'
import {yupResolver}   from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Redirect, useHistory } from "react-router-dom"
import { api } from "../../services/api"
import { toast } from 'react-toastify'


export const Login  = ({authenticated, setAuthenticated}) => {

    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup
            .string()
            .min(8, 'Minimo de 8 digitos')
            .required('Campo obrigatório!'),
    })

    const { 
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        api
        .post('/sessions', data)
        .then((res) => {
            const {token, user} = res.data

            localStorage.setItem('@Kenziehub:token', JSON.stringify(token))
            localStorage.setItem('@Kenziehub:user', JSON.stringify(user))

            setAuthenticated(true)

            return history.push('/home')
        })
        .catch((err) => toast.error('Ops, email ou senha invalido'))
    }

    const history = useHistory()
    
    const handleNavigation = (path) => {
        return history.push(path)
    }

    if(authenticated){
        return <Redirect to='/home'/>
    }

    return (
        <Container>
            <Content>
                <h1>Kenzie Hub</h1>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h2>Login</h2>
                    <Input placeholder='Digite o email' label='Email'  register={register} name='email' error={errors.email?.message}/>
                    <Input placeholder='Digite a senha' type='password' label='Senha' icon={AiFillEye} register={register} name='password' error={errors.password?.message}/>
                    <Button type="submit" pinkSchema={true} >Entrar</Button>
                    <span>Ainda não possui conta?</span>
                    <Button onClick={() => handleNavigation('/register')}>Cadastre-se</Button>
                </form>
            </Content>
        </Container>
    )
}


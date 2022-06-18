import { Container, Content } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useForm } from "react-hook-form"
import {AiFillEye} from 'react-icons/ai'
import {yupResolver}   from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useHistory } from "react-router-dom"


export const Register  = () => {

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
        console.log(data)
    }
    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }

    return (
        <Container>
            <Content>
                <div className="header">
                    <h1>Kenzie Hub</h1> 
                    <button onClick={() => handleNavigation('/')}>voltar</button>
                </div>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h2>Crie sua conta</h2>
                    <span>Rapido e grátis, vamos nessa</span>
                    <Input placeholder='Digite aqui seu nome' label='Nome' register={register} name='name' error={errors.name?.message}/>
                    <Input placeholder='Digite aqui seu email' label='Email'  register={register} name='email' error={errors.email?.message}/>
                    <Input placeholder='Digite aqui sua senha' type='password' label='Senha' register={register} name='password' error={errors.password?.message}/>
                    <Input placeholder='Digite aqui sua senha' label='Confirmar Senha' register={register} name='confirmPassword' error={errors.confirmPassword?.message}/>
                    <Input placeholder='Fale sobre você' label='Bio' register={register} name='bio' error={errors.bio?.message}/>
                    <Input placeholder='Opção de contato' label='Contato' register={register} name='contact' error={errors.email?.message}/>
                    <div className="modulo">
                        <label for="modulo">Selecionar modulo</label>
                        <select name="modulo">
                            <option value="primeiro">Primeiro modulo</option>
                            <option value="segundo">Segundo modulo</option>
                            <option value="terceiro">Terceiro modulo</option>
                            <option value="quarto">Quarto modulo</option>
                         </select>
                    </div>
                    <Button type="submit" pinkSchema={true} >Entrar</Button>
                </form>
            </Content>
        </Container>
    )
}


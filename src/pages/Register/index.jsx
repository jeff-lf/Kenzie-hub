import { Container, Content } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useForm } from "react-hook-form"
import {AiFillEye} from 'react-icons/ai'
import {yupResolver}   from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Redirect, useHistory } from "react-router-dom"
import { useState } from "react"
import { toast } from 'react-toastify'
import {api} from '../../services/api'


export const Register  = ({authenticated}) => {

    
    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório!'),
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup
            .string()
            .min(8, 'Minimo de 8 digitos')
            .required('Campo obrigatório!'),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Senhas diferentes')
        .required('Campo obrigatório!'),
        bio: yup.string().required('Campo obrigatório!'),
        contact: yup.string(),
    })

    const { 
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = ({name, email, password, bio, contact, course_module}) => {
        const user = {name, email, password, bio, contact, course_module}
        console.log(user)
        api
        .post('/users', user)
        .then((_) => {
            toast.success('Conta criada com sucesso!')
            return history.push('/')
        })
        .catch((err) => {toast.error('Ops, algo deu errado')})
        
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
                <div className="header">
                    <h1>Kenzie Hub</h1> 
                    <button onClick={() => handleNavigation('/')}>voltar</button>
                </div>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h2>Crie sua conta</h2>
                    <span>Rapido e grátis, vamos nessa</span>
                    <Input 
                        placeholder='Digite aqui seu nome' 
                        label='Nome' 
                        register={register} 
                        name='name' 
                        error={errors.name?.message}
                    />
                    <Input 
                        placeholder='Digite aqui seu email' 
                        label='Email'  
                        register={register} 
                        name='email' 
                        error={errors.email?.message}
                    />
                    <Input 
                        placeholder='Digite aqui sua senha'
                        type='password' 
                        label='Senha' 
                        register={register} 
                        name='password'
                        error={errors.password?.message}
                    />
                    <Input 
                        placeholder='Digite aqui sua senha' 
                        type='password' 
                        label='Confirmar Senha' 
                        register={register} 
                        name='confirmPassword' 
                        error={errors.confirmPassword?.message}
                    />
                    <Input 
                        placeholder='Fale sobre você' 
                        label='Bio' 
                        register={register} 
                        name='bio' 
                        error={errors.bio?.message}
                    />
                    <Input 
                        placeholder='Opção de contato' 
                        label='Contato' 
                        register={register} 
                        name='contact' 
                        error={errors.email?.message}
                    />
                    <div className="modulo">
                        <label for="course_module">Selecionar modulo</label>
                        <select name='course_module'   {...register('course_module')} >
                            <option  value="Primeiro módulo (Introdução ao Frontend)">Primeiro modulo</option>
                            <option  value="Segundo módulo (Frontend Avançado)">Segundo modulo</option>
                            <option  value="Terceiro módulo (Introdução ao Backend)">Terceiro modulo</option>
                            <option  value="Quarto módulo (Backend Avançado)">Quarto modulo</option>
                         </select>
                    </div>
                    <Button type="submit" pinkSchema={true} >Cadastrar</Button>
                </form>
            </Content>
        </Container>
    )
}


import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Redirect, useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Input } from '../../components/Input'
import { api } from "../../services/api"
import { AdicionarContainer, Container, Content, TechsContainer } from "./styles"

export const Home = ({authenticated}) => {

    const [show, setShow] = useState(false)
    const [user] = useState(JSON.parse(localStorage.getItem('@Kenziehub:user')) || '')
    const [token] = useState(JSON.parse(localStorage.getItem('@Kenziehub:token')) || '')
    const [techs, setTechs] = useState([])
    console.log(user)
    
    const history = useHistory()
    
    const handleLogout = () => {
        localStorage.clear()
        return history.go('/')
    }

    const { 
        register, 
        handleSubmit, 
    } = useForm()

    const onSubmitFunction = (data) => {
        console.log(data)
        api.post('/users/techs', data,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            const apiTechs = res
            
        })
        .catch((err) => console.log(err))
    }

    const listTechs = () => {
        api
        .get(`/users/${user.id}`)
        .then((res) => 
            setTechs(...techs, res.data.techs)
        )
        .catch((err) => console.log(err))
    } 

    useEffect(() => {
        listTechs()
    }, [])
    
    

    if(!authenticated){
        return <Redirect to='/'/>
    }

    return (
        <Container>
            <Content>
                <div className="header">
                    <h1>Kenzie Hub</h1> 
                    <button onClick={() => handleLogout()}>Sair</button>
                </div>

                <hr />

                <div className="devinfo">
                    <h2>Olá,  {user.name}</h2>   
                    <p>{user.course_module}</p>
                </div>

                <hr />

                <div className="headerTechs">
                    <h2>Técnologias</h2>
                    <button onClick={() => setShow(true)}>+</button>
                </div>

                <TechsContainer empty={techs}> 
                    {techs?.map((tech) =>
                        <Card 
                            title={tech.title}
                            status={tech.status}    
                        />
                    )}
                </TechsContainer>

                <AdicionarContainer className="modal" show={show} >
                    <div className="headerCadastro">
                        <h3>Cadastrar técnologia</h3>
                        <button onClick={() => setShow(false)}>X</button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <Input placeholder='Nome da técnologia' label='Nome'  register={register} name='title' />
                        <div className="status">
                            <label for="status">Selecionar status</label>
                            <select name='status'   {...register('status')} >
                                <option  value="Iniciante">Iniciante</option>
                                <option  value="Intermediario">Intermediário</option>
                                <option  value="Avançado">Avançado</option>
                            </select>
                        </div>
                        <Button type='submit' pinkSchema={true}>Cadastrar técnologia</Button>
                    </form>
                </AdicionarContainer>
            </Content>
        </Container>
        
    )
}
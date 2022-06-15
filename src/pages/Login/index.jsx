import { Container, Content } from "./styles"


export const Login  = () => {
    return (
        <Container>
            <Content>
                <h1>Kenzie Hub</h1>
                <form>
                    <h2>Login</h2>
                    <label>Email</label>
                    <input/>
                    <label>Senha</label>
                    <input/>
                    <button>Entrar</button>
                    <span>Ainda não possui conta?</span>
                    <button>Cadastre-se</button>
                </form>
            </Content>
        </Container>
    )
}


import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: var(--grey-4);
    width: 100vw;
    border-radius: 3.20867px;
    position: relative;
    


`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    

    .header{
        display: flex;
        width: 80%;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 10px;
        max-width: 780px;
        margin-top: 10px;


        button{
            width: 55px;
            height: 31.95px;
            border: none;
            color: #ffff;
            font-size: 10px;
            font-weight: 600px;
            background: #212529;
            border-radius: 4px;
        }
    }

    h1{
        max-width: 100px;
        color: var(--pink);
        font-size: 1rem;
        margin-top: 5px;
    }

    hr{
        width: 100%;
        height: 1px;
        background: #212529;
        border: none;
        margin-bottom: 20px;
    }

    .devinfo{
        display: flex;
        width: 80%;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 20px;
        max-width: 780px;


        p{
            color: #868E96;
            font-size: 12px;
        }
    }

    .headerTechs{
        display: flex;
        width: 80%;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 10px;
        max-width: 780px;
        margin-top: 10px;


        button{
            width: 31.95px;
            height: 31.95px;
            border: none;
            color: #ffff;
            font-size: 22px;
            font-weight: 600px;
            background: #212529;
            border-radius: 4px;
            text-align: center;
            margin-bottom: 10px;
        }
    }
`

export const TechsContainer = styled.div`
    background: var(--grey-3);
    width: 80%;
    max-width: 780px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 25px 0px 25px 0px;
    height: ${(props) =>  (props.empty === [] ? '50vh' : '100%')};

    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 90%;
    }
`

export const AdicionarContainer = styled.div`
    width: 85%;
    height: 50vh;
    max-height: 342px;
    max-width: 369px;
    left: 40% - 369px;
    top: 15%;
    position: absolute;
    margin-right: 5px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: ${(props) => props.show ? 'inline' : 'none'};
    
    
    
    .headerCadastro{
        border-radius: 4px 4px 0px 0px;
        width: 100%;
        height: 13.8%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        background-color: var(--grey-2);
        
        
        button{
            background: none;
            border: none;
            color: var(--grey-1);
            margin-right: 10px;
        }

        h3{
            margin-left: 10px;
            margin-left: 10px;
            font-size: 14px;
        }
    }

    form{
        height: 100%;
        max-height: 300px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content:space-evenly;
        background-color: var(--gray-3);

        .status{
            width: 80%;
            text-align: left;

            label{
            font-size: 10px;

            }

            select{
            background: var(--grey-2);
            height: 38px;
            width: 100%;
            display: flex;
            border: 0.9772px solid #F8F9FA;
            border-radius: 3.20867px;
            margin-top: 8px;
            align-items: center;
            text-align: left;
            color: #868E96;
            }
        }


        button{
            width: 80%;
        }
    }

`

export const ModalAtualizar = styled.div`
    width: 85%;
    height: 50vh;
    max-height: 342px;
    max-width: 369px;
    left: 40% - 369px;
    top: 15%;
    position: absolute;
    margin-right: 5px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: ${(props) => props.showAtualizar ? 'inline' : 'none'};
    
    
    
    .headerCadastro{
        border-radius: 4px 4px 0px 0px;
        width: 100%;
        height: 13.8%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        background-color: var(--grey-2);
        
        
        button{
            background: none;
            border: none;
            color: var(--grey-1);
            margin-right: 10px;
        }

        h3{
            margin-left: 10px;
            margin-left: 10px;
            font-size: 14px;
        }
    }

    form{
        height: 100%;
        max-height: 300px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content:space-evenly;
        background-color: var(--gray-3);

        .status{
            width: 80%;
            text-align: left;

            label{
            font-size: 10px;

            }

            select{
            background: var(--grey-2);
            height: 38px;
            width: 100%;
            display: flex;
            border: 0.9772px solid #F8F9FA;
            border-radius: 3.20867px;
            margin-top: 8px;
            align-items: center;
            text-align: left;
            color: #868E96;
            }
        }

        .botoes{
            width: 80%;
            display: flex;
            justify-content: space-between;
        }
        .buttonAtualizar{
            width: 60%;
        }

        .buttonExcluir{
            width: 30%;
        }
    }


`
import React from "react";
import {  Container,
    Form,
    Title,
    Header 
} 
from "./styles";

import { Input } from "../../components/Forms/Input";


export function Register(){
    return(
        < Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Input
                    placeholder = "Nome"
                />
                <Input
                    placeholder = "Valor"
                />
            </Form>
        </Container>     
    )
}
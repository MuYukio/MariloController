import React from "react";
import { Container, Data, Footer, Header,Money,Spend,Text } from "../Transaction/styles";

export function Transaction(){
    return(
        <Container>
            <Header>
                <Text>Desenvolvimento de site</Text>
                <Money>R$:600</Money>
            </Header>
            
            <Footer>
                <Spend>Alimentação</Spend>
                <Data>12/28/202X</Data>
            </Footer>
            
        </Container>
        
    )
}
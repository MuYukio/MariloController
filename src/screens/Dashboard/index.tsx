import { Feather } from '@expo/vector-icons';
import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Text,
} from "./styles";
import { HighlightCard } from '../../components/HighlightCard';
import React from 'react';
import { Transaction } from '../../components/Transaction';


export function Dashboard(){
    return(
        <Container>
           <Header>
            <UserWrapper>
                <UserInfo>
                    <Photo source ={ {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU44njtRybQEs-6TGCyT8MKwnnPGo8rphl9g&s'}}/>
                    <User>
                        <UserGreeting>Olá</UserGreeting>
                        <UserName>Aluno</UserName>
                    </User>
                </UserInfo>
                <Icon name="power"/>
                
            </UserWrapper>
           </Header>

           <HighlightCards
               
           >
                <HighlightCard
                    type = 'up'
                    title='Entradas'
                    amount='R$ 28.000,00'
                    lastTransaction='Ultima entrada em 16 de junho'
                />
                <HighlightCard
                    type = 'down'
                    title='saidas'
                    amount='R$ 15.000,00'
                    lastTransaction='Ultima saida em 30 de junho'
                />
                <HighlightCard
                    type = 'total'
                    title='total'
                    amount='R$ 13.000,00'
                    lastTransaction='de 16 a 30 de junho'
                />
                
           </HighlightCards>
            <Transactions>
                <Text>Listagem:</Text>
                <Transaction>
                    
                </Transaction>
            </Transactions>
        </Container>
    );
}
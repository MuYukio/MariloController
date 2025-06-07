import React from "react";
import { Feather } from "@expo/vector-icons";
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
  ListContainer,
  ListTitle,
  Transactions,
} from "./styles";

import { HighlightCard } from "../../components/HighlightCard";
import { Transaction } from "../../components/Transaction";

export function Dashboard() {
  // 1) Array de dados dos HighlightCards
  const highlights = [
    {
      type: "up" as const,
      title: "Entradas",
      amount: "R$ 28.000,00",
      lastTransaction: "Última entrada em 16 de junho",
    },
    {
      type: "down" as const,
      title: "Saídas",
      amount: "R$ 15.000,00",
      lastTransaction: "Última saída em 30 de junho",
    },
    {
      type: "total" as const,
      title: "Total",
      amount: "R$ 13.000,00",
      lastTransaction: "de 16 a 30 de junho",
    },
  ];

  // 2) Array de dados das Transações
  const data = [
    {
      title: "Desenvolvimento de site",
      amount: "R$ 600,00",
      category: "Alimentação",
      date: "12/28/202X",
    },
    {
      title: "Compra de material",
      amount: "R$ 150,00",
      category: "Educação",
      date: "13/28/202X",
    },
    {
      title: "Academia",
      amount: "R$ 80,00",
      category: "Saúde",
      date: "15/28/202X",
    },
    // ...
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU44njtRybQEs-6TGCyT8MKwnnPGo8rphl9g&s",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Aluno</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        {highlights.map((h, i) => (
          <HighlightCard
            key={i}
            type={h.type}
            title={h.title}
            amount={h.amount}
            lastTransaction={h.lastTransaction}
          />
        ))}
      </HighlightCards>

      <ListContainer>
        <ListTitle>Listagem de Transações</ListTitle>
        <Transactions>
          {data.map((item, index) => (
            <Transaction
              key={index}
              title={item.title}
              amount={item.amount}
              category={item.category}
              date={item.date}
            />
          ))}
        </Transactions>
      </ListContainer>
    </Container>
  );
}

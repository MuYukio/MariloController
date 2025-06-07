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

// Tipagem para as transações
type TransactionType = {
  title: string;
  amount: string;
  category: string;
  date: string;
  type: "up" | "down";
};

export function Dashboard() {
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

  const transactions: TransactionType[] = [
    {
      title: "Desenvolvimento de site",
      amount: "R$ 600,00",
      category: "Serviço",
      date: "28/06/2025",
      type: "up",
    },
    {
      title: "Compra de material",
      amount: "R$ 150,00",
      category: "Educação",
      date: "29/06/2025",
      type: "up",
    },
    {
      title: "Academia",
      amount: "R$ 80,00",
      category: "Saúde",
      date: "30/06/2025",
      type: "down",
    },
  ];

  return (
    <Container>
      {/* Cabeçalho com dados do usuário */}
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU44njtRybQEs-6TGCyT8MKwnnPGo8rphl9g&s",
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

      {/* Cartões de resumo */}
      <HighlightCards>
        {highlights.map((h, index) => (
          <HighlightCard
            key={index}
            type={h.type}
            title={h.title}
            amount={h.amount}
            lastTransaction={h.lastTransaction}
          />
        ))}
      </HighlightCards>

      {/* Lista de transações */}
      <ListContainer>
        <ListTitle>Listagem de Transações</ListTitle>
        <Transactions>
          {transactions.map((item, index) => (
            <Transaction
              key={`${item.title}-${index}`}
              title={item.title}
              amount={item.amount}
              category={item.category}
              date={item.date}
              type={item.type} icon={""}            />
          ))}
        </Transactions>
      </ListContainer>
    </Container>
  );
}

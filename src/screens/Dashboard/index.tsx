// src/screens/Dashboard.tsx
import React, { useState, useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
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
  LogoutButton,
} from "./styles";

import { HighlightCard } from "../../components/HighlightCard";
import { Transaction } from "../../components/Transaction";

// Tipagens
export type HighlightData = {
  type: "up" | "down" | "total";
  title: string;
  amount: string;
  lastTransaction: string;
};

export type TransactionType = {
  id: string;
  titulo: string;
  preco: number;
  categoria: string;
  data: string;
  tipo: "entrada" | "saida";
};

export function Dashboard() {
  const [highlights, setHighlights] = useState<HighlightData[]>([]);
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  const API_BASE = "http://10.0.0.131:3000/api/v1/transacoes";

  const formatCurrency = (value: number | string | undefined) => {
    const num = Number(value ?? 0);
    return `R$ ${num.toFixed(2).replace(".", ",")}`;
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useFocusEffect(
    useCallback(() => {
      async function loadData() {
        try {
          const resTx = await fetch(API_BASE);
          const data: TransactionType[] = await resTx.json();
          setTransactions(data);

          const resSum = await fetch(`${API_BASE}/resumo`);
          const { entradas, saidas, total } = await resSum.json();

          const ultimaEntrada = data.filter(t => t.tipo === "entrada").slice(-1)[0]?.data;
          const ultimaSaida = data.filter(t => t.tipo === "saida").slice(-1)[0]?.data;

          setHighlights([
            {
              type: "up",
              title: "Entradas",
              amount: formatCurrency(entradas),
              lastTransaction: ultimaEntrada
                ? `Última entrada em ${formatDate(ultimaEntrada)}`
                : "Nenhuma entrada registrada",
            },
            {
              type: "down",
              title: "Saídas",
              amount: formatCurrency(saidas),
              lastTransaction: ultimaSaida
                ? `Última saída em ${formatDate(ultimaSaida)}`
                : "Nenhuma saída registrada",
            },
            {
              type: "total",
              title: "Total",
              amount: formatCurrency(total),
              lastTransaction: `De ${formatDate(
                new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1).toISOString()
              )} a ${formatDate(
                new Date(new Date().getFullYear(), new Date().getMonth(), 0).toISOString()
              )}`,
            },
          ]);
        } catch (err) {
          console.error("Erro ao carregar dashboard:", err);
        }
      }
      loadData();
    }, [])
  );

  return (
    <Container>
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
          <LogoutButton onPress={() => console.log('Deslogar')}>
            <Feather name="power" size={24} color="#fff" />
          </LogoutButton>
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
        <Transactions
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Transaction
              title={item.titulo}
              amount={formatCurrency(item.preco)}
              category={item.categoria}
              date={formatDate(item.data)}
              type={item.tipo === "entrada" ? "up" : "down"}
              icon={item.tipo === "entrada" ? "arrow-up-circle" : "arrow-down-circle"}
            />
          )}
        />
      </ListContainer>
    </Container>
  );
}

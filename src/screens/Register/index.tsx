// src/screens/Register/index.tsx
import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Form,
  Title,
  Header,
  Fields,
  TransactionsTypes,
  CategorySelect,
  RegisterButton
} from "./styles";

import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

// Defina a interface de payload
interface TransactionPayload {
  titulo: string;
  preco: number;
  categoria: string;
  tipo: "entrada" | "saida";
  data: string;
}

export function Register() {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [transactionType, setTransactionType] = useState<"income" | "outcome" | null>(null);

  const navigation = useNavigation();

  function handleTransactionTypeSelect(type: "income" | "outcome") {
    setTransactionType(type);
  }

  async function handleRegister() {
    if (!titulo || !preco || !categoria || !transactionType) {
      return Alert.alert("Atenção", "Preencha todos os campos.");
    }

    const payload: TransactionPayload = {
      titulo,
      preco: Number(preco),
      categoria,
      tipo: transactionType === "income" ? "entrada" : "saida",
      data: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://10.0.0.131:3000/api/v1/transacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Erro ${res.status}`);

      // Sucesso: aviso e limpa formulario
      Alert.alert("Sucesso", "Transação cadastrada.");
      setTitulo("");
      setPreco("");
      setCategoria("");
      setTransactionType(null);

      // Volta para dashboard/listagem
      navigation.goBack();
    } catch (err) {
      console.error(err);
      Alert.alert("Erro", "Não foi possível cadastrar a transação.");
    }
  }

  return (
    <Container>
      <Header>
        <Title>Cadastrar Transação</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder="Título"
            value={titulo}
            onChangeText={setTitulo}
          />
          
          <Input
            placeholder="Preço"
            keyboardType="numeric"
            value={preco}
            onChangeText={setPreco}
          />

          <TransactionsTypes>
            <TransactionTypeButton 
              type="income"
              title="Entrada"
              isActive={transactionType === "income"}
              onPress={() => handleTransactionTypeSelect("income")}
            />
            
            <TransactionTypeButton 
              type="outcome"
              title="Saída"
              isActive={transactionType === "outcome"}
              onPress={() => handleTransactionTypeSelect("outcome")}
            />
          </TransactionsTypes>

          <CategorySelect>
            <Input
              placeholder="Categoria"
              value={categoria}
              onChangeText={setCategoria}
            />
          </CategorySelect>
        </Fields>

        <RegisterButton>
          <Button title="Cadastrar" onPress={handleRegister} />
        </RegisterButton>
      </Form>
    </Container>     
  );
}

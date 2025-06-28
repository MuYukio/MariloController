import React, { useState } from "react";
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

export function Register() {
  const [transactionType, setTransactionType] = useState<'income' | 'outcome' | null>(null);

  function handleTransactionTypeSelect(type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  return(
    <Container>
      <Header>
        <Title>Cadastrar Transação</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder="Título"
          />
          
          <Input
            placeholder="Preço"
            keyboardType="numeric"
          />

          <TransactionsTypes>
            <TransactionTypeButton 
              type="income"
              title="Entrada"
              isActive={transactionType === 'income'}
              onPress={() => handleTransactionTypeSelect('income')}
            />
            
            <TransactionTypeButton 
              type="outcome"
              title="Saída"
              isActive={transactionType === 'outcome'}
              onPress={() => handleTransactionTypeSelect('outcome')}
            />
          </TransactionsTypes>

          <CategorySelect>
            <Input
              placeholder="Categoria"
            />
          </CategorySelect>
        </Fields>

        <RegisterButton>
          <Button title="Cadastrar" />
        </RegisterButton>
      </Form>
    </Container>     
  )
}
import React from "react";
import { CategoryContainer, CategoryText, Container, DateText } from "../Transaction/styles";
import { Amount, Title } from "../HighlightCard/styles";

interface Props {
  title: string;
  amount: string;
  category: string;
  date: string;
}


export function Transaction({ title, amount, category, date }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
      <CategoryContainer>
        <CategoryText>{category}</CategoryText>
        <DateText>{date}</DateText>
      </CategoryContainer>
    </Container>

  )
}
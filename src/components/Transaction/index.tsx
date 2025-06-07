import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Icon,
  CategoryText,
  DateText
} from "../Transaction/styles";

interface Props {
  title: string;
  amount: string;
  category: string;
  date: string;
  type: 'up' | 'down';
  icon: string;
}

export function Transaction({ title, amount, category, date, type, icon }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      <Amount type={type}>
        {type === 'down' && '- '}
        {amount}
      </Amount>

      <Footer>
        <Icon name={icon} />
        <CategoryText>{category}</CategoryText>
        <DateText>{date}</DateText>
      </Footer>
    </Container>
  );
}

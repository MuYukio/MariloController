// components/Transaction/styles.ts

import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

// 1. Container geral do card
export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(260)}px;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;

  /* shorthand padding: vertical horizontal */
  padding: ${RFValue(8)}px ${RFValue(12)}px;
  /* espaço mínimo entre cards */
  margin-bottom: ${RFValue(8)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.text_light};

`;

// 2. Título (primeira linha)
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

// 3. Valor (linha do amount), em verde
export const Amount = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.large}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.success};

  /* gap fino acima do Amount */
  margin-top: ${RFValue(4)}px;
`;

// 4. Container da categoria + data (faixa clara)
export const CategoryContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.successLight};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* shorthand padding para a faixa */
  padding: ${RFValue(4)}px ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
`;

// 5. Texto da categoria (lado esquerdo)
export const CategoryText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

// 6. Texto da data (lado direito)
export const DateText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_light};
`;

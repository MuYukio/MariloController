// components/Transaction/styles.ts
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface AmountProps {
  type: "up" | "down";
}
interface IconProps {
  type: "up" | "down";
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(260)}px;
  border-radius: ${({ theme }) => theme.borderRadius.large}px;
  padding: ${RFValue(8)}px ${RFValue(12)}px;
  margin-bottom: ${RFValue(8)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.text_light};
 
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Amount = styled.Text<AmountProps>`
  font-size: ${({ theme }) => theme.fontSize.large}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: 2px;

  ${({ type, theme }) =>
    type === "up" &&
    css`
      color: ${theme.colors.success};
    `}

  ${({ type, theme }) =>
    type === "down" &&
    css`
      color: ${theme.colors.error};
    `}
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${RFValue(4)}px ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
`;

export const Icon = styled(Feather) <IconProps>`
  font-size: ${({ theme }) => theme.fontSize.medium}px;

  
  color: ${({ type, theme }) =>
    type === "up" ? theme.colors.success : theme.colors.error};
`;

export const CategoryText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const DateText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`;

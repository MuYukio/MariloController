// src/screens/Dashboard/styles.ts
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

// Tipagem para as transações
export type TransactionType = {
  id: string;
  titulo: string;
  preco: number;
  categoria: string;
  data: string;
  tipo: "entrada" | "saida";
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(200)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(60)}px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled.TouchableOpacity``;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFValue(130)}px;
`;

export const ListContainer = styled.View`
  flex: 1;
  padding: 0 24px;
  align-items: center;
  margin-top: ${RFValue(130)}px;

  
`;

export const ListTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;


export const Transactions = styled(
  FlatList as new () => FlatList<TransactionType>
).attrs({
  showsVerticalScrollIndicator: false,
})``;
export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
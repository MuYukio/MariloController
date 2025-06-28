import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';

interface IconProps {
  type: 'income' | 'outcome';
  isActive: boolean;
}

interface ContainerProps {
  isActive: boolean;
  type: 'income' | 'outcome';
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  ${({ isActive, type, theme }) => 
    isActive &&
    css`
      background-color: ${type === 'income' 
        ? theme.colors.success 
        : theme.colors.error};
    `
  }
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, isActive }) => 
    isActive 
      ? theme.colors.shape 
      : theme.colors.text};
`;

export const Title = styled.Text<{ isActive: boolean }>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, isActive }) => 
    isActive 
      ? theme.colors.shape 
      : theme.colors.text};
`;
// src/screens/Resumo/styles.ts
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
 
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};
  margin-bottom: ${RFValue(16)}px;
  text-align: center;
  margin-top: ${RFValue(45)}px; 
`;

export const MonthSelector = styled.View`
  width: 80%;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(12)}px;
 padding: ${RFValue(8)}px ${RFValue(12)}px ${RFValue(8)}px ${RFValue(12)}px;
  padding-right: ${RFValue(24)}px;
  margin-bottom: ${RFValue(24)}px;
  border: 1px solid ${({ theme }) => theme.colors.text_light};
`;

export const ChartContainer = styled.View`
  width: 100%;
  flex-direction: row;           
  justify-content: center;       
  align-items: center;          
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(16)}px;
  margin-bottom: ${RFValue(24)}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: ${RFValue(4)}px;
  elevation: 3;
`;

export const LegendContainer = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${RFValue(24)}px;
  padding: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(8)}px;
  max-height: ${RFValue(200)}px;
`;

export const LegendItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(12)}px;
  padding-vertical: ${RFValue(8)}px; 
`;

export const ColorDot = styled.View<{ color: string }>`
  width: ${RFValue(12)}px;
  height: ${RFValue(12)}px;
  border-radius: ${RFValue(6)}px;
  background-color: ${({ color }) => color};
  margin-right: ${RFValue(12)}px;
`;

export const LegendText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

import styled from "styled-components/native";
// import theme from "../../global/styles/theme";

import{
    RFPercentage,
    RFValue,
} from 'react-native-responsive-fontsize'
import theme from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    padding-bottom: RFValue(60);

`
export const Title = styled.Text`
    font-family: ${({ theme}) => theme.fonts.bold};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text};
    
`

export const Header = styled.View`
    width: 100%;
    height: ${ RFPercentage(42) };
    background-color: ${ ({theme}) => theme.colors.primary };
    justify-content: flex-start;
    align-items: center;

`
export const UserWrapper = styled.View`
    width: 100%;
    align-items: center;
    padding: 0 25px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFValue(60)}px;
`   

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Photo = styled.Image`
    width: ${ RFPercentage(10) }px;
    height: ${ RFPercentage(10) }px;
    border-radius: ${ ({theme}) => theme.borderRadius.medium}px;
`
export const User = styled.View`
    margin-left: 10px;
`
export const UserGreeting  = styled.Text`
    color: ${ ({theme}) => theme.colors.shape};
    font-size: ${ RFValue(18)}px;
    font-family: ${ ({theme}) => theme.fonts.regular};    
`
export const UserName  = styled.Text`
    color: ${ ({theme}) => theme.colors.shape};
    font-size: ${ RFValue(18)}px;
    font-family: ${ ({theme}) => theme.fonts.bold};  
`

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.secundary};
    font-size: ${RFValue(24)}px;
`
export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:  {paddingHorizontal: 24},
    
})`
    width:100%;
    position:absolute;
    margin-top: ${RFPercentage(27.5)}px;
    z-index:9;
`

export const Text = styled.Text`
`
export const ListContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  margin: ${RFValue(120)}px ${RFValue(40)}px 0;   /* top, horizontal */
  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  padding: ${RFValue(12)}px;
  margin-bottom: ${RFValue(60)}px
`;

// novo: título “Listagem” estilizado
export const ListTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.large}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFValue(8)}px;
`;

export const Transactions = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: RFValue(16),
    paddingBottom: RFValue(16),
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
   
  
`;

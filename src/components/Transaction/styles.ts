import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container =styled.View`
 background-color: ${ ({ theme }) =>  theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: ${({theme}) => theme.borderRadius.large}px;
    padding: 20px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: ${({theme}) => theme.spacing.small};
`
export const Header = styled.View`
    padding: 5px 10px;
`
export const Text = styled.Text`
`
export const Money = styled.Text`
`
export const Footer = styled.View`
`
export const Spend = styled.Text`
`
export const Data = styled.Text`
`

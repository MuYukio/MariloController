import styled from "styled-components/native"

import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: ${RFValue(120)}px;
    align-items: center;
    padding-bottom: 20px;
    font-family:${({ theme })=>theme.fonts.bold};

`

export const Title = styled.Text`
    margin-top: 60px;
    align-items: center;
    font-family:${({ theme }) => theme.fonts.regular};
    color:${({ theme }) => theme.colors.shape};
    font-size: ${({ theme }) =>theme.fontSize.xlarge};  
`
export const Form = styled.View`
    flex:1;
    width: 100%;
    padding: 24px;
`

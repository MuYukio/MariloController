import React from "react";
import { 
  Container,
  Icon,
  Title,
  Button} from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

const icons = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
}

interface Props extends RectButtonProps {
  type: 'income' | 'outcome';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({ 
  type, 
  title, 
  isActive,
  ...rest 
}: Props) {
  return (
    <Container 
      isActive={isActive}
      type={type}
    >
      <Button {...rest}>
        <Icon 
          name={type === 'income' ? 'arrow-up-circle' : 'arrow-down-circle'} 
          type={type}
          isActive={isActive}
        />
        <Title isActive={isActive}>
          {title}
        </Title>
      </Button>
    
    </Container>
  );
}
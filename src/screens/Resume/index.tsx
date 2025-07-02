import React, { useState, useCallback } from 'react';
import { Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { PieChart } from 'react-native-chart-kit';
import { useFocusEffect } from '@react-navigation/native';

import {
  Container,
  Title,
  MonthSelector,
  ChartContainer,
  LegendContainer,
  LegendItem,
  ColorDot,
  LegendText,
} from './styles';

const screenWidth = Dimensions.get('window').width;

type CategoriaResumo = {
  categoria: string;
  total: number;
  cor: string;
};

export function Resumo() {
  const [resumo, setResumo] = useState<CategoriaResumo[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    `${new Date().getMonth() + 1}`
  );

  useFocusEffect(
    useCallback(() => {
      // Função autoexecutável dentro de callback síncrono
      (async () => {
        try {
          const res = await fetch(
            `http://10.0.0.131:3000/api/v1/transacoes/resumo-por-categoria?mes=${selectedMonth}`
          );
          const data: CategoriaResumo[] = await res.json();
          setResumo(data);
        } catch (err) {
          console.error('Erro ao carregar resumo:', err);
        }
      })();

      // Não há cleanup necessário
      return;
    }, [selectedMonth])
  );

  const totalGeral = resumo.reduce((acc, cur) => acc + cur.total, 0);

  const chartData = resumo.map((item) => ({
    name: item.categoria,
    population: item.total,
    color: item.cor,
    legendFontColor: '#333',
    legendFontSize: 12,
  }));

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <Container>
      <Title>Resumo</Title>

      <MonthSelector>
        <Picker
          selectedValue={selectedMonth}
          onValueChange={setSelectedMonth}
          style={{
            width: '100%',
            color: '#333',
            paddingRight: 24,
          }}
          itemStyle={{ textAlign: 'center' }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <Picker.Item
              key={i + 1}
              label={`Mês ${i + 1}`}
              value={`${i + 1}`}
            />
          ))}
        </Picker>
      </MonthSelector>

      <ChartContainer>
        {chartData.length > 0 && (
          <PieChart
            data={chartData}
            width={screenWidth * 0.8}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="0"
            center={[80, 0]}
            absolute
            hasLegend={false}
            style={{ alignSelf: 'center' }}
          />
        )}
      </ChartContainer>

      <LegendContainer>
        {resumo.map((item, index) => {
          const percent = ((item.total / totalGeral) * 100).toFixed(0);
          return (
            <LegendItem key={index}>
              <ColorDot color={item.cor} />
              <LegendText>{`${item.categoria} – ${percent}%`}</LegendText>
            </LegendItem>
          );
        })}
      </LegendContainer>
    </Container>
  );
}

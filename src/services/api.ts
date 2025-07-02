// services/api.ts
const API_BASE = 'http://10.0.0.131:3000/api/v1/transacoes';

export async function buscarTransacoes() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error(`Erro ${res.status}`);
  return res.json();
}

export async function criarTransacao(transacao: {
  titulo: string;
  preco: number;
  categoria: string;
  tipo: string;
  data: string;
}) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transacao),
  });
  if (!res.ok) throw new Error(`Erro ${res.status}`);
  return res.json();
}

export interface Trader {
  nome: string;
  bio: string;
  especialidade: string;
  experiencia: string;
  retorno_medio: string;
}

export const tradersData: Trader[] = [
  {
    "nome": "Carlos Silva",
    "bio": "Especialista em Day Trading com 8 anos de experiência. Foco em ações BR e美股",
    "especialidade": "Day Trade",
    "experiencia": "8 anos",
    "retorno_medio": "4.2% ao mês"
  },
  {
    "nome": "Ana Rodrigues", 
    "bio": "Trader de Forex especializada em EUR/USD e GBP/JPY. Análise técnica avançada",
    "especialidade": "Forex",
    "experiencia": "6 anos",
    "retorno_medio": "3.8% ao mês"
  },
  {
    "nome": "Ricardo Mendes",
    "bio": "Expert em Criptomoedas desde 2017. Estratégias de swing trading em BTC e altcoins",
    "especialidade": "Criptomoedas",
    "experiencia": "5 anos", 
    "retorno_medio": "7.5% ao mês"
  },
  {
    "nome": "Fernanda Costa",
    "bio": "Especialista em Opções Binárias. Estratégias de alta frequência e scalping",
    "especialidade": "Opções",
    "experiencia": "4 anos",
    "retorno_medio": "5.1% ao mês"
  },
  {
    "nome": "Marcos Oliveira",
    "bio": "Trader institucional com foco em commodities. Ouro, Petróleo e Agro",
    "especialidade": "Commodities",
    "experiencia": "10 anos",
    "retorno_medio": "3.5% ao mês"
  },
  {
    "nome": "Patrícia Santos",
    "bio": "Analista técnica especializada em índices globais. NASDAQ, DOW, SP500",
    "especialidade": "Índices",
    "experiencia": "7 anos",
    "retorno_medio": "4.0% ao mês"
  },
  {
    "nome": "Rodrigo Almeida",
    "bio": "Especialista em Swing Trading com foco em small caps brasileiras",
    "especialidade": "Swing Trade",
    "experiencia": "5 anos",
    "retorno_medio": "4.8% ao mês"
  },
  {
    "nome": "Juliana Pereira",
    "bio": "Trader algorítmica com sistemas automatizados para mercados voláteis",
    "especialidade": "Algo Trading",
    "experiencia": "4 anos",
    "retorno_medio": "6.2% ao mês"
  },
  {
    "nome": "Thiago Martins",
    "bio": "Especialista em Mercado Futuro. Hedge e especulação em commodities agrícolas",
    "especialidade": "Futuros",
    "experiencia": "9 anos",
    "retorno_medio": "3.9% ao mês"
  },
  {
    "nome": "Camila Rocha",
    "bio": "Analista fundamentalista com foco em value investing e dividendos",
    "especialidade": "Fundamentalista",
    "experiencia": "6 anos",
    "retorno_medio": "4.5% ao mês"
  }
];

export const especialidades = [
  "Todas",
  "Day Trade",
  "Forex", 
  "Criptomoedas",
  "Opções",
  "Commodities",
  "Índices",
  "Swing Trade",
  "Algo Trading",
  "Futuros",
  "Fundamentalista"
];
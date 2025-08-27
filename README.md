# Frontend Challenge - MercadoE

Este é um aplicativo Vue.js para exibir e gerenciar informações e endereços de fornecedores. Este aplicativo oferece uma interface limpa e responsiva para visualizar dados detalhados de fornecedores, incluindo informações de contato, documentos e vários endereços.

## 🚀 Features

- **Exibição de Informações do Fornecedor**: Visualize detalhes completos do fornecedor, incluindo informações da empresa, detalhes de contato e documentos
- **Gerenciamento de Endereços**: Exiba vários endereços (faturamento, entrega, etc.) com seções recolhíveis
- **Design Responsivo**: Interface de Usuário moderna desenvolvida com Tailwind CSS que funciona em todos os dispositivos
- **Carregamento Dinâmico de Dados**: Busca de dados em tempo real da API com tratamento adequado de erros
- **Arquitetura Baseada em Componentes**: Componentes reutilizáveis
- **Formatação de Data**: Formatação automática de strings de data ISO para um formato amigável

## 🛠️ Tecnologias Utilizadas

### Frontend Framework

- **Vue.js 3.5.18**
- **Vite 7.0.6**

### Styling & UI

- **Tailwind CSS 4.1.12**

### HTTP Client

- **Axios 1.11.0**

## 📦 Instalação

### Pré-requisitos

- Node.js (version ^20.19.0 or >=22.12.0)
- npm ou yarn package manager

### Instruções de Configuração

1. **Clone o repositório**

   ```bash
   git clone https://github.com/raquellandrade/frontend-challenge-mercadoe
   cd frontend-challenge-mercadoe
   ```

2. **Instale as dependencias**

   ```bash
   npm install
   ```

3. **Iniciar servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Abra seu navegador**
   Navegue até `http://localhost:5173` para visualizar o aplicativo

## 🚀 Scripts

### Desenvolvimento

```bash
npm run dev          # Iniciar servidor de desenvolvimento com hot reload
```

### Building

```bash
npm run build        # Build para produção
npm run preview      # Preview do build de produção
```

### Testing

```bash
npm run test:unit    # Inicia unit tests com Vitest
```

### Code Quality

```bash
npm run lint         # Lint e fix code com ESLint
npm run format       # Formatar código com Prettier
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Vue componentes
│   ├── ui/             # Componentes de interface do usuário reutilizáveis
│   │   ├── BaseCard.vue    # Componente de cartão dinâmico
│   │   └── BaseBadge.vue   # Badge componente
│   ├── icons/          # Icones como componentes
│   ├── ForeHead.vue    # Header componente
│   └── InformationItem.vue # Componente de exibição de informações
├── data/               # Gestão de dados
│   └── apiClient.js    # Configuração da API
├── assets/             # Ativos estáticos
└── App.vue            # Componente principal do aplicativo
```

## 🔧 Configuração

### Configuração da API

O aplicativo usa uma configuração de proxy em `vite.config.js` para lidar com problemas de CORS durante o desenvolvimento. As solicitações de API são encaminhadas por proxy de `/api/*` para `https://api.mercadoe.space/*`.

### Configuração do ambiente

- O servidor de desenvolvimento é executado em `http://localhost:5173`
- O proxy da API é configurado para uma experiência de desenvolvimento fluida

## 📱 Características em detalhes

### Cartão de Informações do Fornecedor

- Exibe o nome, código e tipo da empresa
- Exibe informações do documento (CNPJ, etc.)
- Detalhes de contato com ícones (e-mail, telefone, fax)
- Informações de endereço
- Ler carimbo de data/hora

### Gerenciamento de Endereços

- Seções de endereço recolhíveis
- Vários tipos de endereço (cobrança, entrega, etc.)
- Estrutura de dados consistente em todos os endereços
- Layout responsivo para diferentes tamanhos de tela

### Tratamento de Dados

- Filtragem de valores nulos/indefinidos
- Tratamento adequado de erros para solicitações de API
- Renderização dinâmica de conteúdo com base nos dados disponíveis
- Formatação de string de data ISO

## 🤝 Contribuindo

1. Faça um Fork do repositório
2. Crie uma branch de funcionalidade (`git checkout -b feature/amazing-feature`)
3. Faça o commit das suas alterações (`git commit -m 'Add some amazing feature'`)
4. Faça o push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

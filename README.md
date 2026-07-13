# 🚀 Banco API Performance

Repositório destinado ao estudo e à prática de **Testes de Performance
em APIs REST** utilizando **JavaScript** e **k6**.

Este projeto foi desenvolvido durante o **Módulo de Testes de
Performance** da **Mentoria de Testes de Software 2.0**, ministrada por
**Júlio de Lima**, com o objetivo de aplicar na prática conceitos de
testes de carga, autenticação via token, reutilização de código,
utilização de variáveis de ambiente e geração de relatórios de execução.

## 📖 Introdução

Os testes de performance avaliam o comportamento da aplicação sob
diferentes condições de carga, permitindo identificar gargalos, medir
tempos de resposta e verificar a estabilidade do sistema.

## 🛠️ Tecnologias utilizadas

-   JavaScript (ES6+)
-   k6
-   Node.js
-   Git
-   GitHub
-   k6 Web Dashboard

## 📂 Estrutura do repositório

``` text
.
├── config/
├── fixtures/
├── helpers/
├── tests/
├── utils/
├── .gitignore
└── README.md
```

## 📁 Objetivo de cada grupo de arquivos

### config

Arquivos de configuração do projeto, incluindo variáveis de ambiente.

### fixtures

Massas de dados utilizadas pelos testes.

### helpers

Funções reutilizáveis, como autenticação e obtenção de token.

### tests

Cenários de testes desenvolvidos com k6.

### utils

Funções auxiliares compartilhadas.

## ⚙️ Instalação

``` bash
git clone https://github.com/CibeleFalaschi/banco-api-performance.git
cd banco-api-performance
```

Instale o k6 conforme seu sistema operacional.

## ▶️ Execução

Os testes utilizam a variável de ambiente **BASE_URL**.

``` bash
k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
```

``` bash
k6 run tests/transferencias.test.js -e BASE_URL=http://localhost:3000
```

## 📊 Dashboard em tempo real

``` bash
K6_WEB_DASHBOARD=true k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
```

Acesse:

``` text
http://127.0.0.1:5665
```

## 📄 Exportação do relatório HTML

``` bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
```

``` bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/transferencias.test.js -e BASE_URL=http://localhost:3000
```

Será gerado o arquivo **html-report.html**.

## 🎯 Objetivo do projeto

Aplicar na prática os conceitos estudados durante o módulo de Testes de
Performance da Mentoria de Testes de Software 2.0, incluindo
autenticação via Bearer Token, variáveis de ambiente, reutilização de
código e geração de relatórios.

## 👩‍💻 Autora

**Cibele Cristina Falaschi**

-   GitHub: https://github.com/CibeleFalaschi
-   Repositório: https://github.com/CibeleFalaschi/banco-api-performance

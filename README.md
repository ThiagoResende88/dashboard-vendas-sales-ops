# Dashboard de Análise de Vendas - Desafio Técnico Sales Ops

![Looker Studio](https://img.shields.io/badge/Looker_Studio-4285F4?style=for-the-badge&logo=looker&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google_Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)

## 🎯 Visão Geral do Projeto

Este projeto apresenta a construção de um dashboard de análise de vendas no Looker Studio, desenvolvido como parte de um desafio técnico para a posição de Sales Ops Júnior. O objetivo foi transformar um conjunto de dados brutos de vendas, fornecido em um arquivo CSV, em um painel interativo e funcional para apoiar a tomada de decisão de um gestor comercial.

---

## 🖼️ Preview do Dashboard


https://github.com/user-attachments/assets/a057de7d-d9da-4d35-9d30-549d236492a8


**🔗 [Acesse o Dashboard Interativo Aqui](https://lookerstudio.google.com/u/0/reporting/2597daed-dda9-4269-ae27-a9cdb9616e2a)**

---

## O Desafio Proposto

A tarefa consistia em criar um dashboard no Looker Studio que contivesse os seguintes elementos:
- **Resumo Geral:** Total de vendas, ticket médio e percentual de meta atingida.
- **Gráficos:** Evolução mensal de vendas vs. meta e ranking de vendedores.
- **Interatividade:** Filtros por região e produto.
- **Análise Adicional:** Distribuição de vendas por status (Concluída, Perdida, etc.).
- **Requisitos Visuais:** Layout limpo, organizado e com uso de cores coerentes.

---

## 🛠️ Processo de Desenvolvimento e Decisões Chave

O desenvolvimento seguiu algumas etapas cruciais, desde a análise dos dados até a entrega final.

### 1. Análise e Preparo dos Dados
O primeiro passo foi uma análise exploratória do arquivo CSV no Google Sheets. Nesta etapa, foram identificadas e corrigidas pequenas inconsistências nos dados, como a quebra de um nome de vendedor em duas linhas, garantindo a integridade da base para a análise.

### 2. Definição da Lógica de Negócio (O Ponto Crucial)
O desafio analítico mais significativo foi interpretar a coluna `Meta mensal (R$)`. Uma análise superficial revelou que o mesmo vendedor poderia ter valores de meta diferentes dentro do mesmo mês. Isso levantou duas hipóteses:

- **Hipótese 1 (Média):** A meta é um valor único mensal e os diferentes valores são erros ou variações. A `MÉDIA` seria uma forma de encontrar o valor central.
- **Hipótese 2 (Soma):** A meta total de um vendedor é a `SOMA` de diferentes metas que ele possui (ex: uma meta para o Produto X e outra para o Serviço Y).

**Decisão Tomada:** Optei pela **Hipótese 2 (Soma)**, por ser a mais robusta e segura. Assumi que a meta total de um vendedor representa o esforço consolidado esperado dele no período. Esta premissa foi a base para todos os cálculos de atingimento de meta no dashboard, garantindo consistência e uma justificativa clara para a metodologia adotada.

### 3. Visualização e Design
A escolha dos gráficos foi feita para responder perguntas de negócio específicas:
- **Scorecards:** Para KPIs de impacto rápido.
- **Gráfico de Combinação (Barras e Linha):** Para comparar a evolução das vendas contra a meta ao longo do tempo.
- **Gráfico de Barras Horizontais:** Para criar um ranking claro e de fácil leitura.

---

## 💻 Ferramentas Utilizadas

- **Google Sheets:** Para preparação e armazenamento dos dados.
- **Looker Studio (antigo Google Data Studio):** Para a criação do dashboard interativo e visualização dos dados.

---

## 🚀 Possíveis Melhorias Futuras

Se este fosse um projeto contínuo, os próximos passos poderiam incluir:
- **Automação da Carga de Dados:** Criar um pipeline para atualizar os dados automaticamente.
- **Análises Preditivas:** Desenvolver modelos simples para prever vendas futuras com base no histórico.
- **Análise de Funil de Vendas:** Detalhar a taxa de conversão entre os status "Em negociação" -> "Concluída".

---

## 👨‍💻 Autor

- **Thiago Dias Resende**
- **LinkedIn:** [https://www.linkedin.com/in/thiagodiasresende/](https://www.linkedin.com/in/thiagodiasresende/)

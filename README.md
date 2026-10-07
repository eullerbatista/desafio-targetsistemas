

```markdown
# Desafio Target Sistemas

Este repositório contém a resolução de três exercícios práticos em **Node.js**, organizados em pastas separadas.

---

## Estrutura
```
DesafioTargetSistemas 
│── exercicio_1
│   ├── .gitignore
│   ├── index.js
│   └── vendas.json
│
│── exercicio_2
│   ├── .gitignore
│   ├── index.js
│   └── estoque.json
│
│── exercicio_3
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
```

---

## Exercícios

### - Exercício 1 – Cálculo de Comissões
Programa que lê um arquivo JSON com registros de vendas e calcula a comissão de cada vendedor seguindo regras específicas de percentual por faixa de valor.

### - Exercício 2 – Controle de Estoque
Sistema simples de movimentação de estoque, permitindo lançar entradas e saídas de produtos.  
Cada movimentação possui identificador único, descrição e retorna o estoque atualizado do produto movimentado.

### - Exercício 3 – Cálculo de Juros
Aplicação que, a partir de um valor e uma data de vencimento, calcula o valor final com juros considerando multa de **2,5% ao dia de atraso**.  
Implementado com auxílio da biblioteca **date-fns** para manipulação de datas.

---


##  Tecnologias utilizadas
- **Node.js**
- **JavaScript**
- **date-fns** (para manipular as datas)
- **Git/GitHub** (versionamento e compartilhamento)

---

## Como utilizar
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/desafio-targetsistemas.git
   ```
2. Acesse a pasta do exercício desejado:
   ```bash
   cd desafio-targetsistemas/exercicio_1
   ```
3. Execute o programa:
   ```bash
   node index.js
   ```

>  No **exercício 3**, instale as dependências antes de rodar:
```bash
npm install
node index.js
```

---

## Autor
Desenvolvido por **Euller** como parte do desafio técnico da Target Sistemas.
```

---

Basta criar um arquivo chamado `README.md` na raiz do projeto e colar esse conteúdo. Assim, quando você subir para o GitHub, o README será exibido automaticamente na página inicial do repositório.  

Quer que eu te mostre também como adicionar um **badge** (selo visual) no README, por exemplo mostrando a versão do Node.js ou status do projeto?
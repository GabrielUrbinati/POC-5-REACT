# POC - Gerador de Curiosidades de Física Quântica

Este é um **Gerador de Curiosidades de Física Quântica** desenvolvido em **React** com **Next.js** e **TypeScript**. A aplicação permite que o usuário clique em um botão para gerar curiosidades aleatórias sobre física quântica. O layout é responsivo e possui uma interface minimalista com animações suaves.

## Funcionalidades
- Gera curiosidades aleatórias sobre física quântica ao clicar no botão.
- Contador que exibe quantas curiosidades foram geradas.
- Estilo responsivo e animações suaves.
- Componentes reutilizáveis como `Botao`, `Frases` e `Contador`.

## Tecnologias Utilizadas
- **React**: Biblioteca para criação de interfaces.
- **Next.js**: Framework para React, com suporte a renderização no lado do servidor e funcionalidades avançadas.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
- **CSS Modules**: Para estilização escopada nos componentes.
- **HTML5** e **CSS3**: Para estrutura e estilo da aplicação.

## Requisitos

- **Node.js** (>= 12.x)
- **npm** ou **yarn**

## Instalação e Execução

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/poc-curiosidades-quanticas.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd poc-curiosidades-quanticas
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

5. Abra o navegador e acesse:

    ```
    http://localhost:3000
    ```

## Estrutura do Projeto

```bash
├── app
│   ├── Componentes
│   │   ├── Botao.jsx         # Componente do botão de gerar frases
│   │   ├── Botao.module.css  # Estilos do botão
│   │   ├── Contador.jsx      # Componente do contador de frases
│   │   ├── Contador.module.css  # Estilos do contador
│   │   ├── Frases.jsx        # Componente que exibe a frase gerada
│   │   ├── Frases.module.css # Estilos das frases
│   ├── globals.css           # Estilos globais do projeto
│   ├── layout.tsx            # Layout principal da aplicação
│   ├── page.tsx              # Página inicial da aplicação
├── public
│   ├── fundo.png             # Imagem de fundo da página
└── README.md                 # Arquivo de documentação do projeto
```
## Componentes

- **Botao.tsx**: Botão que, ao ser clicado, chama a função que gera uma nova curiosidade.
  
- **Contador.tsx**: Exibe o número de frases geradas até o momento.
  
- **Frases.tsx**: Exibe a curiosidade gerada aleatoriamente.

## Estilos

Os estilos são escopados por componente utilizando **CSS Modules**.

- Estilos globais, como fontes e background, são definidos no arquivo `globals.css`.

## Como Funciona

O projeto usa **React** e **Next.js** para criar componentes funcionais e renderizar a página.

Cada vez que o botão "Gerar Frase" é clicado, o componente `PaginaInicial` chama a função `gerarFrase`, que escolhe uma curiosidade aleatória da lista.

O número de frases geradas é armazenado no estado e exibido pelo componente `Contador`.

## Capturas de Tela

- **Tela Inicial**: Apresenta o botão para gerar curiosidades e o contador de frases geradas.

## Contribuição

1. Faça um **fork** do repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Faça suas alterações e **commit**: `git commit -m 'Minha nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um **pull request**.

## Créditos

Desenvolvido por:

- Gabriel Branco Urbinati RA 10443760
- Eduardo Berthoux de Oliveira Souza RA 10322329
- Lucas Sanches Coelho RA 10410045
- Clovis Arroyo RA 10395595

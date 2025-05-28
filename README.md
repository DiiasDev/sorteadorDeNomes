# 🎲 Sorteador de Nomes

Um aplicativo web simples e elegante para sortear nomes de forma aleatória, desenvolvido com **HTML5**, **CSS3** e **JavaScript Vanilla** utilizando os princípios da **Programação Orientada a Objetos (POO)** 🎯.

## 📋 Funcionalidades

✨ **Adicionar nomes**: Interface intuitiva para adicionar nomes à lista  
🔒 **Validação de duplicatas**: Previne a adição de nomes repetidos  
🎲 **Sorteio aleatório**: Sistema de embaralhamento para seleção justa  
🔔 **Alertas customizados**: Sistema de notificações visuais com diferentes tipos (sucesso, erro, aviso)  
📱 **Interface responsiva**: Design adaptável para diferentes tamanhos de tela  
✨ **Animações suaves**: Transições e efeitos visuais para melhor experiência do usuário  

## 🚀 Como usar

1️⃣ Digite um nome no campo de texto  
2️⃣ Clique em "➕ Adicionar Nome" para incluir na lista  
3️⃣ Repita o processo para adicionar mais nomes  
4️⃣ Clique em "🎲 Sortear Nome" para selecionar aleatoriamente um nome da lista  
5️⃣ O nome sorteado é removido automaticamente da lista ✅  

## 🛠️ Estrutura do Projeto

```
Sorteador-de-Nomes/
├── 📄 index.html
├── 🎨 style.css
├── ⚡ script.js
└── 📖 README.md
```

## 💻 Tecnologias

🌐 **HTML5**: Estrutura semântica  
🎨 **CSS3**: Estilização moderna com gradientes e animações  
⚡ **JavaScript ES6+**: Classes, arrow functions e métodos de array  

## 🎯 Programação Orientada a Objetos (POO)

Este projeto foi desenvolvido aplicando os **conceitos fundamentais da POO** para garantir código limpo, reutilizável e bem estruturado:

### 🏗️ **Encapsulamento**
- Dados e métodos são organizados dentro de classes específicas
- Cada classe possui responsabilidades bem definidas

### 📦 **Abstração** 
- Interfaces simples para operações complexas
- Métodos que escondem a complexidade interna

### 🔧 **Modularidade**
- Código dividido em classes especializadas
- Facilita manutenção e expansão do projeto

## 🎨 Características do Design

🌃 **Tema escuro**: Gradiente moderno em tons de azul-acinzentado  
💳 **Cards com sombra**: Efeito de profundidade  
🖱️ **Botões interativos**: Efeitos hover e animações  
🔔 **Sistema de alertas**: Modais com barra de progresso automática  
📱 **Responsivo**: Adaptável para dispositivos móveis  

## 📱 Classes Principais (POO)

### 🎲 `Sortear`
**Classe principal** que gerencia toda a funcionalidade do sorteador:

🔹 `adicionarNomes()`: Gerencia a adição de nomes com validações  
🔹 `sortearNomes()`: Implementa o algoritmo de sorteio aleatório  
🔹 **Encapsulamento**: Mantém estado interno da lista de nomes  
🔹 **Responsabilidade única**: Foca apenas na lógica de sorteio  

### 🔔 `CustomAlert`
**Sistema de alertas orientado a objetos** com:

🔹 Diferentes tipos de alerta (info, success, error, warning)  
🔹 Auto-fechamento em 3 segundos ⏱️  
🔹 Barra de progresso visual 📊  
🔹 Fechamento manual via clique 🖱️  
🔹 **Polimorfismo**: Diferentes comportamentos baseados no tipo de alerta  

## 🔧 Como executar

1️⃣ Clone ou baixe os arquivos do projeto 📥  
2️⃣ Abra o arquivo `index.html` em qualquer navegador web moderno 🌐  
3️⃣ Comece a adicionar nomes e fazer sorteios! 🎉  

## ✅ Validações

✅ Campos vazios não são aceitos  
✅ Nomes duplicados são rejeitados  
✅ Lista vazia impede sorteios  
✅ Feedback visual para todas as ações  

## 🎯 Vantagens da Arquitetura POO

🔹 **Manutenibilidade**: Código organizado e fácil de modificar  
🔹 **Reutilização**: Classes podem ser facilmente reutilizadas  
🔹 **Escalabilidade**: Fácil adição de novas funcionalidades  
🔹 **Testabilidade**: Classes isoladas facilitam testes unitários  

---

💡 **Desenvolvido com 💙 aplicando os melhores princípios da Programação Orientada a Objetos!**

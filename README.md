# RView Web

Bem-vindo ao **RView Web**, um sistema de navegação baseado em React voltado para a exibição de funcionalidades administrativas, gráficos e geração de relatórios. Este sistema foi projetado para ser modular e escalável, garantindo facilidade de uso e manutenção ao longo do tempo.

---

## 📋 Funcionalidades
- **Administração**:
    - Gerenciamento de usuários.
    - Exibição e análise de logs.
    - Visualização de performance.
- **Gráficos**:
    - Relatórios visuais por fabricantes (e.g., Cisco, Nokia).
- **Relatórios**:
    - Geração de relatórios detalhados por categorias e dispositivos.
- **Logout**:
    - Encerramento seguro da sessão do usuário.

---

## 🛠️ Tecnologias Utilizadas
O sistema foi desenvolvido com as seguintes tecnologias:
- **Frontend**:
    - [React](https://reactjs.org/) (v18.3.1)
    - **React Router DOM** para roteamento dinâmico.
    - **TailwindCSS** para o design moderno e responsivo.
- **Backend**:
    - Estrutura configurada para integração com Node.js (não implementado no contexto atual).
- **Outras Dependências**:
    - [@headlessui/react](https://headlessui.dev/) para menus acessíveis.
    - ESLint para padronização de código.
    - PropTypes para validação de propriedades.
    - [Vite](https://vitejs.dev/) para build e ambiente de desenvolvimento rápido.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

Além disso, é recomendado ter um ambiente configurado com o JavaScript ES6+.

### 🔧 Passos para Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/RView-Web.git
   cd RView-Web
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse o sistema no navegador:
   ```
   http://localhost:5173
   ```

---

## 🌐 Estrutura do Sistema de Arquivos

O projeto segue uma estrutura organizada para separar componentes, estilos e lógica.
```
src/
├── components/          # Componentes React reutilizáveis
│   ├── AdminUsuarios.jsx         # Gerenciamento de usuários
│   ├── AdminLogs.jsx             # Exibição de logs
│   ├── AdminPerformance.jsx      # Visualização de performance
│   ├── GraficosCisco.jsx         # Gráficos baseados nos dispositivos Cisco
│   ├── GraficosNokia.jsx         # Gráficos baseados nos dispositivos Nokia
│   ├── RelatoriosCisco.jsx       # Relatórios dos dispositivos Cisco
│   ├── RelatoriosNokia.jsx       # Relatórios dos dispositivos Nokia
│   ├── Logout.jsx                # Componente responsável pelo logout
│   ├── Logo.jsx                  # Logo do sistema
│   ├── NavigationMenu.jsx        # Menu de navegação principal
│   ├── MenuItemGroup.jsx         # Subgrupo de links do menu
│   ├── MenuItemLink.jsx          # Link individual do menu
├── App.jsx               # Componente principal da aplicação
├── Header.jsx            # Cabeçalho com o menu principal
├── Footer.jsx            # Rodapé do sistema
├── Body.jsx              # Corpo inicial com mensagem de boas-vindas
├── index.css             # Estilos globais da aplicação
├── main.jsx              # Ponto de entrada principal do React
```


---
- **components/ **:
    - Contém todos os componentes React reutilizáveis que são organizados por funcionalidades.

- **`App.jsx` **:
    - Configura as rotas do sistema e organiza os componentes gerais como **Header**, **Body** e **Footer**.

- **`Header.jsx` **:
    - Responsável por renderizar o menu de navegação e o logotipo do sistema.

- **`Footer.jsx` **:
    - Exibe informações no rodapé, como data e hora.

- **`Body.jsx` **:
    - Tela inicial com uma mensagem de boas-vindas.

- **`main.jsx` **:
    - Ponto de entrada principal que renderiza o aplicativo React e envolve com o `BrowserRouter`.

## 🖥️ Uso

### Rotas Disponíveis
O projeto utiliza **React Router DOM** para gerenciar as rotas e exibir os componentes correspondentes. Aqui estão as rotas configuradas:

| Rota                  | Componente           | Descrição                             |
|-----------------------|----------------------|-------------------------------------|
| `/`                   | `Body`              | Tela inicial de boas-vindas.         |
| `/admin/usuarios`     | `AdminUsuarios`     | Gerenciamento de usuários.           |
| `/admin/logs`         | `AdminLogs`         | Exibição e consulta de logs.         |
| `/admin/performance`  | `AdminPerformance`  | Visualização de performance geral.    |
| `/graficos/cisco`     | `GraficosCisco`     | Gráficos relacionados à Cisco.       |
| `/graficos/nokia`     | `GraficosNokia`     | Gráficos relacionados à Nokia.       |
| `/relatorios/cisco`   | `RelatoriosCisco`   | Relatórios para dispositivos Cisco.  |
| `/relatorios/nokia`   | `RelatoriosNokia`   | Relatórios para dispositivos Nokia.  |
| `/logout`             | `Logout`           | Encerramento da sessão.              |

### Navegação
- O menu principal está localizado no componente **`Header`**.
- As opções do menu são renderizadas dinamicamente usando componentes reutilizáveis como:
    - `NavigationMenu`
    - `MenuItemGroup`
    - `MenuItemLink`

### Customização
- Você pode adicionar novas rotas e componentes ajustando o arquivo `App.jsx` e os componentes do menu no `Header.jsx`.

---

## 💻 Contribuindo
Se você deseja contribuir com o projeto:
1. Faça um fork do repositório.
2. Crie um branch para a sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Adicione suas alterações:
   ```bash
   git add .
   git commit -m "Minha nova feature"
   ```
4. Envie para o seu repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Crie um Pull Request no repositório original.

---

## 🛡️ Licença
Este projeto está licenciado sob os termos da licença **MIT**.

---

## ✨ Agradecimentos
Agradecemos a todos os colaboradores e desenvolvedores que ajudaram na construção dessa aplicação. 💖
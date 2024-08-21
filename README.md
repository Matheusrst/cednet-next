# Projeto Grupo Cednet

Bem-vindo ao projeto do Grupo Cednet! Este projeto utiliza Next.js para criar uma aplicação de internet com diferentes páginas e funcionalidades para promover a conectividade em diferentes contextos. O projeto inclui páginas para planos rurais, residenciais e corporativos, com seções destacadas, carrosséis interativos e um design responsivo.

## Estrutura do Projeto

### Páginas

1. **`index.js`**
   - Página principal que destaca os planos oferecidos pelo Grupo Cednet.
   - Inclui uma seção de destaque, uma grade de planos com imagens e links, e um rodapé com informações de contato.

2. **`rural.js`**
   - Página dedicada ao plano rural.
   - Apresenta uma visão detalhada dos serviços de internet para áreas rurais, incluindo informações sobre alta velocidade, confiabilidade e suporte.

3. **`residencial.js`**
   - Página dedicada ao plano residencial.
   - Destaca as características e benefícios do serviço de internet para residências, com uma seção de planos interativos e um design responsivo.

4. **`corporativo.js`**
   - Página dedicada ao plano corporativo.
   - Oferece detalhes sobre soluções de internet para empresas, com uma seção de destaque, uma grade de funcionalidades, e um carrossel interativo de planos corporativos.

### Componentes Reutilizáveis

- **`Header`**: Componente de cabeçalho utilizado em várias páginas, incluindo o logotipo e a navegação principal.
- **`Footer`**: Componente de rodapé incluído em todas as páginas, com links de contato e informações de copyright.

### Dependências

- **Next.js**: Framework de React para renderização do lado do servidor e geração de sites estáticos.
- **Keen Slider**: Biblioteca para criar sliders/carrosséis interativos.
- **React**: Biblioteca para criar interfaces de usuário.
- **Image Optimization**: Utiliza o componente `Image` do Next.js para otimizar imagens.

## Estrutura dos Arquivos

- **`pages/`**: Contém todos os arquivos .js utilizados na aplicação
  - `_app.js`
  - `corporativo.js`
  - `index.js`
  - `residencial.js`
  - `rural.js` 

- **`styles/`**: Contém os arquivos CSS específicos para as páginas e estilos globais.
  - `plans.module.css`
  - `rural.module.css`
  - `residencial.module.css`
  - `corporativo.module.css`
  - `globals.css`

- **`public/images/`**: Contém as imagens usadas nas páginas.
  - `logo.png`
  - `plans/` (imagens dos planos)
  - `corporativo/` (imagens específicas para a página corporativa)
  - `residencial/` (imagens especificas para a página residencial)
  - `rural/` (imagens especificas para a página rural)

## Clonar Repositorio 
bash
git clone https://github.com/matheusrst/cednet-residencial.git 
cd cednet-residencial 
Instale as dependências:


## Como Rodar o Projeto

1. **Instalação das Dependências**
   ```bash
   npm install
Rodar o Servidor de Desenvolvimento

bash
npm run dev
Acesse http://localhost:3000 para visualizar o projeto em execução.

Links Úteis
Grupo Cednet
Central de Atendimento 0800 1001 101
Políticas de Privacidade
Perfil do Desenvolvedor

Contribuições
Se você gostaria de contribuir para este projeto, por favor, faça um fork do repositório e envie um pull request com suas alterações.

Licença 
COPYRIGHT © 2024, TODOS OS DIREITOS RESERVADOS. | CNPJ: 01.752.674/0001-54

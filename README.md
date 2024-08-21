Este projeto é uma página web desenvolvida para o **Grupo Cednet**, focada na oferta de serviços de internet de alta velocidade. O projeto apresenta diversas paginas e seções, incluindo um cabeçalho de navegação, um banner de destaque, informações sobre os serviços oferecidos, parcerias, planos disponíveis e um rodapé com informações de contato e links importantes.

Oprojeto é construída utilizando **Next.js**, um popular framework React para desenvolvimento de aplicações web otimizadas e de alto desempenho. Ela também faz uso de **Keen Slider**, uma biblioteca de carrossel de slides, para exibir de forma interativa os planos de internet disponíveis.


**PÁGINAS DE PLANOS DO GRUPO CEDNET**
Este repositório contém o código-fonte das páginas web "index", "Corporativa", "Residencial" e "Rural do Grupo Cednet, desenvolvida para promover os serviços de internet de alta velocidade. As páginas foram construídas utilizando Next.js e diversas tecnologias modernas de front-end para garantir uma experiência de usuário rápida, responsiva e interativa.

Visão Geral
As paginas de planos do Grupo Cednet oferece uma visão detalhada dos planos de internet disponíveis para diversos tipos de usuarios, destacando características, parceiros e opções de planos, tudo de forma atraente e acessível. Através de um carrossel interativo e uma navegação intuitiva, os usuários podem explorar e obter informações sobre os serviços oferecidos.

Funcionalidades
Navegação Intuitiva: Menu de navegação acessível com destaques para a página atual.
Seção Hero: Banner de destaque que promove os principais benefícios do serviço de internet residencial.
Grid de Características: Exibição de características principais com imagens e descrições.
Seção Sobre: Explicação detalhada da missão e visão do Grupo Cednet.
Carrossel de Planos: Apresentação interativa dos planos de internet disponíveis, utilizando a biblioteca Keen Slider.
Otimização de Imagens: Uso do componente Image do Next.js para carregamento rápido e otimizado de imagens.
Design Responsivo: Layout adaptável a diferentes dispositivos (desktop, tablet, mobile).
Integração com WhatsApp: Links diretos para contato via WhatsApp para mais informações sobre os planos.
Tecnologias Utilizadas
Next.js - Framework React para SSR e SSG.
React - Biblioteca JavaScript para construção de interfaces de usuário.
Keen Slider - Biblioteca para criação de carrosséis interativos.
CSS Modules - Técnica de modularização de estilos CSS.
Next.js Image Component - Componente para otimização de imagens.
Estrutura do Projeto
pages/: Contém o arquivo principal de todas as paginas (corporativo.js, index.js, residencial.js, rural.js).
public/ images/: Armazena as imagens usadas na página, como logos e ícones.
styles/: Contém os arquivos CSS Modules e globais utilizados na estilização das páginas.
Como Executar o Projeto
Pré-requisitos
Node.js (>= 12.x)
NPM ou Yarn
Passos para rodar o projeto localmente
Clone o repositório:

bash
Copiar código
git clone https://github.com/matheusrst/cednet-residencial.git
cd cednet-residencial
Instale as dependências:

bash
Copiar código
npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run dev
# ou
yarn dev
Acesse a aplicação:

Abra seu navegador e vá para http://localhost:3000 para ver a página em ação.

Estrutura da pagina index
Cabeçalho (Header): Contém o logotipo do Grupo Cednet com um link externo para o site oficial.
Seção Principal (Main): Apresenta os planos de internet disponíveis:
Título e Descrição dos Planos: Introduz os planos oferecidos com uma breve descrição.
Grid de Planos: Exibe três itens de plano com imagens e links para as páginas de detalhes ("Rural", "Residencial", e "Corporativo").
Rodapé (Footer): Inclui links para a central de atendimento e política de privacidade, informações de copyright e CNPJ, e um link para o perfil do desenvolvedor.

Estrutura da pagina Corporativa
Cabeçalho (Header): Inclui o logotipo com um link para o site do Grupo Cednet e um menu de navegação com links para as páginas "Rural", "Residencial" e "Corporativo".
Seção Hero: Promove a conectividade corporativa, destacando benefícios como alta velocidade, segurança avançada e suporte técnico 24/7.
Grid de Funcionalidades: Exibe um conjunto de vantagens visuais, cada uma acompanhada de uma breve descrição.
Seção Sobre: Descreve a missão do Grupo Cednet em fornecer soluções de internet de alta performance e apresenta os valores e a visão da empresa.
Seção de Detalhes das Funcionalidades: Fornece uma explicação detalhada de cada funcionalidade, como alta velocidade, confiabilidade máxima, escalabilidade flexível e suporte técnico dedicado.
Seção de Planos: Apresenta diferentes planos de internet disponíveis para empresas em um carrossel interativo, permitindo aos usuários ver os detalhes de cada plano e obter mais informações.
Rodapé (Footer): Contém links para a central de atendimento, políticas de privacidade, e informações de copyright, além de um link para o desenvolvedor da página.

Estrutura da pagina residencial
Cabeçalho (Header): Inclui o logotipo do Grupo Cednet e o menu de navegação para as páginas "Rural", "Residencial" e "Corporativo".
Seção Hero: Destaca a conectividade rural com um título, descrição e uma lista de vantagens como alta velocidade e suporte técnico.
Grid de Depoimentos: Apresenta depoimentos de clientes com imagens e textos de feedback.
Seção de Missão: Explica a missão do Grupo Cednet em fornecer uma conexão confiável para áreas agrícolas, com descrições sobre os objetivos e benefícios do serviço.
Seção de Características: Detalha as características que fazem do Grupo Cednet a melhor escolha para conectividade rural, incluindo cobertura ampla e escalabilidade flexível.
Seção de Planos: Mostra os planos de internet em um carrossel interativo com imagens e links para mais informações.
Rodapé (Footer): Contém links úteis, como central de atendimento e política de privacidade, além de informações de copyright e contato com o desenvolvedor.

Estrutura da pagina Rural
Cabeçalho (Header): Contém o logotipo do Grupo Cednet com um link para o site oficial e um menu de navegação com links para as páginas "Rural", "Residencial" e "Corporativo".
Seção Hero: Promove a conectividade rural, destacando as vantagens como alta velocidade, segurança avançada, escalabilidade flexível, suporte técnico 24/7, e conectividade confiável.
Grid de Depoimentos: Exibe depoimentos de clientes, cada um com uma imagem e um texto de exemplo, dispostos em uma grade.
Seção de Missão: Descreve a missão do Grupo Cednet de fornecer conectividade de alta qualidade para áreas agrícolas, com foco em confiabilidade, inovação, e suporte.
Grid de Funcionalidades: Apresenta as principais características dos serviços oferecidos, como conexão em áreas remotas, cobertura ampla, escalabilidade flexível e suporte dedicado.
Seção de Planos: Mostra os diferentes planos de internet disponíveis para o público rural, organizados em um carrossel interativo, com links para obter mais informações via WhatsApp.
Rodapé (Footer): Inclui links para a central de atendimento, políticas de privacidade, informações de copyright, e um link para o perfil do desenvolvedor da página.
Scripts Externos: Importa o script do Keen Slider para a funcionalidade do carrossel e inclui links para os estilos globais e específicos do slider.

Deploy
Este projeto pode ser facilmente implantado em plataformas como Vercel, que suporta Next.js nativamente.
Conecte o repositório ao Vercel.
Configure as variáveis de ambiente se necessário.
Implante a aplicação.
Contribuição
Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto. Sugestões e melhorias são sempre bem-vindas!

Licença
COPYRIGHT © 2024, TODOS OS DIREITOS RESERVADOS. | CNPJ: 01.752.674/0001-54 grupo cednet 

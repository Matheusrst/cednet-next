import { useEffect, useRef } from 'react'; // Importa hooks do React para gerenciamento de efeitos colaterais e referências
import Image from 'next/image'; // Importa o componente Image do Next.js para otimização e renderização de imagens
import Link from 'next/link'; // Importa o componente Link do Next.js para navegação interna
import styles from '../styles/rural.module.css'; // Importa o CSS Module específico para a página rural
import Head from 'next/head'; // Importa o componente Head para manipulação de tags <head> do HTML
import Script from 'next/script'; // Importa o componente Script para carregar scripts externos
import { useRouter } from 'next/router'; // Importa o hook useRouter para gerenciamento de roteamento
import '../styles/globals.css'; // Importa os estilos globais da aplicação
import "keen-slider/keen-slider.min.css"; // Importa o CSS do Keen Slider para estilização

const Rural = () => {
  const router = useRouter(); // Obtém o objeto do roteador para acessar informações da URL atual
  const sliderRef = useRef(null); // Cria uma referência para o slider para manipulação direta do DOM

  useEffect(() => {
    if (!sliderRef.current) return; // Verifica se a referência do slider é válida

    const slider = new KeenSlider(sliderRef.current, { // Inicializa o Keen Slider com configurações específicas
      loop: true, // Permite rotação infinita dos slides
      mode: "free-snap", // Define o modo de deslizar livre
      slides: {
        perView: 4, // Número de slides visíveis por vez
        spacing: 30, // Espaçamento entre slides
      },
      breakpoints: {
        "(min-width: 768px)": { // Configurações para telas com largura mínima de 768px
          slides: {
            perView: 2, // Número de slides visíveis por vez
            spacing: 20, // Espaçamento entre slides
          },
        },
        "(min-width: 1024px)": { // Configurações para telas com largura mínima de 1024px
          slides: {
            perView: 4, // Número de slides visíveis por vez
            spacing: 30, // Espaçamento entre slides
          },
        },
      },
      navigation: {
        nextEl: ".keen-slider__slide-next", // Seleciona o botão de próximo slide
        prevEl: ".keen-slider__slide-prev", // Seleciona o botão de slide anterior
      },
      pagination: {
        el: ".keen-slider__slide-pagination", // Seleciona o elemento de paginação
        clickable: true, // Permite clicar na paginação para mudar de slide
      },
    });

    // Cleanup on component unmount: remove o slider quando o componente for desmontado
    return () => {
      if (slider) slider.destroy();
    };
  }, []); // Array de dependências vazio: o efeito será executado apenas uma vez

  return (
    <>
      <Head>
        <title>Rural | Grupo Cednet</title> {/* Define o título da página */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" /> {/* Link para o CSS do Keen Slider */}
      </Head>

      <header className={styles.header}> {/* Cabeçalho da página */}
        <div className={styles.container2}>
          <div className={styles.logo}>
            <a href="https://grupocednet.com.br/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/logo.png" alt="Logo Cednet" width={180} height={60} /> {/* Logo com link externo */}
            </a>
          </div>
          <div className={styles.nav}>
            <ul> {/* Menu de navegação */}
              <li>
                <Link href="/rural" className={router.pathname === '/rural' ? styles.active : ''}>Rural</Link> {/* Link para a página Rural */}
              </li>
              <li>
                <Link href="/residencial" className={router.pathname === '/residencial' ? styles.active : ''}>Residencial</Link> {/* Link para a página Residencial */}
              </li>
              <li>
                <Link href="/corporativo" className={router.pathname === '/corporativo' ? styles.active : ''}>Corporativo</Link> {/* Link para a página Corporativo */}
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className={styles.hero}> {/* Seção hero com informações principais */}
        <div className={styles.heroContainer}>
          <h1>Conectividade Rural Incomparável</h1> {/* Título da seção */}
          <p>A solução ideal para agrícolas que necessitam de uma conexão de velocidade, segurança e confiabilidade.</p> {/* Descrição */}
          <div className={styles.advantages}> {/* Lista de vantagens */}
            <span>Alta Velocidade</span>
            <span>Segurança Avançada</span>
            <span>Escalabilidade Flexível</span>
            <span>Suporte Técnico 24/7</span>
            <span>Conectividade Confiável</span>
          </div>
        </div>

        <div className={styles.spacing}></div> {/* Espaçamento entre elementos */}
        <div className={styles.container}>
          <div className={styles.testimonialGrid}> {/* Grid de depoimentos */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={styles.testimonialItem}>
                <Image src="/images/585e4bf3cb11b227491c339a.png" alt={`Feature ${i + 1}`} width={100} height={100} /> {/* Imagem do depoimento */}
                <p>Lorem Ipsum é um texto modelo da indústria tipográfica e de impressos.</p> {/* Texto do depoimento */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mission}> {/* Seção sobre a missão */}
        <div className={styles.missionContainer}>
          <h2>Levando os Campos para o Futuro</h2> {/* Título da seção */}
          <div className={styles.missionGrid}> {/* Grid de informações da missão */}
            <div className={styles.missionItem}>
              <p>No Grupo Cednet, entendemos que as colheitas estão cada vez mais avançadas, e para ter sucesso, é necessária uma conexão confiável que opere a qualquer momento.</p> {/* Descrição da missão */}
            </div>
            <div className={styles.missionItem}>
              <p>Nosso objetivo é simples: fornecer o melhor serviço de Internet para áreas agrícolas, permitindo que agricultores e empresas do setor agrícola permaneçam conectados, inovadores e produtivos.</p> {/* Descrição da missão */}
            </div>
            <div className={styles.missionItem}>
              <p>Com nosso serviço, os agricultores podem acessar dados críticos, realizar videoconferências, monitorar sistemas de irrigação e muito mais sem se preocupar com interrupções.</p> {/* Descrição da missão */}
            </div>
            <div className={styles.missionItem}>
              <p>Confie no Grupo Cednet para fornecer a solução de conectividade que ajudará a levar seus negócios para o futuro da era digital de maneira eficiente e produtiva. Com suporte especializado, tecnologia avançada e uma paixão pelo que fazemos.</p> {/* Descrição da missão */}
            </div>
          </div>
          <a href="#plans" className={styles.Button}>Ver Planos</a> {/* Link para a seção de planos */}
        </div>
      </section>

      <section className={styles.features}> {/* Seção de características */}
        <div className={styles.featuresContainer}>
          <h2>O que Faz de Nós a Melhor Escolha para Sua Produção</h2> {/* Título da seção */}
          <div className={styles.featuresGrid}> {/* Grid de características */}
            {[
              { src: '/images/vector.png', title: 'Conexão de ponta para áreas remotas', description: 'Garantia de expansão rápida e sem interrupções.' },
              { src: '/images/rural/distancia.png', title: 'Cobertura Ampla', description: 'Expansão contínua de cobertura.' },
              { src: '/images/escalabilidade.png', title: 'Escalabilidade Flexível', description: 'Planos personalizáveis para todos os tipos de produtores.' },
              { src: '/images/suporte.png', title: 'Suporte Dedicado', description: 'Equipe disponível 24/7 para qualquer necessidade.' }
            ].map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <Image src={feature.src} alt={feature.title} width={100} height={100} /> {/* Imagem da característica */}
                <h3>{feature.title}</h3> {/* Título da característica */}
                <p>{feature.description}</p> {/* Descrição da característica */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.plans} id="plans"> {/* Seção de planos */}
        <div className={styles.container}>
          <h2>Nossos Planos</h2> {/* Título da seção */}
          <h4>Escolha o que Melhor se Adapta às suas necessidades.</h4> {/* Subtítulo da seção */}
          <div ref={sliderRef} className="keen-slider"> {/* Slider de planos */}
            <div className="keen-slider__slide">
              <Image src="/images/rural/res-rural-1.webp" alt="combo 1 res" width={270} height={450} /> {/* Imagem do plano */}
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Combo%201?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a> {/* Link para mais informações sobre o plano */}
            </div>
            {/* Repetir para outros slides... */}
          </div>
        </div>
      </section>

      <footer className={styles.footer}> {/* Rodapé da página */}
        <div className={styles.container}>
          <div className={styles.footerLinks}> {/* Links do rodapé */}
            <a href="https://api.whatsapp.com/send?phone=558001001101" target="_blank" rel="noopener noreferrer">Central de Atendimento 0800 1001 101</a> {/* Link para central de atendimento */}
            <a href="https://grupocednet.com.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer">Políticas de Privacidade</a> {/* Link para políticas de privacidade */}
          </div>
          <p>COPYRIGHT © 2024, TODOS OS DIREITOS RESERVADOS. | CNPJ: 01.752.674/0001-54</p> {/* Informação de copyright */}
          <Link href="https://github.com/Matheusrst" target="_blank" rel="noopener noreferrer">Por: Matheus Ribeiro</Link> {/* Link para o perfil do desenvolvedor */}
        </div>
      </footer>

      <Script src="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.js" strategy="beforeInteractive" /> {/* Script para o Keen Slider */}
    </>
  );
};

export default Rural; // Exporta o componente Rural como o padrão

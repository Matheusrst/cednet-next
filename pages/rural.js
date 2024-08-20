import { useEffect, useRef } from 'react';
import Image from 'next/image'; // Importa o componente Image do Next.js para otimização de imagens
import Link from 'next/link'; // Importa o componente Link do Next.js para navegação entre páginas
import styles from '../styles/rural.module.css'; // Importa o CSS Module específico para a estilização da página
import Head from 'next/head'; // Importa o componente Head do Next.js para manipulação do <head> do documento
import Script from 'next/script'; // Importa o componente Script do Next.js para inclusão de scripts externos
import { useRouter } from 'next/router'; // Importa o hook useRouter para acessar informações de navegação
import "keen-slider/keen-slider.min.css"; // Importa o CSS do Keen Slider para estilização do carrossel
import '../styles/globals.css'; // Importa o CSS global para o projeto

const Rural = () => {
  const router = useRouter(); // Obtém o objeto do roteador para verificar a página atual
  const sliderRef = useRef(null); // Cria a referência para o slider do Keen Slider

  useEffect(() => {
    const KeenSlider = require('keen-slider').default; // Importa o Keen Slider corretamente
    if (!sliderRef.current) return; // Verifica se a referência do slider é válida

    const slider = new KeenSlider(sliderRef.current, { // Inicializa o Keen Slider com configurações específicas
      loop: true, // Permite o loop infinito dos slides
      mode: "free-snap", // Configura o modo de rotação livre
      slides: {
        perView: 4, // Número de slides exibidos por vez
        spacing: 30, // Espaçamento entre slides
      },
      breakpoints: { // Configurações responsivas para diferentes tamanhos de tela
        "(min-width: 768px)": {
          slides: {
            perView: 2, // Número de slides exibidos por vez em telas de pelo menos 768px
            spacing: 20, // Espaçamento entre slides em telas de pelo menos 768px
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 4, // Número de slides exibidos por vez em telas de pelo menos 1024px
            spacing: 30, // Espaçamento entre slides em telas de pelo menos 1024px
          },
        },
      },
      navigation: { // Configura os elementos de navegação do slider
        nextEl: ".keen-slider__slide-next",
        prevEl: ".keen-slider__slide-prev",
      },
      pagination: { // Configura a paginação do slider
        el: ".keen-slider__slide-pagination",
        clickable: true, // Permite a navegação através da paginação
      },
    });

    // Cleanup on component unmount
    return () => {
      if (slider) slider.destroy(); // Destrói o slider ao desmontar o componente
    };
  }, []);

  return (
    <>
      <Head>
        <title>Rural | Grupo Cednet</title> {/* Define o título da página */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" /> {/* Inclui o CSS do Keen Slider */}
      </Head>
      
      <header className={styles.header}>
        <div className={styles.container2}>
          <div className={styles.logo}>
            <a href="https://grupocednet.com.br/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/logo.png" alt="Logo Cednet" width={180} height={60} /> {/* Logo da empresa */}
            </a>
          </div>
          <div className={styles.nav}>
            <ul>
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

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1>Conectividade Rural Incomparável</h1> {/* Título da seção hero */}
          <p>A solução ideal para agrícolas que necessitam de uma conexão de velocidade, segurança e confiabilidade.</p> {/* Descrição da seção hero */}
          <div className={styles.advantages}>
            <span>Alta Velocidade</span> {/* Vantagem 1 */}
            <span>Segurança Avançada</span> {/* Vantagem 2 */}
            <span>Escalabilidade Flexível</span> {/* Vantagem 3 */}
            <span>Suporte Técnico 24/7</span> {/* Vantagem 4 */}
            <span>Conectividade Confiável</span> {/* Vantagem 5 */}
          </div>
        </div>

        <div className={styles.spacing}></div> {/* Espaçamento adicional */}
        <div className={styles.container}>
          <div className={styles.testimonialGrid}>
            {Array.from({ length: 4 }).map((_, i) => ( // Gera um grid de depoimentos
              <div key={i} className={styles.testimonialItem}>
                <Image src="/images/585e4bf3cb11b227491c339a.png" alt={`Feature ${i + 1}`} width={100} height={100} /> {/* Imagem do depoimento */}
                <p>Lorem Ipsum é um texto modelo da indústria tipográfica e de impressos.</p> {/* Texto do depoimento */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionContainer}>
          <h2>Levando os Campos para o Futuro</h2> {/* Título da seção de missão */}
          <div className={styles.missionGrid}>
                <div className={styles.missionItem}>
                    <p>No Grupo Cednet, entendemos que as colheitas estão cada vez mais avançadas, e para ter sucesso, é necessária uma conexão confiável que opere a qualquer momento.</p> {/* Descrição da missão 1 */}
                </div>
                <div className={styles.missionItem}>
                    <p>Nosso objetivo é simples: fornecer o melhor serviço de Internet para áreas agrícolas, permitindo que agricultores e empresas do setor agrícola permaneçam conectados, inovadores e produtivos.</p> {/* Descrição da missão 2 */}
                </div>
                <div className={styles.missionItem}>
                    <p>Com nosso serviço, os agricultores podem acessar dados críticos, realizar videoconferências, monitorar sistemas de irrigação e muito mais sem se preocupar com interrupções.</p> {/* Descrição da missão 3 */}
                </div>
                <div className={styles.missionItem}>
                    <p>Confie no Grupo Cednet para fornecer a solução de conectividade que ajudará a levar seus negócios para o futuro da era digital de maneira eficiente e produtiva. Com suporte especializado, tecnologia avançada e uma paixão pelo que fazemos.</p> {/* Descrição da missão 4 */}
                </div>
          </div>
          <a href="#plans" className={styles.Button}>Ver Planos</a> {/* Botão para visualizar os planos */}
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <h2>O que Faz de Nós a Melhor Escolha para Sua Produção</h2> {/* Título da seção de recursos */}
          <div className={styles.featuresGrid}>
            {[
              { src: '/images/vector.png', title: 'Conexão de ponta para áreas remotas', description: 'Garantia de expansão rápida e sem interrupções.' },
              { src: '/images/rural/distancia.png', title: 'Cobertura Ampla', description: 'Expansão contínua de cobertura.' },
              { src: '/images/escalabilidade.png', title: 'Escalabilidade Flexível', description: 'Planos personalizáveis para todos os tipos de produtores.' },
              { src: '/images/suporte.png', title: 'Suporte Dedicado', description: 'Equipe disponível 24/7 para qualquer necessidade.' }
            ].map((feature, index) => ( // Gera uma grid de características
              <div key={index} className={styles.featureItem}>
                <Image src={feature.src} alt={feature.title} width={100} height={100} /> {/* Imagem da característica */}
                <h3>{feature.title}</h3> {/* Título da característica */}
                <p>{feature.description}</p> {/* Descrição da característica */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.plans} id="plans">
        <div className={styles.container}>
          <h2>Nossos Planos</h2> {/* Título da seção de planos */}
          <h4>Escolha o que Melhor se Adapta às suas necessidades.</h4> {/* Descrição dos planos */}
          <div ref={sliderRef} className="keen-slider"> {/* Slider de planos */}
            <div className="keen-slider__slide">
              <Image src="/images/rural/res-rural-1.webp" alt="combo 1 res" width={270} height={450} /> {/* Imagem do plano 1 */}
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Combo%201?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/corp-rural1.webp" alt="combo 1 corp" width={270} height={450} /> {/* Imagem do plano 1 Corporativo */}
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Rural%20Corp%201?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/res-rural-2.webp" alt="combo 2 res" width={270} height={450} /> {/* Imagem do plano 2 */}
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Combo%202?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/corp-rural2.webp" alt="combo 2 corp" width={270} height={450} /> {/* Imagem do plano 2 Corporativo */}
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Rural%20Corp%202?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/res-rural-3.webp" alt="combo 3 res" width={270} height={450} /> {/* Imagem do plano 3 */}
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Combo%203?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/corp-rural3.webp" alt="combo 3 corp" width={270} height={450} /> {/* Imagem do plano 3 Corporativo */}
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Rural%20Corp%203?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/res-rural-4.webp" alt="combo 4 res" width={270} height={450} /> {/* Imagem do plano 4 */}
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Combo%204?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/corp-rural4.webp" alt="combo 4 corp" width={270} height={450} /> {/* Imagem do plano 4 Corporativo */}
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Rural%20Corp%204?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerLinks}>
            <a href="https://api.whatsapp.com/send?phone=558001001101" target="_blank" rel="noopener noreferrer">Central de Atendimento 0800 1001 101</a> {/* Link para atendimento via WhatsApp */}
            <a href="https://grupocednet.com.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer">Políticas de Privacidade</a> {/* Link para a política de privacidade */}
          </div>
          <p>COPYRIGHT © 2024, TODOS OS DIREITOS RESERVADOS. | CNPJ: 01.752.674/0001-54</p> {/* Informações de copyright */}
          <Link href="https://github.com/Matheusrst" target="_blank" rel="noopener noreferrer">Por: Matheus Ribeiro</Link> {/* Link para o perfil do desenvolvedor */}
        </div>
      </footer>


      <Script src="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.js" strategy="beforeInteractive"></Script> {/* Inclui o script do Keen Slider */}
    </>
  );
};

export default Rural;

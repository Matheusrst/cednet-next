import { useEffect, useRef } from 'react';
import Image from 'next/image'; // Importa o componente Image do Next.js
import Link from 'next/link'; // Importa o componente Link do Next.js
import styles from '../styles/rural.module.css'; // Importa o CSS Module para estilização
import Head from 'next/head';
import Script from 'next/script'; // Importa o componente Script do Next.js
import { useRouter } from 'next/router'; // Importa o hook useRouter
import '../styles/globals.css'; 
import "keen-slider/keen-slider.min.css";

const Rural = () => {
  const router = useRouter(); // Obtém o objeto do roteador
  const sliderRef = useRef(null); // Cria a referência para o slider

  useEffect(() => {
    if (!sliderRef.current) return; // Verifica se a referência é válida

    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 4,
        spacing: 30,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 20,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 4,
            spacing: 30,
          },
        },
      },
      navigation: {
        nextEl: ".keen-slider__slide-next",
        prevEl: ".keen-slider__slide-prev",
      },
      pagination: {
        el: ".keen-slider__slide-pagination",
        clickable: true,
      },
    });

    // Cleanup on component unmount
    return () => {
      if (slider) slider.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Rural | Grupo Cednet</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" />
      </Head>
      
      <header className={styles.header}>
        <div className={styles.container2}>
          <div className={styles.logo}>
            <a href="https://grupocednet.com.br/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/logo.png" alt="Logo Cednet" width={180} height={60} />
            </a>
          </div>
          <div className={styles.nav}>
            <ul>
              <li>
                <Link href="/rural" className={router.pathname === '/rural' ? styles.active : ''}>Rural</Link>
              </li>
              <li>
                <Link href="/residencial" className={router.pathname === '/residencial' ? styles.active : ''}>Residencial</Link>
              </li>
              <li>
                <Link href="/corporativo" className={router.pathname === '/corporativo' ? styles.active : ''}>Corporativo</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1>Conectividade Rural Incomparável</h1>
          <p>A solução ideal para agrícolas que necessitam de uma conexão de velocidade, segurança e confiabilidade.</p>
          <div className={styles.advantages}>
            <span>Alta Velocidade</span>
            <span>Segurança Avançada</span>
            <span>Escalabilidade Flexível</span>
            <span>Suporte Técnico 24/7</span>
            <span>Conectividade Confiável</span>
          </div>
        </div>

        <div className={styles.spacing}></div>
        <div className={styles.container}>
          <div className={styles.testimonialGrid}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={styles.testimonialItem}>
                <Image src="/images/585e4bf3cb11b227491c339a.png" alt={`Feature ${i + 1}`} width={100} height={100} />
                <p>Lorem Ipsum é um texto modelo da indústria tipográfica e de impressos.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionContainer}>
          <h2>Levando os Campos para o Futuro</h2>
          <div className={styles.missionGrid}>
                <div className={styles.missionItem}>
                    <p>No Grupo Cednet, entendemos que as colheitas estão cada vez mais avançadas, e para ter sucesso, é necessária uma conexão confiável que opere a qualquer momento.</p>
                </div>
                <div className={styles.missionItem}>
                    <p>Nosso objetivo é simples: fornecer o melhor serviço de Internet para áreas agrícolas, permitindo que agricultores e empresas do setor agrícola permaneçam conectados, inovadores e produtivos.</p>
                </div>
                <div className={styles.missionItem}>
                    <p>Com nosso serviço, os agricultores podem acessar dados críticos, realizar videoconferências, monitorar sistemas de irrigação e muito mais sem se preocupar com interrupções.</p>
                </div>
                <div className={styles.missionItem}>
                    <p>Confie no Grupo Cednet para fornecer a solução de conectividade que ajudará a levar seus negócios para o futuro da era digital de maneira eficiente e produtiva. Com suporte especializado, tecnologia avançada e uma paixão pelo que fazemos.</p>
                </div>
          </div>
          <a href="#plans" className={styles.Button}>Ver Planos</a>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <h2>O que Faz de Nós a Melhor Escolha para Sua Produção</h2>
          <div className={styles.featuresGrid}>
            {[
              { src: '/images/vector.png', title: 'Conexão de ponta para áreas remotas', description: 'Garantia de expansão rápida e sem interrupções.' },
              { src: '/images/rural/distancia.png', title: 'Cobertura Ampla', description: 'Expansão contínua de cobertura.' },
              { src: '/images/escalabilidade.png', title: 'Escalabilidade Flexível', description: 'Planos personalizáveis para todos os tipos de produtores.' },
              { src: '/images/suporte.png', title: 'Suporte Dedicado', description: 'Equipe disponível 24/7 para qualquer necessidade.' }
            ].map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <Image src={feature.src} alt={feature.title} width={100} height={100} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.plans} id="plans">
        <div className={styles.container}>
          <h2>Nossos Planos</h2>
          <h4>Escolha o que Melhor se Adapta às suas necessidades.</h4>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <Image src="/images/rural/res-rural-1.webp" alt="combo 1 res" width={270} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Para%20Todos?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/corp-rural1.webp" alt="combo 1 corp" width={270} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Ideal?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/res-rural-2.webp" alt="combo 2 res" width={270} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Familia?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/corp-rural2.webp" alt="combo 2 corp" width={270} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Gamer?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/res-rural-3.webp" alt="combo 3 res" width={270} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Plus?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/corp-rural3.webp" alt="combo 3 corp" width={270} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Ultra?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/res-rural-4.webp" alt="combo 4 res" width={270} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Plus?" 
                 target="_blank" rel="noopener noreferrer" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/rural/corp-rural4.webp" alt="combo 4 corp" width={270} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Ultra?" 
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
            <a href="https://api.whatsapp.com/send?phone=558001001101" target="_blank" rel="noopener noreferrer">Central de Atendimento 0800 1001 101</a>
            <a href="https://grupocednet.com.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer">Políticas de Privacidade</a>
          </div>
          <p>COPYRIGHT © 2024, TODOS OS DIREITOS RESERVADOS. | CNPJ: 01.752.674/0001-54</p>
          <Link href="https://github.com/Matheusrst" target="_blank" rel="noopener noreferrer">Por: Matheus Ribeiro</Link>
        </div>
      </footer>

      <Script src="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.js" strategy="beforeInteractive" />
    </>
  );
};

export default Rural;

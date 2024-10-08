import Image from 'next/image'; // Importa o componente Image do Next.js para otimizar o carregamento de imagens
import Link from 'next/link'; // Importa o componente Link do Next.js para navegação
import Head from 'next/head'; // Importa o componente Head do Next.js para manipulação do head do HTML
import { useEffect, useRef } from 'react'; // Importa hooks do React
import { useRouter } from 'next/router'; // Importa o hook useRouter do Next.js para navegação programática
import styles from '../styles/residencial.module.css'; // Importa o CSS Module específico para a página
import '../styles/globals.css'; // Importa o CSS global
import "keen-slider/keen-slider.min.css"; // Importa o CSS do Keen Slider

export default function Residencial() {
  const router = useRouter(); // Hook para acessar informações de roteamento
  const sliderRef = useRef(null); // Ref para acessar o DOM do slider

  useEffect(() => {
    const KeenSlider = require('keen-slider').default; // Importa o Keen Slider dinamicamente
    
    // Inicializa o Keen Slider se o sliderRef estiver definido
    if (sliderRef.current) {
      new KeenSlider(sliderRef.current, {
        loop: true, // Permite a repetição do slider
        mode: "free-snap", // Modo de deslizamento livre
        slides: {
          perView: 4, // Número de slides visíveis por vez
          spacing: 50, // Espaçamento entre os slides
        },
        breakpoints: {
          "(min-width: 768px)": {
            slides: {
              perView: 2, // Ajusta o número de slides visíveis em telas maiores
              spacing: 20, // Ajusta o espaçamento entre os slides em telas maiores
            },
          },
          "(min-width: 1024px)": {
            slides: {
              perView: 4, // Ajusta o número de slides visíveis em telas ainda maiores
              spacing: 25, // Ajusta o espaçamento entre os slides em telas ainda maiores
            },
          },
        },
        navigation: {
          nextEl: ".keen-slider__slide-next", // Seleciona o botão de próximo slide
          prevEl: ".keen-slider__slide-prev", // Seleciona o botão de slide anterior
        },
        pagination: {
          el: ".keen-slider__slide-pagination", // Seleciona o elemento de paginação
          clickable: true, // Permite clicar na paginação para navegar entre os slides
        },
      });
    }
  }, []); // Executa o efeito apenas uma vez, após a montagem do componente

  return (
    <>
      <Head>
        <title>Residencial | Grupo Cednet</title>
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

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>INTERNET DE ALTA VELOCIDADE PARA SUA CASA</h1>
          <p>Conectividade estável, segura e rápida para todas as suas atividades online.</p>

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
          <div className={styles.featuresGrid}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={styles.featureItem}>
                <Image src="/images/585e4bf3cb11b227491c339a.png" alt={`Feature ${i + 1}`} width={100} height={100} />
                <p>Lorem Ipsum é um texto modelo da indústria tipográfica e de impressos.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2>CONECTANDO SEU LAR AO FUTURO</h2>
          <p>
            No Grupo Cednet, entendemos que uma conexão de internet rápida e confiável é fundamental para o estilo de vida moderno. 
            Nossa missão é transformar a maneira como você se conecta, proporcionando uma experiência de internet inigualável em sua casa.
            Com velocidades ultrarrápidas, suporte técnico disponível 24/7 e segurança de ponta, garantimos que você tenha a melhor 
            conexão para todas as suas atividades online. Seja para trabalhar remotamente, estudar, jogar ou desfrutar de streaming em 
            alta definição, temos o plano perfeito que se adapta às suas necessidades.
          </p>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <div className={styles.container}>
          <h3>NÃO LEVAMOS SUA DIVERSÃO APENAS PARA O INSTAGRAM E FACEBOOK</h3>

          <div className={styles.partnerLogos}>
            <div className={styles.partnerItem}>
              <Image src="/images/residencial/Dizzer.png" alt="Deezer" width={100} height={100} />
              <p>Deezer</p>
            </div>
            <div className={styles.partnerItem}>
              <Image src="/images/residencial/Looke.png" alt="Looke" width={100} height={100} />
              <p>Looke</p>
            </div>
            <div className={styles.partnerItem}>
              <Image src="/images/residencial/curtaon.png" alt="Curtaon" width={100} height={100} />
              <p>Curtaon</p>
            </div>
            <div className={styles.partnerItem}>
              <Image src="/images/residencial/fuze.png" alt="Fuze Forge" width={100} height={100} />
              <p>Fuze Forge</p>
            </div>
            <div className={styles.partnerItem}>
              <Image src="/images/residencial/playkids.png" alt="PlayKids" width={100} height={100} />
              <p>PlayKids</p>
            </div>
            <div className={styles.partnerItem}>
              <Image src="/images/residencial/ciencia.png" alt="Clube de Ciências" width={100} height={100} />
              <p>Clube de Ciências</p>
            </div>
            <div className={styles.partnerItem}>
              <Image src="/images/residencial/galinha.png" alt="Galinha Pintadinha" width={100} height={100} />
              <p>Galinha Pintadinha</p>
            </div>
            <div className={styles.partnerItem}>
              <Image src="/images/residencial/zen.png" alt="Zen" width={100} height={100} />
              <p>Zen</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.plansSection} id="plans">
        <div className={styles.container}>
          <h2>Escolha o Plano Perfeito para Sua Casa</h2>
          <h4>Nossos planos foram desenvolvidos para atender a diferentes necessidades residenciais.</h4>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <Image src="/images/residencial/Para-Todos.webp" alt="Plano Para-Todos" width={250} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Para%20Todos?" 
                 target="_blank" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/residencial/Ideal.webp" alt="Plano Ideal" width={250} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Ideal?" 
                 target="_blank" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/residencial/Familia.webp" alt="Plano Familia" width={250} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Familia?" 
                 target="_blank" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/residencial/Gamer.webp" alt="Plano Gamer" width={250} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Gamer?" 
                 target="_blank" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/residencial/Plus.webp" alt="Plano Plus" width={270} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Plus?" 
                 target="_blank" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
            <div className="keen-slider__slide">
              <Image src="/images/residencial/ultra-900megas.webp" alt="Plano Ultra-900megas" width={270} height={450} />
              <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Ultra?" 
                 target="_blank" className={styles.planButton}>
                Mais Informações
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerLinks}>
            <a href="https://api.whatsapp.com/send?phone=558001001101" target="_blank">Central de Atendimento 0800 1001 101</a>
            <a href="https://grupocednet.com.br/politica-de-privacidade" target="_blank">Políticas de Privacidade</a>
          </div>
          <p>COPYRIGHT © 2024, TODOS OS DIREITOS RESERVADOS. | CNPJ: 01.752.674/0001-54</p>
          <Link href="mailto:matheusriberomatheus@gmail.com" target="_blank">Por: Matheus Ribeiro</Link>
          {/*<Link href="https://github.com/Matheusrst" target="_blank" rel="noopener noreferrer"></Link> */}
        </div>
      </footer>
    </>
  );
}

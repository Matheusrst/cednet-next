import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from '../styles/corporativo.module.css';
import { useRouter } from 'next/router';
import '../styles/globals.css'; 

const Header = () => {
    const router = useRouter();

    return (
      <header className={styles.header}>
      <div className={styles.container2}>
          <div className={styles.logo}>
              <a href="https://grupocednet.com.br/" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/logo.png" alt="Logo Cednet" width={200} height={60} />
              </a>
          </div>
          <div className={styles.nav}>
              <ul>
                  <li>
                      <Link href="/rural" className={router.pathname === '/rural' ? 'active' : ''}>Rural</Link>
                  </li>
                  <li>
                      <Link href="/residencial" className={router.pathname === '/residencial' ? 'active' : ''}>Residencial</Link>
                  </li>
                  <li>
                      <Link href="/corporativo" className={router.pathname === '/corporativo' ? 'active' : ''}>Corporativo</Link>
                  </li>
              </ul>
          </div>
      </div>
  </header>
    );
};

const Corporativo = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 4,
            spacing: 30,
        },
    });

    return (
        <div className={styles.body}>
            <Header />
            {/* Seção de destaque */}
            <div className={styles.herosection}>
                <div className={styles.container}>
                    <h1>Conectividade Corporativa Incomparável</h1>
                    <p>A solução ideal para empresas que necessitam de velocidade, segurança e confiabilidade.</p>
                    <div className={styles.advantages}>
                        <span>Alta Velocidade</span>
                        <span>Segurança Avançada</span>
                        <span>Escalabilidade Flexível</span>
                        <span>Suporte Técnico 24/7</span>
                        <span>Conectividade Confiável</span>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                            <Image src="/images/585e4bf3cb11b227491c339a.png" alt="Feature 1" width={100} height={100} />
                            <p>Lorem ipsum é um texto modelo da indústria tipográfica e de impressão.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Image src="/images/585e4bf3cb11b227491c339a.png" alt="Feature 1" width={100} height={100} />
                            <p>Lorem ipsum é um texto modelo da indústria tipográfica e de impressão.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Image src="/images/585e4bf3cb11b227491c339a.png" alt="Feature 1" width={100} height={100} />
                            <p>Lorem ipsum é um texto modelo da indústria tipográfica e de impressão.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Image src="/images/585e4bf3cb11b227491c339a.png" alt="Feature 1" width={100} height={100} />
                            <p>Lorem ipsum é um texto modelo da indústria tipográfica e de impressão.</p>
                        </div>
                    </div>
                </div>
            </div>

             {/* Seção Sobre */}
      <div className={styles.aboutSection}>
        <div className={styles.container}>
          <h2>Conectando Empresas ao Futuro</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>No Grupo Cednet, entendemos que a conectividade é a espinha dorsal de qualquer negócio moderno. Nossa missão é fornecer soluções de internet de alta performance que capacitem as empresas a alcançar seus objetivos com eficiência e segurança. Com uma visão voltada para o futuro, buscamos constantemente inovar e adaptar nossas ofertas para atender às necessidades dinâmicas do mercado corporativo.</p>
              <p>Nossa missão é oferecer serviços de internet corporativa de qualidade superior, garantindo que nossos clientes tenham a conectividade e o suporte necessário para operar de forma eficaz e segura.</p>
              <a href="#plans" className={styles.ctaButton}>Ver Planos</a>
            </div>
            <div className={styles.aboutValues}>
              <h3>Acreditamos que uma conexão de internet confiável e rápida é essencial para o sucesso empresarial, permitindo que as empresas se concentrem no que fazem de melhor, enquanto cuidamos de sua infraestrutura digital.</h3>
              <h3>Ser reconhecidos como líderes em soluções de internet para empresas, promovendo a inovação e o crescimento sustentável dos nossos clientes.</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Detalhes das Funcionalidades */}
      <div className={styles.featuresDetails}>
        <div className={styles.container}>
          <h2>O Que Faz de Nós a Melhor Escolha para Sua Empresa</h2>
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <Image src="/images/vector.png" alt="Conexão" width={100} height={100} />
              <h3>Alta Velocidade</h3>
              <h4>Garantia de conexão rápida e sem interrupções.</h4>
              <p>Nossas conexões de alta velocidade são projetadas para suportar grandes volumes de dados, garantindo que suas videoconferências, uploads e downloads sejam rápidos e eficientes, independentemente do tamanho da sua equipe ou da complexidade das suas operações online.</p>
            </div>
            <div className={styles.detailItem}>
              <Image src="/images/segurança.png" alt="Confiabilidade" width={100} height={100} />
              <h3>Confiabilidade Máxima</h3>
              <h4>Tempo de atividade garantido para manter sua empresa online.</h4>
              <p>Com um SLA (Acordo de Nível de Serviço) que assegura quase 100% de uptime, você pode confiar que sua conexão não falhará nos momentos mais críticos. Nossa infraestrutura robusta minimiza quedas e interrupções, mantendo sua empresa sempre conectada.</p>
            </div>
            <div className={styles.detailItem}>
              <Image src="/images/escalabilidade.png" alt="Escalabilidade" width={100} height={100} />
              <h3>Escalabilidade Flexível</h3>
              <h4>Planos que se adaptam ao crescimento do seu negócio.</h4>
              <p>Nossos serviços são projetados para crescer com você. À medida que sua empresa expande, nossos planos podem ser facilmente ajustados para fornecer mais largura de banda e suporte adicional, garantindo que suas operações nunca sejam limitadas pela conectividade.</p>
            </div>
            <div className={styles.detailItem}>
              <Image src="/images/suporte.png" alt="Suporte" width={100} height={100} />
              <h3>Suporte Dedicado</h3>
              <h4>Equipe técnica disponível 24/7 para qualquer necessidade.</h4>
              <p>Nossa equipe de suporte técnico está disponível a qualquer hora, todos os dias, para resolver rapidamente qualquer problema que possa surgir. Receba assistência personalizada de especialistas que entendem as necessidades específicas do seu negócio.</p>
            </div>
          </div>
        </div>
      </div>

            {/* Seção de Planos */}
            <section className={styles.plansSection} id="plans">
                <div className={styles.container}>
                    <h2>Escolha o Plano Perfeito para Sua Casa</h2>
                    <h4>Nossos planos foram desenvolvidos para atender a diferentes necessidades residenciais.</h4>
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide">
                            <Image src="/images/corporativo/essencial.webp" alt="Plano Essencial" width={270} height={450} />
                            <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Essencial?" 
                               target="_blank" className={styles.planButton}>
                                Mais Informações
                            </a>
                        </div>
                        <div className="keen-slider__slide">
                            <Image src="/images/corporativo/elite.webp" alt="Plano Elite" width={270} height={450} />
                            <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Elite?" 
                               target="_blank" className={styles.planButton}>
                                Mais Informações
                            </a>
                        </div>
                        <div className="keen-slider__slide">
                            <Image src="/images/corporativo/enterprise.webp" alt="Plano Enterprise" width={270} height={450} />
                            <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20Enterprise?" 
                               target="_blank" className={styles.planButton}>
                                Mais Informações
                            </a>
                        </div>
                        <div className="keen-slider__slide">
                            <Image src="/images/corporativo/vip-900megas.webp" alt="Plano VIP 900 Megas" width={270} height={450} />
                            <a href="https://api.whatsapp.com/send?phone=558001001101&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20plano%20VIP%20900%20Megas?" 
                               target="_blank" className={styles.planButton}>
                                Mais Informações
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container">
            <div className={styles.footer}>
            <div class="footer-links">
                <a href="https://api.whatsapp.com/send?phone=558001001101" target="_blank">Central de Atendimento 0800 1001 101 |</a>
                <a href="https://grupocednet.com.br/politica-de-privacidade" target="_blank">| Políticas de Privacidade</a>
            </div>
            
            <p>COPYRIGHT © 2024, TODOS OS DIREITOS RESERVADOS. | CNPJ: 01.752.674/0001-54</p>
            
            <a href="https://github.com/Matheusrst" target="_blank">Por: Matheus Ribeiro</a>
            </div>
        </div>
    </div>
    );
};

export default Corporativo;

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/plans.module.css';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
    <div className={styles.body}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Grupo Cednet - Conectividade Corporativa</title>
        <link rel="stylesheet" href="/css/home-style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <header className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="https://grupocednet.com.br/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/logo.png" alt="Logo Cednet" width={140} height={50} />
            </a>
          </div>
        </div>
      </header>

      <main className={styles.plansSection}>
        <div className={`${styles.container} ${styles.plansContent}`}>
          <h2>Escolha o Plano Perfeito para Sua Empresa</h2>
          <h4>Nossos planos foram desenvolvidos para atender a diferentes tamanhos e necessidades de cada pessoa.</h4>

          <div className={styles.spacing}></div>
          <div className={styles.plansGrid}>
            <div className={styles.planItem}>
              <Link href="/rural">
                <Image src="/images/plans/internet-rural.png" alt="internet rural" width={300} height={200} />
              </Link>
              <div className={styles.planInfo}>
                <Link href="/rural" className={styles.planButton}>
                  Saiba mais
                </Link>
              </div>
            </div>

            <div className={styles.planItem}>
              <Link href="/residencial">
                <Image src="/images/plans/internet-urbana.png" alt="internet residencial" width={300} height={200} />
              </Link>
              <div className={styles.planInfo}>
                <Link href="/residencial" className={styles.planButton}>
                  Saiba mais
                </Link>
              </div>
            </div>

            <div className={styles.planItem}>
              <Link href="/corporativo">
                <Image src="/images/plans/internet-corporativa.png" alt="internet corporativa" width={300} height={200} />
              </Link>
              <div className={styles.planInfo}>
                <Link href="/corporativo" className={styles.planButton}>
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerLinks}>
            <a href="https://api.whatsapp.com/send?phone=558001001101" target="_blank" rel="noopener noreferrer">
              Central de Atendimento 0800 1001 101
            </a>
            <a href="https://grupocednet.com.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
              Políticas de Privacidade
            </a>
          </div>
          <p>COPYRIGHT © 2024, TODOS OS DIREITOS RESERVADOS. | CNPJ: 01.752.674/0001-54</p>
          <Link href="https://github.com/Matheusrst" target="_blank" rel="noopener noreferrer">
            Por: Matheus Ribeiro
          </Link>
        </div>
      </footer>
      </div>
    </>
  );
}

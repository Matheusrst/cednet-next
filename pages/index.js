import Head from 'next/head'; // Importa o componente Head para manipular o conteúdo do <head> do documento HTML
import Image from 'next/image'; // Importa o componente Image para otimizar e renderizar imagens
import Link from 'next/link'; // Importa o componente Link para navegação interna
import styles from '../styles/plans.module.css'; // Importa os estilos específicos para a página de planos
import '../styles/globals.css'; // Importa os estilos globais da aplicação

export default function Home() {
  return (
    <>
      <div className={styles.body}> {/* Container principal da página com estilos aplicados */}
        <Head>
          {/* Define a codificação de caracteres como UTF-8 */}
          <meta charSet="UTF-8" />
          {/* Configura a viewport para garantir responsividade em dispositivos móveis */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Título da página exibido na aba do navegador */}
          <title>Grupo Cednet - Conectividade Corporativa</title>
          {/* Link para o arquivo CSS específico da página */}
          <link rel="stylesheet" href="/css/home-style.css" />
          {/* Importa fontes do Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>

        <header className={styles.navbar}> {/* Cabeçalho da página com a barra de navegação */}
          <div className={styles.container}>
            {/* Logo da empresa com link externo */}
            <div className={styles.logo}>
              <a href="https://grupocednet.com.br/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/logo.png" alt="Logo Cednet" width={140} height={50} />
              </a>
            </div>
          </div>
        </header>

        <main className={styles.plansSection}> {/* Seção principal da página com os planos */}
          <div className={`${styles.container} ${styles.plansContent}`}>
            {/* Título e descrição dos planos */}
            <h2>Conectando você Do Campo Até sua Empresa</h2>
            <h4>Nossos planos foram desenvolvidos para atender a diferentes tamanhos e necessidades de cada pessoa.</h4>

            <div className={styles.spacing}></div> {/* Espaçamento entre os elementos */}
            <div className={styles.plansGrid}> {/* Grid para exibir os itens dos planos */}
              {/* Primeiro item de plano */}
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

              {/* Segundo item de plano */}
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

              {/* Terceiro item de plano */}
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

        <footer className={styles.footer}> {/* Rodapé da página */}
          <div className={styles.container}>
            {/* Links do rodapé, incluindo central de atendimento e políticas de privacidade */}
            <div className={styles.footerLinks}>
              <a href="https://api.whatsapp.com/send?phone=558001001101" target="_blank" rel="noopener noreferrer">
                Central de Atendimento 0800 1001 101
              </a>
              <a href="https://grupocednet.com.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
                Políticas de Privacidade
              </a>
            </div>
            {/* Informações de copyright e CNPJ */}
            <p>COPYRIGHT © 2024, TODOS OS DIREITOS RESERVADOS. | CNPJ: 01.752.674/0001-54</p>
            {/* Link para o perfil do desenvolvedor */}
            <Link href="https://github.com/Matheusrst" target="_blank" rel="noopener noreferrer">
              Por: Matheus Ribeiro
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}

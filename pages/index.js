import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div className={styles.logochefe}>
          <Image src="/chef.png" alt="Chef Logo" width={120} height={120} />
          </div>
          <div></div>
          <div></div>
          <div className={styles.figurabarra1}>
            <Image src="/telemarketing.png" alt="Suporte" width={50} height={50} />
          </div>
          <div className={styles.quemsomos}>
            Quem Somos
          </div>
          <div className={styles.sejachefe}>
            Seja chefe
          </div>
          <div className={styles.figurabarra2}>
            <Image src="/perfil.png" alt="Perfil Logo" width={45} height={45} />
          </div> 
        </h1>
        
        <div className={styles.container2}>
          <div className={styles.description}>
          Ache o chef que mais combina com você!
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.filtroendereço}>
            <div className={styles.filtrotexto}>
            Endereço
            <p>Rua Quata 200</p>
            </div>
          </div>
          <div className={styles.filtroculinaria}>
            < div className={styles.filtrotexto}>
            Culinária
            <p>Italiana</p>
            </div>
          </div>
          <div className={styles.filtrodata}>
            <div className={styles.filtrotexto}>
            Data
            <p>4/02/22</p>
            </div>
          </div>
          <div className={styles.filtroqnt}>
            <div className={styles.filtrotexto}>
            Quantidade
            <p>70</p>
            </div>
          </div>
          <div className={styles.filtrobotao}>
            <Image src="/Lupinha.png" alt="Lupinha" width={50} height={50} />
          </div>
        </div>
        <div class={styles.wrapper}>
          <div class={styles.box1}>
            <Image src="/Foto 1.png" alt="Foto 1" width={1010} height={430} /> 
          </div>
          <div class={styles.box2}>
              <Image src="/Foto 3.png" alt="Foto 3" width={1006} height={322} />
          </div>
          <div class={styles.box3}>
            <Image src="/Foto 2.png" alt="Foto 2" width={500} height={754} />
          </div>
        </div>
      </main>
    </div>
  )
}

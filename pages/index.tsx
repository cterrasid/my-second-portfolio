import Head from "next/head";
import Layout from "../components/Layout";
import Tag from "../components/Tag";

export default function Home() {
  const handleClick = () => {
    console.log("cambiar");
  };
  // creo un hook que cambie el texto "Frontend"
  return (
    <Layout>
      <Head>
        <title>Clarette Terrasi Díaz | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <Tag name="h2">
            <h2>¡Hola!, soy Clarette Terrasi Díaz,</h2>
          </Tag>
          <Tag name="h1">
            <h1>Frontend Developer</h1>
          </Tag>
          <Tag name="h3">
            <h3 onClick={handleClick}>y si no te gusta...</h3>
          </Tag>
        </section>
        <img src="/clarette-mobile.png" alt="Imagen de Clarette" />
      </main>

      <style jsx>{`
        main {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          height: 100vh;
          width: 100%;
          background-color: #f1ebe3;
          z-index: 0;
        }

        section {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          align-self: flex-end;
          width: 50%;
          padding: 30px 40px 0 0;
        }

        h1 {
          margin: 0;
          font-size: 30px;
        }

        h2 {
          margin: 0;
          font-size: 12px;
          font-weight: normal;
          width: 50%;
        }

        h3 {
          margin: 0;
          font-family: Damion, cursive;
          color: #bdbbbb;
          font-size: 14px;
          font-weight: normal;
          align-self: flex-end;
          cursor: pointer;
          animation-name: vibrate;
          animation-duration: 100ms;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        img {
          width: 75%;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        @keyframes vibrate {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(3deg);
            color: #aaa8a8;
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </Layout>
  );
}

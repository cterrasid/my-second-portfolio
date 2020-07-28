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
            <h2>
              ¡Hola!, soy <br />Clarette Terrasi Díaz,
            </h2>
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
          width: 70%;
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
        }

        h3 {
          margin: 0;
          font-family: Damion, cursive;
          color: #bdbbbb;
          font-size: 14px;
          font-weight: normal;
          align-self: flex-end;
          cursor: pointer;
          animation: vibrate 100ms infinite linear;
        }

        h3::before {
          animation: luminance 500ms infinite linear;
          width: 100%;
          content: "y si no te gusta...";
          color: transparent;
          text-shadow: 0 0 5px rgba(224, 224, 224, 0.1);
          position: absolute;
          left: 0;
          top: 0;
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
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes luminance {
          from {
            color: #d1cfcf;
          }
          to {
            color: #bdbbbb;
          }
        }
      `}</style>
    </Layout>
  );
}

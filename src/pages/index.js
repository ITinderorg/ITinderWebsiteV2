import Head from "next/head";
import Image from "next/image";
import Footer from "../components/global/footer/Footer";
import Header from "../components/global/navbar/Header";
import IndexPage from "../components/page/index/IndexPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>ITinder</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Перший Український бот для пошуку роботи в IT!
          Ти рекрутер і в пошуку IT - шників? Заповнюй вакансію, отримай матч від кандидата, чекай на CV!"
        />
        <link rel="canonical" href="/" />
        <link rel="alternate" href="/" hrefLang="ua" />
      </Head>

      <Header />
      <IndexPage />
      <Footer />
    </>
  );
}

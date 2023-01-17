import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "../components/global/footer/Footer";
import Header from "../components/global/navbar/Header";
import IndexPage from "../components/page/index/IndexPage";

export default function Home() {
  const [data, setData] = useState({
    stats: {
      candidates: -1,
      matches: 0,
      recruiters: 0,
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://itinder.azurewebsites.net/itinder/getstat")
      .then((res) => res.json())
      .then((data) => {
        setData({
          stats: {
            candidates: data.candidatesCount,
            matches: data.matchesCount,
            recruiters: data.recruitersCount,
          },
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setData({
          stats: {
            candidates: 4860,
            matches: 815,
            recruiters: 950,
          },
        });
        setIsLoading(false);
      });
  }, []);

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

      <IndexPage data={data} />
    </>
  );
}

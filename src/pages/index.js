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
          content="The first bot for finding a job in IT! Are you a recruiter and looking for IT specialists? Create a vacancy - Get a match - Hire!"
        />
        <link rel="canonical" href="/" />
        <link rel="alternate" href="/" hrefLang="en-US" />
        <meta name="theme-color" content="#6275F6" />
        <link rel="apple-touch-icon" href="favicon.ico"></link>

        <meta property="og:title" content="ITinder" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="The first bot for finding a job in IT! Are you a recruiter and looking for IT specialists? Create a vacancy - Get a match - Hire!"
        />
        <meta property="og:image" content="https://itinder.tech/favicon.ico" />
        <meta property="og:url" content="https://itinder.tech/" />
      </Head>

      <IndexPage data={data} />
    </>
  );
}

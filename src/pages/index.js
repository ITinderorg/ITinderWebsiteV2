import Head from "next/head";
import { useEffect, useState, Suspense } from "react";
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
    fetch("https://itinder-app.azurewebsites.net/api/RetrieveStatistics", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData({
          stats: {
            candidates: data.countCandidates,
            matches: data.countMatches,
            recruiters: data.countRecruiters,
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
        <title>ITinder - quick job search in IT</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="The first bot for finding a job in IT! Are you a recruiter and looking for IT specialists? Create a vacancy - Get a match - Hire!"
        />
        <link rel="canonical" href="https://itinder.tech/" />
        <link rel="alternate" href="https://itinder.tech/" hrefLang="en" />
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
      <Suspense fallback={<></>}>
        <IndexPage data={data} />
      </Suspense>
    </>
  );
}

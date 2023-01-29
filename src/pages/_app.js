import "../assets/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../utils/i18n";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

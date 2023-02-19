import "@/node_modules/bootstrap/dist/css/bootstrap.css";
import "@/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";
import Menu from "@/src/components/utils/menu/menu";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      ></Script>
      {router.pathname != "/" && <Menu />}
      <Component {...pageProps} />
    </>
  );
}

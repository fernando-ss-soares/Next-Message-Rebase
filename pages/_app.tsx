import "@/node_modules/bootstrap/dist/css/bootstrap.css";
import "@/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";
import Menu from "@/src/components/utils/menu/menu";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const cookies = parseCookies();
  return (
    <>
      {router.pathname != "/" && <Menu cookies={cookies}/>}
      <Component {...pageProps} />
    </>
  );
}

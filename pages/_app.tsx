import "@/node_modules/bootstrap/dist/css/bootstrap.css";
import "@/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

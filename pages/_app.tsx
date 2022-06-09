import '../styles/globals.css'
import "../styles/slider.css";
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          duration: 5000,
          position: 'top-center',
        }}
      />
    </>
  )
}

export default MyApp

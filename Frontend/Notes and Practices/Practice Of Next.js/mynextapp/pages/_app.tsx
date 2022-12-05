import "../styles/FlyWithZoki.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      {/* Pages  */}
      <Component {...pageProps} />

      {/* scripts  */}
      <Script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js" />
    </ThemeProvider>
  );
}

export default MyApp;

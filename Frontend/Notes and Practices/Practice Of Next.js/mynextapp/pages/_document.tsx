import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* manifests  */}
        <link rel="manifest" href="manifest.json" />

        {/* Flowbite  */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css"
        />

        {/* Font Awesome  */}
        <link
          href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from 'next/document'
import { Suspense} from "react";
import Loader from "../components/Loader";
 
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Suspense fallback={<Loader />}>
        <Main />
        <NextScript />
        </Suspense>
      </body>
    </Html>
  )
}

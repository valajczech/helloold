import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { Suspense } from "react";

const MyApp = ({ Component, pageProps }: any) => (
  <Suspense fallback="Loading...">
    <Component {...pageProps} />
  </Suspense>
);

export default appWithTranslation(MyApp);

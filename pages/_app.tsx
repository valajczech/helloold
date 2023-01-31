import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }: any) => (
  <Suspense fallback="Loading...">
    <ThemeProvider defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  </Suspense>
);

export default appWithTranslation(MyApp);

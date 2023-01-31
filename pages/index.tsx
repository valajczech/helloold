import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

import styles from "./index.module.scss";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Greeter from "../components/Greeter/Greeter";
import ApiRoute from "./api";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.index}>
      <div className={styles.greeterWrapper}>
        <Greeter />
      </div>
      <div className="api">
        <ApiRoute />
      </div>
    </div>
  );
};
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;

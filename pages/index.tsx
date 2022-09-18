import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return <div>{t("test")}</div>;
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

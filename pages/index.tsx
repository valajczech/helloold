import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Greeter from "../components/Greeter/Greeter";
import ThemeToggler from "../components/ThemeToggler/ThemeToggler";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Greeter />
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

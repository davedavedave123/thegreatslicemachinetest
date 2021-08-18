import "../styles/globals.css";
import { Client } from "../prismic-configuration";

function MyApp({ Component, pageProps, props }) {
  console.log("props", props);
  return <Component {...pageProps} menu={props.menu} />;
}

MyApp.getInitialProps = async (ctx) => {
  const client = Client();
  const menu = (await client.getSingle("menu")) || {};
  return {
    props: {
      menu: menu,
    },
  };
};

export default MyApp;

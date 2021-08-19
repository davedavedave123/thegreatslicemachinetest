import "../styles/globals.css";
import { Client } from "../prismic-configuration";

function MyApp({ Component, pageProps, props }) {
  return (
    <div style={{ padding: "0 30px", width: "100vw" }}>
      <Component {...pageProps} menu={props.menu} />;
    </div>
  );
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

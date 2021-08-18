import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import Layout from "../components/Layout";

const Page = (props) => (
  <>
    <Layout menu={props.menu}>
      <SliceZone {...props} resolver={resolver} />
    </Layout>
    <script
      async
      defer
      src="https://static.cdn.prismic.io/prismic.js?new=true&repo=thegreatslicemachinetest"
    ></script>
  </>
);

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: "home-page",
  queryType: "single",
  // apiParams: {
  //   uid: 'home'
  // }
});

export default Page;

import React, { useState } from "react";
import { Client } from "../prismic-configuration";
import Prismic from "@prismicio/client";

export default function Search() {
  const [searchString, setSearchString] = useState("");
  const client = Client();

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSubmit = async () => {
    const options = {};
    // const prismic = await Prismic.client(
    //   "https://thegreatslicemachinetest.cdn.prismic.io/api/v2/documents/search")

    const api = await Prismic.client(
      "https://thegreatslicemachinetest.cdn.prismic.io/api/v2/documents/search",
      {}
    );
    // .then(function (api) {
    //   return api.query(Prismic.Predicates.search("document", "airplanes"), {
    //     // orderings: "[my.blog-post.date desc]",
    //   });
    // })
    // .then(function (response) {
    //   // response is the response object, response.results holds the documents

    //   console.log("response:", response);
    // });

    const result = await api.query(
      Prismic.Predicates.at("document.type", "blog-post")
    );

    console.log("result", result);
  };
  return (
    <div className="relative flex">
      <div className="p-5 rounded-full border border-black flex justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={searchString}
        />
      </div>
      <button
        className="bg-red-200 p-5 flex justify-center items-center rounded-full"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
}

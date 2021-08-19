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
    const searchResponse = await client.query(
      Prismic.Predicates.fulltext("document", searchString)
    );

    if (searchResponse.results.length > 0) {
      const ids = searchResponse.results.map((page) => page.id);
      console.log("getting ids:", ids);

      const pages2 = await client.query(
        Prismic.Predicates.in("document.id", ids),
        { lang: "*" }
      );
      console.log("pages2:", pages2);
    }
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

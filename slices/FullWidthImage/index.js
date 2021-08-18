import React from "react";
import { RichText } from "prismic-reactjs";

const FullWidthImage = ({ slice }) => (
  <section className="container">
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    <style jsx>{`
      .container {
        max-width: 980px;
        margin: auto;
        margin-bottom: 3.75rem;
      }
    `}</style>
  </section>
);

export default FullWidthImage;

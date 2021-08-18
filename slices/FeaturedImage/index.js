import React from "react";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

const FeaturedImage = ({ slice }) => (
  <section className="highlight container">
    <div>
      <RichText render={slice.primary.title} />
      <RichText render={slice.primary.headline} />
      <p>
        <a href={slice.primary.link.url}>
          <span>{slice.primary.linkLabel}</span>
        </a>
      </p>
    </div>
    <div>
      <img
        src={slice.primary.featuredImage.url}
        alt={slice.primary.featuredImage.alt}
      />
    </div>
    <style jsx>{`
      .highlight {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 25px;
      }
      @media (max-width: 767px) {
        .highlight {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </section>
);

export default FeaturedImage;

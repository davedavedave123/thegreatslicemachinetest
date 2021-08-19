import React, { useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";
import Image from "next/image";
import Search from "./Search";

export default function Header({ menu = [] }) {
  useEffect(() => {
    console.log("Header brandImage:", menu.data.brandImage);
  }, []);

  const { url: imgUrl, dimensions } = menu.data.brandImage;

  return (
    <header className="relative w-full h-10 flex justify-between">
      <a href="/" className="relative">
        {/* {menu.data.title && RichText.asText(menu.data.title)} */}
        {menu.data.brandImage && (
          <div className="relative h-10 w-10">
            <Image
              src={imgUrl}
              width={dimensions.width}
              height={dimensions.height}
            />
          </div>
        )}
      </a>
      <Search />
      <Links menuLinks={menu.data.menu_links} />
    </header>
  );
}

const Links = ({ menuLinks }) => {
  if (menuLinks) {
    return (
      <nav>
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li key={`menulink-${index}`}>
              <a href={Link.url(menuLink.link)}>
                {RichText.asText(menuLink.label)}
              </a>
            </li>
          ))}
        </ul>
        <style jsx>{`
          nav {
            float: right;
          }
          nav ul {
            margin: 0;
            padding-left: 0;
          }
          nav li {
            display: inline-block;
            margin-left: 40px;
          }
          nav li a {
            color: #484d52;
            font-weight: 700;
          }
          nav li a:hover {
            color: #72767b;
          }
          @media (max-width: 767px) {
            nav {
              float: none;
              text-align: center;
            }
            nav li {
              display: inline-block;
              margin-left: 10px;
              margin-right: 10px;
            }
          }
        `}</style>
      </nav>
    );
  }

  return null;
};

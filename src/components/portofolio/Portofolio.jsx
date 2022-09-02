import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/showroom.png";
import IMG2 from "../../assets/wgs.png";
import IMG3 from "../../assets/wgs2.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Showroom Sales Honda Jabodetabek",
    link: "http://hondasejabodetabek.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project Using With NodeJS in WGS",
    link: "https://github.com/albertafriadii/Bootcamp2203_AlbertAfriadi.Sigiro/tree/main/MiniProject_DataBarang://hondasejabodetabek.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project Using With NodeJS and ReactJS in WGS",
    link: "https://github.com/albertafriadii/Bootcamp2203_AlbertAfriadi.Sigiro/tree/main/FinalProjectAkhir",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {data.map(({ id, image, title, link }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={link} className="btn" target="_blank" rel="noreferrer">
                  Link Demo or Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;

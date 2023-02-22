import React from "react";

// import "../style.css";

const Item = ({ article }) => {
  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <section id="" className="cont-figure">
        <a href="/#" className="figure">
          <picture id="" className="content-pic picture">
            <img
              src={article.promo_items.basic.url}
              alt=""
              className="content-img"
              style={{ width: "300px" }}
            />
          </picture>
        </a>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a href="/#">{article.headlines.basic}</a>
        </h2>
        <h4 className="com-date">{article.display_date.split("T")[0]}</h4>
      </div>
    </article>
  );
};

export default Item;

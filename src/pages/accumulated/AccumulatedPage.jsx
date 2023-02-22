import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./components/Item";
import {
  getArticles,
  getTags,
} from "../../store/accumulated/accumulated.action";
// import "./style.css";

const AccumulatedPage = () => {
  const dispatch = useDispatch();
  const accumulatedStore = useSelector((state) => state.accumulated);

  const { articles, tags } = accumulatedStore;

  useEffect(() => {
    dispatch(getArticles());
    dispatch(getTags());
  }, []);

  return (
    <main>
      <div className="banner w-100 --bg-banner">
        <div className="banner --top --desktop"></div>
        <div className="banner --top --tablet"></div>
        <div className="banner --top --mobile"></div>
      </div>

      <div className="banner w-100 --bg-banner">
        <div className="banner --sticky --mobile"></div>
      </div>

      <div className="lay-sidebar">
        <div className="sidebar__main">
          <div className="row">
            <div className="com-titleWithfollow hlp-marginBottom-15">
              <h1 className="com-title-section-xl hlp-marginBottom-40">
                Acumulado Grilla
              </h1>
            </div>
          </div>

          <div className="row">
            <div
              id=""
              className="cont_tags com-secondary-tag hlp-marginBottom-20"
            >
              {tags &&
                tags.map((tag, idx) => (
                  <a key={idx} href={tag.slug} className="">
                    {tag.text}
                  </a>
                ))}
            </div>
          </div>

          <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            {articles &&
              articles.map((article) => (
                <Item key={article._id} article={article} />
              ))}

            {/* BANNER SMALL MOBILE */}
            <div className="banner --small --mobile"></div>

            {/* <!-- BANNER SMALL MOBILE --> */}
            <div className="banner --small --mobile"></div>

            <div className="transparency"></div>
          </section>
          <section className="row">
            <div className="col-12 hlp-text-center hlp-margintop-40">
              <button className="--btn --secondary">
                MÁS NOTAS DE ACUMULADO GRILLA
              </button>
            </div>
          </section>
        </div>

        <div className="sidebar__aside">
          <div className="banner --desktop --large"></div>
          <div className="banner --desktop --large"></div>
        </div>
      </div>
    </main>
  );
};

export default AccumulatedPage;

import React from "react";
import './obj.css'
import { useTranslation } from "react-i18next";

const Obj = () => {
  const {t} = useTranslation()

  return (
    <div>
      <main className="main-obj main">
        <section className="section-obj">
          <h1>{t("obj")}</h1>
          <p>
            {t("pObj")}
          </p>
        </section>
      </main>
    </div>
  );
};

export default Obj;

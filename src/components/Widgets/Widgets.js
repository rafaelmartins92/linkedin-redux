import React from "react";

import "./Widgets.css";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets-articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>LikedRM Notícias</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        "Covid-19: as últimas notícias sobre as vacinas",
        "Notícias mais lidas • 3976 leitores"
      )}
      {newsArticle(
        "Ibovespa hoje: Gol (GOLL4), Weg (WEGE3) e Hapvida (HAPV3) são os destaques negativos do dia",
        "Há 3h • 368 leitores"
      )}
      {newsArticle(
        "Brasil criou 401 mil vagas em fevereiro",
        "Há 1d • 382 leitores"
      )}
    </div>
  );
}

export default Widgets;

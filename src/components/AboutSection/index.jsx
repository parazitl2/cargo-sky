import './style.css';
import {useTranslation} from "react-i18next";

export const About = (props) => {
  const [t] = useTranslation('common');

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t("main.about")}</h2>
              <p>{t('about.description-p1')}</p>
              {/*<h3>Why Choose Us?</h3>*/}
              {/*<div className="list-style">*/}
              {/*  <div className="col-lg-6 col-sm-6 col-xs-12">*/}
              {/*    <ul>*/}
              {/*      {props.data*/}
              {/*        ? props.data.Why.map((d, i) => (*/}
              {/*            <li key={`${d}-${i}`}>{d}</li>*/}
              {/*          ))*/}
              {/*        : "loading"}*/}
              {/*    </ul>*/}
              {/*  </div>*/}
              {/*  <div className="col-lg-6 col-sm-6 col-xs-12">*/}
              {/*    <ul>*/}
              {/*      {props.data*/}
              {/*        ? props.data.Why2.map((d, i) => (*/}
              {/*            <li key={`${d}-${i}`}> {d}</li>*/}
              {/*          ))*/}
              {/*        : "loading"}*/}
              {/*    </ul>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        <div>
          <p>{t('about.description-p2')}</p>
          <p className={"additional-text"}>{t('about.description-additional')}</p>
        </div>
      </div>
    </div>
  );
};

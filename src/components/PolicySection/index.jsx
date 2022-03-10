import './style.css';
import {useTranslation} from "react-i18next";

export const Policy = () => {
  const [t] = useTranslation('common');

  return (
    <div id="policy">
      <div className="container">
        <div className="row">
            <div className="policy-text">
              <h2>{t("main.policy")}</h2>
              <p>{t('policy.main-terms-p1')}</p>
              <p>{t('policy.main-terms-p2')}</p>
              <p>{t('policy.main-terms-p3')}</p>
              <p>{t('policy.main-terms-p4')}</p>

              <h4>{t('policy.1-general')}</h4>
              <p>{t('policy.1-1-p')}</p>
              <p>{t('policy.1-2-p')}</p>
              <p>{t('policy.1-3-p')}</p>
              <p>{t('policy.1-4-p')}</p>

              <h4>{t('policy.2-policy-subject')}</h4>
              <p>{t('policy.2-1-p')}</p>
              <p>{t('policy.2-1-1-p')}</p>
              <p>{t('policy.2-1-2-p')}</p>
              <p>{t('policy.2-2-p')}</p>
              <p>{t('policy.2-2-1-p')}</p>
              <p>{t('policy.2-3-p')}</p>
              <p>{t('policy.2-3-1-p')}</p>
              <li>{t('policy.2-3-1-li1')}</li>
              <li>{t('policy.2-3-1-li2')}</li>
              <li>{t('policy.2-3-1-li3')}</li>

              <h4>{t('policy.3-responsibility')}</h4>
              <p>{t('policy.3-1-p')}</p>
              <p>{t('policy.3-2-p')}</p>
              <p>{t('policy.3-3-p')}</p>
              <p>{t('policy.3-4-p')}</p>
              <p>{t('policy.3-4-1-p')}</p>
              <p>{t('policy.3-4-2-p')}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

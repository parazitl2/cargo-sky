import './style.css';
import {useTranslation} from "react-i18next";

export const TrafficNet = () => {
  const [t] = useTranslation('common');

  return (
    <div id="traffic-net">
      <div className="container">
        <div className="row">
            <div className="traffic-net-text">
              <h2>{t("main.traffic-network")}</h2>
              <p>{t('traffic-net.p-1')}</p>

              <p className='list-header'>{t('traffic-net.p-2')}</p>
              <li>{t('traffic-net.p-2-li-1')}</li>
              <li>{t('traffic-net.p-2-li-2')}</li>
              <li>{t('traffic-net.p-2-li-3')}</li>
              <li>{t('traffic-net.p-2-li-4')}</li>
              <li>{t('traffic-net.p-2-li-5')}</li>
              <li>{t('traffic-net.p-2-li-6')}</li>

              <p>{t('traffic-net.p-3')}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

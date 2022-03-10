import './style.css';
import {useTranslation} from "react-i18next";
import {Link} from 'react-router-dom';

export const Services = () => {
  const [t] = useTranslation('common');

  return (
    <div id="services">
      <div className="container">
        <div className="row">
            <div className="services-text">
              <h2>{t("main.services")}</h2>
              <p>{t('services.li-1')}</p>
              <p>{t('services.li-2')}</p>
              <p>{t('services.li-3')}</p>
              <p className='list-header'>{t('services.li-4')}</p>
              <li>{t('services.li-4-1')}</li>
              <li>{t('services.li-4-2')}</li>
              <p className='list-header'>{t('services.li-5')}</p>
              <li>{t('services.li-5-1')}</li>
              <li>{t('services.li-5-2')}</li>
              <li>{t('services.li-5-3')}</li>
              <p>{t('services.li-6')}</p>
              <p>{t('services.li-7')}</p>
            </div>
        </div>

        <Link to='/contacts'>
          <button type='submit' className='btn btn-custom btn-lg'>
            {t('contact-us.main-title')}
          </button>
        </Link>
      </div>
    </div>
  );
};

import './style.scss';
import {useTranslation} from "react-i18next";
import {Link} from 'react-router-dom';

export const Footer = () => {
  const {t} = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <div id='footer'>
      <div className='container text-center'>
        <p>{t("company.deny-resp")}</p>
        <p>
          <Link to='/policy' className='page-scroll' style={{maxWidth: '185px'}}>
            {t('main.policy')}
          </Link>
        </p>
        <p>
          &copy; {currentYear} {t("company.name")}
        </p>
      </div>
    </div>
  );
};

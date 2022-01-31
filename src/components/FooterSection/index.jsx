import './style.css';
import {useTranslation} from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div id='footer'>
      <div className='container text-center'>
        <p>{t("company.deny-resp")}</p>
        <p>
          &copy; 2022 {t("company.name")}
        </p>
      </div>
    </div>
  );
};

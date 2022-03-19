import './style.scss';
import logo from '../../assets/logo.png';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";
import ReactCountryFlag from "react-country-flag"
import {useCallback} from 'react';

export const Navigation = (props) => {
  const [t, i18n] = useTranslation('common');

  const handleRU = useCallback(() => {
    i18n.changeLanguage('ru');
  }, [i18n]);

  const handleEN = useCallback(() => {
    i18n.changeLanguage('en');
  }, [i18n]);

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <Link to='/'>
          <img className='company-logo' src={logo}/>
        </Link>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'/>
            <span className='icon-bar'/>
            <span className='icon-bar'/>
          </button>
          {/*<a className='navbar-brand page-scroll' href='#page-top'>*/}
          {/*</a>*/}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link to='/about' className='page-scroll'>
                {t('main.about')}
              </Link>
            </li>
            <li>
              <Link to='/services' className='page-scroll'>
                {t('main.services')}
              </Link>
            </li>
            <li>
              <Link to='/traffic-net' className='page-scroll' style={{width: '90px'}}>
                {t('main.traffic-network')}
              </Link>
            </li>
            <li>
              <Link to='/fleet' className='page-scroll'>
                {t('main.fleet')}
              </Link>
            </li>
            <li>
              <Link to='/contacts' className='page-scroll'>
                {t('main.contacts')}
              </Link>
            </li>
            <li>
              <Link to='/policy' className='page-scroll' style={{maxWidth: '185px'}}>
                {t('main.policy')}
              </Link>
            </li>
            <li className='language-block'>
              <ReactCountryFlag countryCode="RU" title="Русский" onClick={handleRU} className='flag'/>
              <ReactCountryFlag countryCode="US" title="English" onClick={handleEN} className='flag'/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

import './style.scss';
import logo from '../../assets/logo.png';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";
import {useCallback, useLayoutEffect} from 'react';
import {ReactComponent as UKFlagSvg} from '../../assets/svg/gb.svg';
import {ReactComponent as RUFlagSvg} from '../../assets/svg/ru.svg';

export const Navigation = (props) => {
  const [t, i18n] = useTranslation('common');

  const handleRU = useCallback(() => {
    i18n.changeLanguage('ru');
  }, [i18n]);

  const handleEN = useCallback(() => {
    i18n.changeLanguage('en');
  }, [i18n]);

  const simulateToggle = useCallback(() => {
    const element = document.querySelector('button.navbar-toggle');

    // check if element is on the page
    if (element.offsetParent !== null) {
      element.dispatchEvent(
        new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1
        })
      )
    }
  }, []);

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <Link to='/'>
          <img className='company-logo' src={logo} alt={t('main.logo-alt')}/>
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
              <Link to='/about' className='page-scroll' onClick={simulateToggle}>
                {t('main.about')}
              </Link>
            </li>
            <li>
              <Link to='/services' className='page-scroll' onClick={simulateToggle}>
                {t('main.services')}
              </Link>
            </li>
            <li>
              <Link to='/traffic-net' className='page-scroll' style={{width: '90px'}} onClick={simulateToggle}>
                {t('main.traffic-network')}
              </Link>
            </li>
            <li>
              <Link to='/fleet' className='page-scroll' onClick={simulateToggle}>
                {t('main.fleet')}
              </Link>
            </li>
            <li>
              <Link to='/contacts' className='page-scroll' onClick={simulateToggle}>
                {t('main.contacts')}
              </Link>
            </li>
            <li className='language-block'>
              <RUFlagSvg title="Русский" width={30} onClick={handleRU} className='flag'/>
              <UKFlagSvg title="English" width={30} onClick={handleEN} className='flag'/>
            </li>
            <li>
              <div>
                <p>+7 913 709 09 09</p>
                <p>info@cargo-sky.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';
import { useTranslation } from "react-i18next";
import keys from "../../application-keys.json";

const initialState = {
  from_name: '',
  from_email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ from_name, from_email, message }, setState] = useState(initialState);
  const [t] = useTranslation('common');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        keys.emailjs.service_ID, keys.emailjs.template_ID, e.target, keys.emailjs.user_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>{t('contact-us.main-title')}</h2>
                <p>
                  {t('contact-us.main-text')}
                </p>
              </div>
              <form name='sentMessage' validate='true' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        required
                        type='text'
                        id='from_name'
                        name='from_name'
                        className='form-control'
                        placeholder={t('contact-us.name-placeholder')}
                        // required
                        onChange={handleChange}
                        value={from_name}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        required
                        type='email'
                        id='from_email'
                        name='from_email'
                        className='form-control'
                        placeholder={t('contact-us.email-title')}
                        onChange={handleChange}
                        value={from_email}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    required
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder={t('contact-us.message-placeholder')}
                    onChange={handleChange}
                    value={message}
                  />
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  {t('contact-us.send-button')}
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>{t('contact-us.info-title')}</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'/> {t('contact-us.address-title')}
                </span>
                {t('company.address')}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'/> {t('contact-us.email-title')}
                </span>{' '}
                {t('contact-us.email')}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'/> {t('contact-us.phone-title')}
                </span>{' '}
                {t('contact-us.phone-number')}
                <br/>
                {'Viber, Whatsapp, Telegram'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

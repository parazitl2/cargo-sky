import {useState} from 'react';
import emailjs from '@emailjs/browser';
import './style.scss';
import {useTranslation} from "react-i18next";
import keys from "../../application-keys.json";
import {TextInputRow} from './TextInputRow';

const initialState = {
  cargo_sender: '',
  sender_address: '',
  sender_contact_data: '',
  sender_name: '',
  pickup_address: '',
  cargo_receiver: '',
  receiver_address: '',
  receiver_contact_data: '',
  receiver_name: '',
  receiver_pickup_address: '',
  cargo_track: '',
  invoice_number: '',
  cargo_name: '',
  package_info: '',
  package_weight: '',
  circumstances: '',
  cargo_cost: '',
  transfer_start_date: '',
  following_documentation: '',
  additional_info: ''
}
export const Contact = () => {
  const [{
    cargo_sender,
    sender_address,
    sender_contact_data,
    sender_name,
    pickup_address,
    cargo_receiver,
    receiver_address,
    receiver_contact_data,
    receiver_name,
    receiver_pickup_address,
    cargo_track,
    invoice_number,
    cargo_name,
    package_info,
    package_weight,
    circumstances,
    cargo_cost,
    transfer_start_date,
    following_documentation,
    additional_info
  }, setState] = useState(initialState);
  const [t] = useTranslation('common');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prevState) => ({...prevState, [name]: value}));
  }
  const clearState = () => setState({...initialState});

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
                <TextInputRow
                  isRequired
                  name='cargo_sender'
                  value={cargo_sender}
                  handleChange={handleChange}
                  label={t('order.cargo_sender')}
                />
                <TextInputRow
                  isRequired
                  name='sender_address'
                  value={sender_address}
                  handleChange={handleChange}
                  label={t('order.sender_address')}
                />
                <TextInputRow
                  isRequired
                  name='sender_contact_data'
                  value={sender_contact_data}
                  handleChange={handleChange}
                  label={t('order.sender_contact_data')}
                />
                <TextInputRow
                  isRequired
                  name='sender_name'
                  value={sender_name}
                  handleChange={handleChange}
                  label={t('order.sender_name')}
                />
                <TextInputRow
                  name='pickup_address'
                  value={pickup_address}
                  handleChange={handleChange}
                  label={t('order.pickup_address')}
                  hint={t('order.pickup_address_hint')}
                />

                <br/>

                <TextInputRow
                  isRequired
                  name='cargo_receiver'
                  value={cargo_receiver}
                  handleChange={handleChange}
                  label={t('order.cargo_receiver')}
                />
                <TextInputRow
                  isRequired
                  name='receiver_address'
                  value={receiver_address}
                  handleChange={handleChange}
                  label={t('order.receiver_address')}
                />
                <TextInputRow
                  isRequired
                  name='receiver_contact_data'
                  value={receiver_contact_data}
                  handleChange={handleChange}
                  label={t('order.receiver_contact_data')}
                />
                <TextInputRow
                  isRequired
                  name='receiver_name'
                  value={receiver_name}
                  handleChange={handleChange}
                  label={t('order.receiver_name')}
                />
                <TextInputRow
                  isRequired
                  name='receiver_pickup_address'
                  value={receiver_pickup_address}
                  handleChange={handleChange}
                  label={t('order.receiver_pickup_address')}
                  hint={t('order.receiver_pickup_address_hint')}
                />

                <br/>

                <TextInputRow
                  isRequired
                  name='cargo_track'
                  value={cargo_track}
                  handleChange={handleChange}
                  label={t('order.cargo_track')}
                />

                <br/>

                <TextInputRow
                  isRequired
                  name='invoice_number'
                  value={invoice_number}
                  handleChange={handleChange}
                  label={t('order.invoice_number')}
                />
                <TextInputRow
                  isRequired
                  name='cargo_name'
                  value={cargo_name}
                  handleChange={handleChange}
                  label={t('order.cargo_name')}
                />
                <TextInputRow
                  isRequired
                  name='package_info'
                  value={package_info}
                  handleChange={handleChange}
                  label={t('order.package_info')}
                />
                <TextInputRow
                  isRequired
                  name='package_weight'
                  value={package_weight}
                  handleChange={handleChange}
                  label={t('order.package_weight')}
                />
                <TextInputRow
                  isRequired
                  name='circumstances'
                  value={circumstances}
                  handleChange={handleChange}
                  label={t('order.circumstances')}
                />
                <TextInputRow
                  isRequired
                  name='cargo_cost'
                  value={cargo_cost}
                  handleChange={handleChange}
                  label={t('order.cargo_cost')}
                />
                <TextInputRow
                  isRequired
                  name='transfer_start_date'
                  value={transfer_start_date}
                  handleChange={handleChange}
                  label={t('order.transfer_start_date')}
                />
                <TextInputRow
                  isRequired
                  name='following_documentation'
                  value={following_documentation}
                  handleChange={handleChange}
                  label={t('order.following_documentation')}
                  hint={t('order.following_documentation_hint')}
                />

                <br />

                <div className='form-group'>
                  <textarea
                    name='additional_info'
                    id='additional_info'
                    className='form-control'
                    rows='4'
                    placeholder={t('order.additional_info')}
                    onChange={handleChange}
                    value={additional_info}
                  />
                  <p className='help-block text-danger'/>
                </div>

                <div id='success'/>

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

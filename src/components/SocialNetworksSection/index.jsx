import './style.css';

export const SocialNetworks = () => {
  return (
    <div id="social" className='col-md-12'>
        <div className='row'>
            <div className='social'>
                <ul>
                    <li>
                        <a href={'#'}>
                            <i className='fa fa-facebook'></i>
                        </a>
                    </li>
                    <li>
                        <a href={'#'}>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a href={'#'}>
                            <i className='fa fa-youtube'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

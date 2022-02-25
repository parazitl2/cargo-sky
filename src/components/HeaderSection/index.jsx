import './style.css';

import p4 from '../../assets/images/boeing/4.jpg';
import p5 from '../../assets/images/an124/5.jpg';
import p6 from '../../assets/images/il76/6.jpg';
import p7 from '../../assets/images/boeing/7.jpg';
import p8 from '../../assets/images/an124/8.jpg';
import p9 from '../../assets/images/il76/9.jpeg';

import {useEffect, useState} from "react";
const arr = [p4, p5, p6, p7, p8, p9];

export const Header = (props) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {

    const inter = setInterval(() => {
      setNumber((i) => ((i + 1) % arr.length));
    }, 4000);

    return () => clearInterval(inter);
  });

  return (
    <header id='header'>
      <div className='intro'>
        <img className='mainImg' src={arr[number]}/>
        {/*<div className='overlay'>*/}
          {/*<div className='container'>*/}
          {/*  <div className='row'>*/}
          {/*    <div className='col-md-8 col-md-offset-2 intro-text'>*/}
                {/*<h1>*/}
                {/*  {props.data ? props.data.title : 'Loading'}*/}
                {/*  <span></span>*/}
                {/*</h1>*/}
                {/*<p>{props.data ? props.data.paragraph : 'Loading'}</p>*/}
                {/*<a*/}
                {/*  href='#features'*/}
                {/*  className='btn btn-custom btn-lg page-scroll'*/}
                {/*>*/}
                {/*  Learn More*/}
                {/*</a>{' '}*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    </header>
  )
}

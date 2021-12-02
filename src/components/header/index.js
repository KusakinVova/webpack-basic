import htmlToElement from '../../utils/htmlToElement';
import Header from './index.html';
// import Button from '../Button';

import './index.scss';


const header = htmlToElement(Header);
// const customButton = Button({
//   onClick : () => console.log('click for button'),
//   title : 'customButton',
//   className : 'buttonClass'
// })
// header.appendChild(customButton);

export default header;

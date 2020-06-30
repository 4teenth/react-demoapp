import React from 'react';
//потому что буду использовать JSX
import PropTypes from 'prop-types';
import defaultImg from './default-img.jpg';
import './Painting.css';
// console.log(defaultImg);

// const Painting = (props) => {
//   //   console.log(props);
//   return (
//     <div>
//       <img src={props.url} alt={props.title} width="480" />
//       <h2>{props.title}</h2>
//       <p>
//         Автор: <a href={props.profileUrl}>{props.tag}</a>
//       </p>
//       <p>Цена: {props.price} кредитов</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// };

//С деструктуризацией
// const Painting = ({ url, title, price, profileUrl, tag, quantity }) => {
//   const availability = quantity < 10 ? "Almost sold" : "In stock";
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{tag}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: {availability}</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// };
//OR without const availability
const Painting = ({ url, title, price, profileUrl, tag, quantity }) => (
  <div className="Painting">
    {/* не рендерятся
    {false}
    {null}
    {undefined} */}
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity < 10 ? 'Almost sold' : 'In stock'}</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

Painting.defaultProps = {
  url: defaultImg,
};

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;

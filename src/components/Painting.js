import React from "react";
//потому что буду использовать JSX

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
const Painting = ({ url, title, price, profileUrl, tag }) => (
  <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

export default Painting;

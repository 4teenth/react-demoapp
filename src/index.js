import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Как рендерится компонент:
// React.createElement(App);
//Как рендерится компонент как JSX-разметка:
// ReactDOM.render(<App />, document.getElementById("root"));

//Когба будем генерить эту всю createReactApp мы увидем это: (ru.reactjs.org/docs/strict-mode.html)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//---------DELETED--------------------demo prev
// const painting = {
//   id: "id-1",
//   url:
//     "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art Abstraction",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://cdn.pixabay.com/users/ractapopulous-24766",
//   },
//   quantity: 10,
// };

// const painting2 = {
//   id: "id-2",
//   url:
//     "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art Abstraction",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://cdn.pixabay.com/users/ractapopulous-24766",
//   },
//   quantity: 10,
// };

// const template = (
//   <div>
//     <img src={painting.url} alt={painting.title} width="480" />
//     <h2>{painting.title}</h2>
//     <p>
//       Автор: <a href={painting.author.url}>{painting.author.tag}</a>
//     </p>
//     <p>Цена: {painting.price} кредитов</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );
// console.log(template);
// ReactDOM.render(template, document.getElementById("root"));
//---------------------------------------

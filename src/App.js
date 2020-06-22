import React from "react";
//RULE!!! One file - one component
import Painting from "./components/Painting";
import paintings from "./paintings.json";

console.log(paintings);

//Пропсы передаются от туда, от куда мы рендерим компонент, а используются в самом компоненте (e.g. Painting)
const App = () => {
  return (
    <div>
      <h1>Главный компонент-контейнер приложения</h1>
      <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        profileUrl={paintings[0].author.url}
        tag={paintings[0].author.tag}
        // a={5}
        // b={10}
      />

      <Painting
        url="https://i.redd.it/zjdzlw0yhdv41.jpg"
        title="Bird. Animal art abstract"
        price="400"
        profileUrl="https://redditery.com/user/brenunsk/submitted"
        tag="brenunsk"
      />
    </div>
  );
};

export default App;

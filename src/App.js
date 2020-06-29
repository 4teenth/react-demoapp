import React from "react";
import Logo from "./components/Logo";
//RULE!!! One file - one component
// import Painting from "./components/Painting";
import PaintingList from "./components/PaintingList";
import Panel from "./components/Panel";
import paintings from "./paintings.json";

//from webinar 2
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "2196F3" },
  { label: "grey", color: "607D8B" },
  { label: "pink", color: "E91E63" },
  { label: "indigo", color: "3F51B5" },
];

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map((number) => <div>{number}</div>));

// console.log(paintings);

// const colors = ["red", "green", "blue", "purple"];

//Пропсы передаются от туда, от куда мы рендерим компонент, а используются в самом компоненте (e.g. Painting)
const App = () => {
  return (
    <div>
      <Panel title="Latest news">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
          fugit! Quam quae voluptates libero delectus. Amet provident eaque
          dicta facere sapiente, impedit officia laboriosam nulla distinctio
          optio tempora rem repudiandae.
        </p>
        <a href="www.google.com">Read more here...</a>
      </Panel>

      <Panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          tenetur, aspernatur corporis a aut eos cumque, sed cum animi nesciunt
          delectus quia! Non, atque. Quasi veritatis dolore saepe sed itaque.
        </p>
      </Panel>

      {/* <h1>Главный компонент-контейнер приложения</h1> */}
      <Logo text="Главный компонент-контейнер приложения" />

      <PaintingList paintingsProps={paintings} />

      {/* рендеp коллекции */}
      {/* <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul> */}

      {/* <ul>
        {paintings.map((painting) => (
          <li key={painting.id}>
            <Painting
              url={painting.url}
              title={painting.title}
              price={painting.price}
              profileUrl={painting.author.url}
              tag={painting.author.tag}
              quantity={painting.quantity}
            />
          </li>
        ))}
      </ul> */}

      {/* <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        profileUrl={paintings[0].author.url}
        tag={paintings[0].author.tag}
        quantity={paintings[0].quantity}
        // a={5}
        // b={10}
      />

      <Painting
        url="https://i.redd.it/zjdzlw0yhdv41.jpg"
        title="Bird. Animal art abstract"
        price={400}
        profileUrl="https://redditery.com/user/brenunsk/submitted"
        tag="brenunsk"
        quantity={3 + 1}
      /> */}
    </div>
  );
};

export default App;

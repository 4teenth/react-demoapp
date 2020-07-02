//Modules
import React from 'react';
//Components
// import Logo from './components/Logo'; - уже не нужен здесь, переехал в AppBar
//RULE!!! One file - one component
// import Painting from "./components/Painting"; - уже не нужен здесь, переехал в PaintingList
import PaintingList from './components/PaintingList/PaintingList';
import Panel from './components/Panel/Panel';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Notification from './components/Notification/Notification';
// import Container from './components/Container/Container'; - уже не нужен здесь, переехал в Layouts
// import AppBar from './components/AppBar/AppBar'; - уже не нужен здесь, переехал в Layouts
import Layout from './components/Layout/Layout';
//Styles
import paintings from './paintings.json';

//from webinar 2
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map((number) => <div>{number}</div>));

// console.log(paintings);

// const colors = ["red", "green", "blue", "purple"];

//Пропсы передаются от туда, от куда мы рендерим компонент, а используются в самом компоненте (e.g. Painting)
const App = () => {
  return (
    // React.Fragment OR <>
    <Layout>
      <ColorPicker options={colorPickerOptions} />

      <Notification text="СSS-Модули это хорошо" type="success" />

      <Notification text="СSS-Модули это плохо" type="error" />

      <Panel title="Latest news">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
          fugit! Quam quae voluptates libero delectus. Amet provident eaque
          dicta facere sapiente, impedit officia laboriosam nulla distinctio
          optio tempora rem repudiandae.
        </p>
        <a href="www.google.com">Read more here...</a>
      </Panel>

      <Panel title2nd="Popular profiles below">
        <p>Popular profiles below - Check this out!</p>
        {/* <PaintingList paintingsProps={paintings} /> - try this if u wanna */}
      </Panel>

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
    </Layout>
    // /React.Fragment OR </>
  );
};

export default App;

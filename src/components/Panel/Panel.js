import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.module.css';

console.log(styles);

//статические св-ва в отдельной переменной
// const styles = {
//   outline: "1px solid tomato",
// };

// const Panel = ({ title, children }) => (
//   <div style={styles}>
//     {title && <h2>{title}</h2>}

//     {children}
//   </div>
// );

//from webinar 2
//юзаем статические св-ва(стили) - инлайн стили
// const styles = {
//   container: {
//     width: 200,
//     border: '2px solid cyan',
//     background: 'pink',
//   },
// };

const Panel = ({ title, children }) => (
  <div
    className={styles.container}
    // style={styles.container}
    //OR
    // style={{
    //   width: 200,
    //   border: "2px solid cyan",
    //   background: "pink",
    // }}
  >
    {title && <h2>{title}</h2>}

    {children}
  </div>
);

Panel.defaultProps = {
  title: '',
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;

import React from 'react';
import './ColorPicker.css';

//перенесём свойства в файл стилей
// const styles = {
//   option: {
//     display: 'inline-block',
//     width: 40,
//     height: 40,
//     // outline: '1px solid red',
//     margin: 4,
//   },
// };
//инлайн стили для динамики
const ColorPicker = ({ options }) => {
  console.log({ options });
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        {options.map(({ label, color }) => (
          <span
            key={label}
            className="ColorPicker__option"
            style={{
              //   ...styles.option,
              backgroundColor: color,
            }}
          >
            {/* {color} */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;

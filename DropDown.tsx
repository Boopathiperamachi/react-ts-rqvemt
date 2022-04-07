import React, { useState } from 'react';
import Display from './Display';

const DropDown: React.FC<{}> = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [vehicle, setVehicle] = useState([
    'bike',
    'cycle',
    'lorry',
    'train',
    'flight',
  ]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    vehicle.push(value);
    setVehicle(vehicle);
  };
  const renderVehicle = () => {
    return vehicle.map((i: any) => {
      return <option className={i}>{i}</option>;
    });
  };
  return (
    <React.Fragment>
      <Display name={name} />
      <select onChange={handleChange}>{renderVehicle()}</select>
      <br />
      <input onChange={handleInputChange} />
      <br />
      <button onClick={handleClick}>Add</button>
    </React.Fragment>
  );
};
export default DropDown;

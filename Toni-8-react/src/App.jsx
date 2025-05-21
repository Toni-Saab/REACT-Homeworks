import React, { useState } from 'react';
import ListItems from './components/ListItems/ListItems';
import styles from './App.module.css';

const App = () => {
  const [carDetails, setCarDetails] = useState([
    { id: 'amg-gt', model: 'AMG GT', type: 'Coupe', power: '523 hp' },
    { id: 'urus', model: 'Urus', type: 'SUV', power: '641 hp' },
    { id: '911', model: '911 Turbo S', type: 'Sports', power: '640 hp' },
    { id: 'm5', model: 'M5 Competition', type: 'Sedan', power: '617 hp' },
    { id: 'rs6', model: 'RS 6 Avant', type: 'Wagon', power: '591 hp' },
  ]);
  const [newCarModel, setNewCarModel] = useState('');
  const [newCarType, setNewCarType] = useState('Sedan');
  const [newCarPower, setNewCarPower] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'model':
        setNewCarModel(value);
        break;
      case 'type':
        setNewCarType(value);
        break;
      case 'power':
        setNewCarPower(value);
        break;
      default:
        break;
    }
  };

  const addCarDetail = () => {
    newCarModel.trim() &&
      setCarDetails((prevDetails) => [
        ...prevDetails,
        {
          id: Date.now().toString(36),
          model: newCarModel,
          type: newCarType,
          power: newCarPower || 'N/A',
        },
      ]) &&
      setNewCarModel('') &&
      setNewCarPower('');
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.app__title}>The Syndicate Garage</h1>
      <div className={styles.app__controls}>
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={newCarModel}
          onChange={handleInputChange}
        />
        <select name="type" value={newCarType} onChange={handleInputChange}>
          <option value="Sedan">Sedan</option>
          <option value="Coupe">Coupe</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Sports">Sports</option>
          <option value="Wagon">Wagon</option>
        </select>
        <input
          type="text"
          name="power"
          placeholder="Power"
          value={newCarPower}
          onChange={handleInputChange}
        />
        <button onClick={addCarDetail}>
          Add Vehicle
        </button>
      </div>
      <ListItems carDetails={carDetails} />
    </div>
  );
};

export default App;
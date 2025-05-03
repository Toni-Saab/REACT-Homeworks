import React, { useState } from 'react';
import './List.css';

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 },
  ]);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className="people-list-container">
      <h2 className="list-title">Crew List</h2>
      <ul className="people-list">
        {people.map((person) => (
          <li key={person.id} className="person-item">
            <span className="person-info">
              <b className="person-name">{person.name}</b>, <span className="person-age">{person.age}</span> years
            </span>
            <button className="remove-button" onClick={() => removePerson(person.id)}>
              Kick Out
            </button>
          </li>
        ))}
      </ul>
      {people.length === 0 && <p className="empty-list-message">List is empty. No more crew!</p>}
    </div>
  );
};

export default List;
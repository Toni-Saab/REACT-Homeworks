import React from 'react';
import './List.css';

const ShoppingList = ({ items }) => (
  <div className="chest-block">
    <h2 className="chest-label">📦 Your Loot:</h2>
    {items.length ? (
      <ul className="item-grid">
        {items.map((item, index) => (
          <li key={index} className="item-voxel">{item}</li>
        ))}
      </ul>
    ) : (
      <p className="empty-chest">Chest is empty, bro!</p>
    )}
  </div>
);

export default ShoppingList;
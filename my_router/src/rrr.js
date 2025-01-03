import React, { useState } from 'react';

function DynamicList() {
  const [items, setItems] = useState(['Item 1', 'Item 2']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New Item"
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default DynamicList;

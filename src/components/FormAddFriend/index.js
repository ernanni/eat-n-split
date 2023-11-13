import { useState } from 'react';
import Button from '../Button';

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleOnSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form onSubmit={handleOnSubmit} className="form-add-friend">
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        required={true}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷 Image URL</label>
      <input
        required={true}
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

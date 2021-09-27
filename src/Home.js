import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('Yusuf');

  const handleClick = function () {
    setName('Khan');
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <p>{name} </p>
    </div>
  );
};

export default Home;

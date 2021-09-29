import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'New Website', body: 'Lorem ipsum...', author: 'Luke', id: 1 },
    { title: 'New Blog', body: 'Lorem ipsum...', author: 'Arthur', id: 2 },
    { title: 'React Blog', body: 'Lorem ipsum...', author: 'Luke', id: 3 },
  ]);

  const [name, setName] = useState('Mario');

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => console.log('Use Effect hook'), [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="My Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Luigi')}>Click Me</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;

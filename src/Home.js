import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'New Website', body: 'Lorem ipsum...', author: 'Luke', id: 1 },
    { title: 'New Blog', body: 'Lorem ipsum...', author: 'Arthur', id: 2 },
    { title: 'React Blog', body: 'Lorem ipsum...', author: 'John', id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="My Blogs" />
    </div>
  );
};

export default Home;

import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'New Website', body: 'Lorem ipsum...', author: 'Luke', id: 1 },
    { title: 'New Blog', body: 'Lorem ipsum...', author: 'Arthur', id: 2 },
    { title: 'React Blog', body: 'Lorem ipsum...', author: 'Luke', id: 3 },
  ]);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="My Blogs" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter(blog => blog.author === 'Luke')}
        title="Luke's Blogs"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Home;

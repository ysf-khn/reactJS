import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'New Website', body: 'Lorem ipsum...', author: 'Luke', id: 1 },
    { title: 'New Blog', body: 'Lorem ipsum...', author: 'Arthur', id: 2 },
    { title: 'React Blog', body: 'Lorem ipsum...', author: 'John', id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

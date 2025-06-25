import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import "./App.css";

const client = generateClient<Schema>();

function App() {
  const [blogPosts, setBlogPosts] = useState<Array<Schema["BlogPost"]["type"]>>([]);

  useEffect(() => {
    client.models.BlogPost.observeQuery().subscribe({
      next: (data) => setBlogPosts([...data.items]),
    });
  }, []);

  return (
    <main className="blog-container">
      <h1>Kayla's Blog Posts</h1>
      {blogPosts.length > 0 ? (
        <ul className="blog-posts-list">
          {blogPosts.map((post) => (
            <li key={post.id}>
              {post.content}
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          No blog posts yet. Click "Create New Post" to get started!
        </div>
      )}
    </main>
  );
}

export default App;

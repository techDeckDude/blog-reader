import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [blogPosts, setBlogPosts] = useState<Array<Schema["BlogPost"]["type"]>>([]);

  useEffect(() => {
    client.models.BlogPost.observeQuery().subscribe({
      next: (data) => setBlogPosts([...data.items]),
    });
  }, []);

  return (
    <main>
      <h1>My Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
      <div>
      </div>
    </main>
  );
}

export default App;

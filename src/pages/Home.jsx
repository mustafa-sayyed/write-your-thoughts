import React, { useState, useEffect } from "react";
import service from "../appwrite/service";
import { Container, PostCard } from "../components/index";
import { set } from "react-hook-form";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const allpost = await service.getAllBlogs();
      if (allpost) {
        setPosts(allpost.documents);
      }
    };
    fetchPost();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="min-h-screen h-full w-full flex flex-col justify-center items-center ">
        <h1 className="text-4xl mb-2"> NO Blogs Found</h1>
        <h1>Add new Blog to see here</h1> 
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Container>
        {posts.map((post) => (
          <div key={post.$id}>
            <PostCard {...post} />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Home;

import ReduxClient from "@/app/redux";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Redux = async () => {
  const posts = await getPosts();
  return (
    <>
      <ReduxClient posts={posts} />
    </>
  );
};

export default Redux;

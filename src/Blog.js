import React, { Fragment } from "react";

// export default function Blog() {
//   return (
//     <>
//       <Fragment>
//         <Post title="Ad update" body="It's been a while since i posted"></Post>
//         <Post title="My new blog" body="i am starting a new blog"></Post>
//       </Fragment>
//       <>
//         <Post title="Ad update" body="It's been a while since i posted"></Post>
//         <Post title="My new blog" body="i am starting a new blog"></Post>
//       </>
//     </>
//   );
// }

const posts = [
  {id:1, title: "An update", body: "It's been a while since i posted" },
  {id:2, title: "My new blog", body: "i am starting a new blog" },
];
export default function Blog() {
  return posts.map(post=>
    <Fragment key={post.id}>
     <PostTitle title={post.title}></PostTitle>
      <PostBody body={post.body}></PostBody>
    </Fragment>
    )
}

function Post({ title, body }) {
  return (
    <div>
      <PostTitle title={title}></PostTitle>
      <PostBody body={body}></PostBody>
    </div>
  );
}

function PostTitle({ title }) {
  return <h1>{title}</h1>;
}

function PostBody({ body }) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}

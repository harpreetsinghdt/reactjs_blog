import React, { useEffect, useState } from "react";
import Post from "./Post";
import cls from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
const PostsList = ({ isPosting, iHideModal }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setPosts(data.posts));

    async function getPosts() {
      const url = "http://localhost:8080/posts";
      const res = await fetch(url);
      const resData = await res.json();
      const iData = resData.posts;
      setPosts(iData);
      setIsFetching(false);
    }
    getPosts();
  }, []);
  // console.log(posts);
  // const [desc, setDesc] = useState("");
  // const [author, setAuthor] = useState("");
  // const handleChangeAuthor = (ev) => {
  //   setAuthor(ev.target.value);
  // };
  // const handleChangeDesc = (ev) => {
  //   setDesc(ev.target.value);
  // };

  // let iModal;

  // if (isVisible) {
  //   iModal = (
  //     <Modal iHideModal={iHideModalHanlder}>
  //       <NewPost
  //         iChangeAuthor={handleChangeAuthor}
  //         iChangeDesc={handleChangeDesc}
  //       />
  //     </Modal>
  //   );
  // }

  function iAddPostHandler(postData) {
    const url = "http://localhost:8080/posts";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((curr) => [postData, ...curr]);
  }

  return (
    <>
      {isPosting && (
        <Modal iHideModal={iHideModal}>
          <NewPost
            // iChangeAuthor={handleChangeAuthor}
            // iChangeDesc={handleChangeDesc}
            iCancel={iHideModal}
            iAddPost={iAddPostHandler}
          />
        </Modal>
      )}

      {!isFetching && posts.length > 0 && (
        <ul className={cls.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h2>No post published yet!</h2>
          <p>Write first post.</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;

import React, { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost(props) {
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const iChangeAuthor = (ev) => {
    setAuthor(ev.target.value);
  };
  const iChangeDesc = (ev) => {
    setDesc(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const postData = {
      body: desc,
      author: author,
    };    
    props.iAddPost(postData);
    props.iCancel();
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={iChangeDesc} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={iChangeAuthor} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.iCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;

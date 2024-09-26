import cls from "./Post.module.css";

// const names = ["Harry", "Harpreet"];
const Post = (props) => {
  // const randName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <li className={cls.post}>
      <p className={cls.author}>{props.author}</p>
      <p className={cls.text}>{props.body}</p>
    </li>
  );
};

export default Post;

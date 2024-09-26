const names = ["Harry", "Harpreet"];
const Post = () => {
  const randName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{randName}</p>
      <p>Desc is here</p>
    </div>
  );
};

export default Post;

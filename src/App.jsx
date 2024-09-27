import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/layouts/MainHeader";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const iShowModal = () => {
    setIsVisible(true);
  };
  const iHideModalHandler = () => {
    setIsVisible(false);
  };
  return (
    <>
      <MainHeader onCreatePost={iShowModal} />
      <main>
        <PostsList isPosting={isVisible} iHideModal={iHideModalHandler} />
      </main>
    </>
  );
}

export default App;

// import classes from './Postlist.module.css'
import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./Postlist.module.css";

function Postlist({isPosting,hideModal}) {
  const [enterBody, setEnterBody] = useState("");
  const [enterAuthor, setEnterAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnterBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnterAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={hideModal} >
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enterAuthor} body={enterBody} />
        <Post author="fiend" body="react is fun!" />
        {/* <Post author="fiend" body="react is fun!" /> */}
      </ul>
    </>
  );
}

export default Postlist;

// import classes from './Postlist.module.css'
import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./Postlist.module.css";

function Postlist({ isPosting, hideModal }) {

  return (
    <>
      {isPosting && (
        <Modal onClose={hideModal}>
          <NewPost
            onClose={hideModal}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post
          author="Amit Kumar Singh"
          body="I don't think that things necessarily happen for the best.
However, we can learn to make the best."
        />
        {/* <Post author="fiend" body="react is fun!" /> */}
      </ul>
    </>
  );
}

export default Postlist;

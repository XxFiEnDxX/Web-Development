import { useState } from "react";

import Postlist from "./components/Postlist";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(event) {
    setModalIsVisible(true);
  }

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  return (
    //<> </> can alsobe used insteadof <main>
    <>
      <MainHeader  showModal={showModalHandler} />
      <main>
        <Postlist isPosting={modalIsVisible} hideModal={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;

import React, {useState} from 'react';

import Button from "./components/UI/Button/Button"
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {

  const [showParagraph, setshowParagraph] = useState(false)

  const toggleParagraphHandler = () => {
    setshowParagraph(prevShowParagraph => !prevShowParagraph)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;

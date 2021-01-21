import './App.css';
import { useState } from 'react';
import Sketch from "react-p5";

const App = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  const setup = (p5, canvasParentRef) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};

	const draw = (p5) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
    setX(x => x + 1);
    setY(y => y + 1);
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default App;
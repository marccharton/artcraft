// import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import p5 from "p5";

const counterSlice = createSlice({
    name : "counter",
    initialState : 0,
    reducers : {
        increment: (state, action) => state + action.payload.incr,
        decrement: state => state - 1,
    }
});

const { actions, reducer } = counterSlice;
const { increment, decrement } = actions;

const store = configureStore({ reducer });

store.subscribe(() => {
    console.log(store.getState());
});

// document.getElementById("increment").addEventListener("click", () => {
//     store.dispatch(increment({ incr : 10 }));
// });

// document.getElementById("decrement").addEventListener("click", () => {
//     store.dispatch(decrement());
// });

store.dispatch(increment({ incr : 5 }));
store.dispatch(decrement());
store.dispatch(decrement());


var params = {
    bgColor : 0
};

new p5((p5) => {
	p5.setup = () => {
		p5.createCanvas(1200, 800);
		params.bgColor = p5.color(255, 204, 0);
	};

	p5.draw = () => {
    const red = store.getState();
		params.bgColor = p5.color(red, 204, 0);
		p5.background(params.bgColor);
		p5.strokeWeight(5);
		p5.fill(params.bgColor);
		p5.circle(p5.mouseX, p5.mouseY, 300);
	};

  p5.mousePressed = () => {
    console.log(p5.mouseX);
    store.dispatch(increment({ incr : 20 }));
  };
});
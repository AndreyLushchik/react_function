import { useState } from "react";

const Counter = ({ className }) => {
	let [counter, setCounter] = useState(0);
	const onCounterPlus = () => {
		setCounter(counter + 1);
	};
	const onCounterMinus = () => {
		setCounter(counter - 1);
	};
	const onCounterRundom = () => {
		setCounter(Math.floor(Math.random(counter) * 100));
	};
	const onCounterReset = () => {
		setCounter((counter = 0));
	};
	return (
		<div className={className}>
			<button onClick={onCounterMinus}>➖</button>
			<span>{counter}</span>
			<button onClick={onCounterPlus}>➕</button>
			<button onClick={onCounterRundom}>🎲</button>
			<button onClick={onCounterReset}>0️⃣</button>
		</div>
	);
};

export default Counter;

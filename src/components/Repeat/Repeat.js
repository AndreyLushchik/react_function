import { useState } from "react";
const arrSymbol = ["🔄", "🔂", "❎"];
const Repeat = ({ className }) => {
	const [index, setIndex] = useState(0);

	const onButtonClick = () => {
		setIndex(index === 2 ? 0 : index + 1);
	};
	return (
		<button className={className} onClick={onButtonClick}>
			{arrSymbol[index]}
		</button>
	);
};

export default Repeat;

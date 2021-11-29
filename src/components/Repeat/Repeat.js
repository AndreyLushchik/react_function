import { useState } from "react";

const Repeat = ({ className }) => {
	const [noRepeat, setNoRepeat] = useState("❎");
	const [index, setIndex] = useState(0);

	const onButtonClick = () => {
		setIndex(index === 2 ? 0 : index + 1);
		setNoRepeat(["🔄", "🔂", "❎"][index]);
	};
	return (
		<button className={className} onClick={onButtonClick}>
			{noRepeat}
		</button>
	);
};

export default Repeat;

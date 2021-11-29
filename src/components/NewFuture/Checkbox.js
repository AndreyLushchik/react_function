import { useState } from "react";

const Checkbox = ({ className }) => {
	let [view, setView] = useState("❌");
	const onButtonClick = () => {
		setView(view === "✅" ? "❌" : "✅");
	};
	return (
		<button className={className} onClick={onButtonClick}>
			{view}
		</button>
	);
};

export default Checkbox;

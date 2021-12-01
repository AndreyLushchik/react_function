import { useState } from "react";

const HideText = () => {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<button onClick={() => setVisible(!visible)}>Toogle</button>
			<div>{visible && <p>lasdjknaskjnasjkfnsajkfsa</p>}</div>
		</div>
	);
};

export default HideText;

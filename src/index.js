import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Checkbox from "./components/NewFuture/Checkbox";
import Repeat from "./components/Repeat/Repeat";
import Counter from "./components/Counter/Counter";
import HideText from "./components/HideText/index";

ReactDOM.render(
	<React.StrictMode>
		<Checkbox className="checkbox" />
		<Repeat className="repeat" />
		<Counter className="counter" />
		<HideText />
	</React.StrictMode>,
	document.getElementById("root")
);

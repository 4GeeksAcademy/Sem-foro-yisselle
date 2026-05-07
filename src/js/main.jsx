import React from "react";
import ReactDOM from "react-dom/client";
import TrafficLight from "./components/TrafficLight";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<TrafficLight />
	</React.StrictMode>
);

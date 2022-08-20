import clsx from "clsx";
import React from "react";
import Button from "./Button";
import { BsBriefcase } from "react-icons/bs";

const IconInput: React.FC = () => {
	return (
		<aside
			className={clsx(
				"search",
			)}
		>
			<h2>Location</h2>
		</aside>
	);
};

export default IconInput;

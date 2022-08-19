import clsx from "clsx";
import React from "react";
import { CardProps } from "../../type/CardProps";

const Card : React.FC<Partial<CardProps>> = ({ children, className }) => {
	return (
		<div className={clsx("p-4 bg-teal-800", className)}>
			{ children }
		</div>
	)
};

export default Card;
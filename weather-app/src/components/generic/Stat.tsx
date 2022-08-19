import clsx from "clsx";
import React from "react";
import { StatProps } from "../../type/StatProps";
import Card from "./Card";

const Stat: React.FC<Partial<StatProps>> = ({
	title,
	children,
	className,
	number,
	unit,
}) => {
	return (
		<Card className={clsx("flex flex-col items-center stat", className)}>
			<h3>{title}</h3>
			<span className="flex gap-4 items-end">
				<span className="text-4xl font-bold">{number}</span>
				<span className="text-xl">{unit}</span>
			</span>
			{children}
		</Card>
	);
};

export default Stat;

import clsx from "clsx";
import React from "react";
import { ButtonProps } from "../../type/ButtonProps";

const Button: React.FC<Partial<ButtonProps>> = ({
	className,
	children,
	variant = "primary",
	icon,
	onClick,
}) => {
	return (
		<button
			className={clsx(
				"h-fit",
				!icon && "px-4 py-1",
				icon && "w-8 h-8 p-2 rounded-full leading-3",
				variant === "primary" && [
					"bg-purple-500 hover:bg-purple-600 active:bg-purple-700",
				],
				variant === "secondary" && [
					"bg-gray-500 hover:bg-gray-600 active:bg-gray-700",
				],
				"text-white transition-colors shadow-md",
				className
			)}
			onClick={onClick}
		>
			{children}
			{icon}
		</button>
	);
};

export default Button;

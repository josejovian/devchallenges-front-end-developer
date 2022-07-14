import clsx from "clsx";

const Button = ({
	children = <>Button</>,
	variant = "default",
	color = "default",
	disableShadow = false,
	size = "md",
	disabled,
	startIcon,
	endIcon,
}) => {
	return (
		<button
			className={clsx(
				"flex items-center justify-center rounded-md",
				size === "sm" && "px-2 py-1",
				size === "md" && "px-4 py-2",
				size === "lg" && "px-8 py-4",
				(!disableShadow || disabled) && "shadow-md",
				variant === "default" && [
					disabled
						? "bg-gray-300 text-gray-500"
						: [
								color === "default" &&
									"bg-gray-200 hover:bg-gray-300 focus:bg-gray-300",
								color === "primary" &&
									"bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white",
								color === "secondary" &&
									"bg-gray-600 hover:bg-gray-700 focus:bg-gray-700 text-white",
								color === "danger" &&
									"bg-red-400 hover:bg-red-500 focus:bg-red-500 text-white",
						  ],
				],
				(variant === "outline" || variant === "text") && [
					"!shadow-none",
					variant === "text" ? "border-0" : "border-2",
					disabled
						? "bg-none hover:bg-none focus:bg-none border-0 text-gray-500"
						: [
								color === "default" &&
									"border-gray-400 hover:bg-gray-100 focus:bg-gray-100 text-gray-400",
								color === "primary" &&
									"border-blue-400 hover:bg-blue-100 focus:bg-blue-100 text-blue-400",
								color === "secondary" &&
									"border-gray-600 hover:bg-gray-100 focus:bg-gray-100 text-gray-600",
								color === "danger" &&
									"border-red-400 hover:bg-red-100 focus:bg-red-100 text-white text-red-400",
						  ],
				],
				"transition-color"
			)}
			disabled={disabled}
		>
			<div className={clsx(startIcon && "mr-2")}>
				{startIcon}
			</div>
			{children}
			<div className={clsx(endIcon && "ml-2")}>
				{endIcon}	
			</div>
		</button>
	);
};

export default Button;

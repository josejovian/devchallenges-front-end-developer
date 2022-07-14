import clsx from "clsx";

const Input = ({
	type = "text",
	error = false,
	disabled = false,
	helperText,
	startIcon,
	endIcon,
	value,
	size = "md",
	fullWidth = false,
	multiline = false,
	rows,
}) => {
	const inputProps = {
		placeholder: "Placeholder",
		type: type,
		defaultValue: value,
		disabled: disabled,
	};

	const className = clsx(
		"w-64 px-4",
		size === "sm" && "py-1",
		size === "md" && "py-4",
		"border-2 ",
		"hover:border-gray-600 active:border-blue-400 focus:border-blue-400",
		error
			? "border-red-400 hover:border-gray-600 active:border-red-400 focus:border-red-400"
			: "border-gray-200",
		disabled && "!border-gray-300 !bg-gray-200",
		fullWidth && "!w-full"
	);

	return (
		<div className={clsx("flex flex-col")}>
			{multiline ? (
				<textarea
					className={clsx(className)}
					{...inputProps}
					rows={rows}
				></textarea>
			) : (
				<div
					className={clsx("relative", fullWidth ? "w-full" : "w-fit")}
				>
					<span className="absolute left-0 z-10 p-6 text-gray-400">
						{startIcon}
					</span>
					<input
						className={clsx(
							className,
							startIcon && "pl-16",
							endIcon && "pr-16"
						)}
						{...inputProps}
					/>
					<span className="absolute right-0 z-10 p-6 text-gray-400">
						{endIcon}
					</span>
				</div>
			)}
			<span
				className={clsx(
					"text-xs",
					helperText && "mt-2",
					error && "text-red-400"
				)}
			>
				{helperText}
			</span>
		</div>
	);
};

export default Input;

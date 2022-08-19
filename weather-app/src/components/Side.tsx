import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Button from "./generic/Button";
import { MdClose, MdLocationOn, MdMyLocation } from "react-icons/md";
import { SideProps } from "../type/SideProps";
import { tempSymbol, validatedWeather } from "../App";

const Side: React.FC<SideProps> = ({
	updateCurrentLocation,
	today,
	setCity,
	temp,
}) => {
	const currentDate: Date = new Date();
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState({
		string: "",
	});

	const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months: string[] = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const cities: string[] = ["Bangkok", "Hanoi", "Jakarta"];

	function updateQuery(newString: string): void {
		if (newString === query.string) return;

		setQuery({
			string: newString.toLowerCase(),
		});
	}

	useEffect(() => {
		console.log(query);
	}, [query]);

	return (
		<>
			<aside
				className={clsx(
					"fixed left-0 top-0",
					"block w-exc-scroll lg:w-side h-force p-8",
					"bg-teal-800 z-40",
					!open && "hidden"
				)}
			>
				<section className="flex justify-between gap-4">
					<input
						id="search"
						className={clsx(
							"min-w-0 flex-grow px-4",
							"border border-gray-200 bg-teal-800"
						)}
						type="text"
						placeholder="Search a place..."
					/>
					<Button
						onClick={() => {
							const input = document.getElementById(
								"search"
							) as HTMLInputElement;
							if (input) updateQuery(input.value);
						}}
					>
						Search
					</Button>
					<Button icon={<MdClose />} variant="secondary" onClick={() => setOpen(false)} />
				</section>
				<div className="flex flex-col gap-8 mt-16">
					{cities
						.filter((city) =>
							city
								.toLowerCase()
								.includes(query.string.toLowerCase())
						)
						.map((city) => (
							<button
								className={clsx(
									"w-full p-4",
									"border-gray-500 border text-left",
									"hover:bg-gray-500 active:bg-gray-600 active:border-gray-600 transition-colors"
								)}
								onClick={() => {
									setCity(city);
									setOpen(false);
								}}
							>
								{city}
							</button>
						))}
				</div>
			</aside>
			<div
				className={clsx(
					"fixed left-0 top-0 w-screen h-screen",
					"bg-black opacity-40 z-30",
					!open && "hidden"
				)}
				onClick={() => setOpen(false)}
			></div>
			<aside
				className={clsx(
					"w-exc-scroll h-force lg:w-side",
					"flex flex-col justify-between",
					"bg-teal-800"
				)}
			>
				<section className={clsx("flex justify-between w-full p-8")}>
					<Button variant="secondary" onClick={() => setOpen(true)}>
						Search for places
					</Button>
					<Button
						variant="secondary"
						icon={<MdMyLocation />}
						onClick={updateCurrentLocation}
					/>
				</section>
				<section className="relative">
					<div
						id="today-weather-background"
						className="absolute left-0 top-0 w-full ratio-special"
					/>
					<div className="flex flex-col items-center justify-center w-full ratio-special z-20">
						<img
							src={`${validatedWeather(
								today.weather.split(" ").join("").toLowerCase()
							)}.png`}
							className="w-32 h-32"
							alt={today.weather}
						/>
					</div>
				</section>
				<section className="flex flex-col text-center gap-16">
					<span>
						<span className="text-9xl">
							{Math.floor(today.temperature)}
						</span>
						<span className="text-5xl text-gray-200">
							{tempSymbol[temp]}
						</span>
					</span>
					<span className="text-4xl text-gray-200">
						{today.weather}
					</span>
				</section>
				<section className="flex flex-col items-center p-16 gap-4">
					<div className="flex">
						Today &bull;{" "}
						{days[currentDate.getDay()] +
							", " +
							currentDate.getDate() +
							" " +
							months[currentDate.getMonth()]}
					</div>
					<div className="flex items-center">
						<MdLocationOn /> {today.location}
					</div>
				</section>
			</aside>
		</>
	);
};

export default Side;

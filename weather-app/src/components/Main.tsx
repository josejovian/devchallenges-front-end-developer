import clsx from "clsx";
import React, { useEffect } from "react";
import { MainProps } from "../type/MainProps";
import { WeatherDay } from "../type/WeatherDay";
import Card from "./generic/Card";
import Button from "./generic/Button";
import Stat from "./generic/Stat";
import { RiSendPlaneFill } from "react-icons/ri";
import { tempSymbol, validatedWeather } from "../App";

const Main: React.FC<MainProps> = ({ days, today, temp, setTemp }) => {
	useEffect(() => {
		console.log(days);
	});

	function humidityColor(humidity: number): string {
		if (humidity >= 90) return "bg-red-400";
		if (humidity >= 60) return "bg-yellow-400";
		return "bg-green-400";
	}

	return (
		<main
			className={clsx(
				"w-exc-scroll lg:w-inv-side h-force px-8 md:px-32 py-8 bg-teal-900"
			)}
		>
			<section className={clsx("flex w-full justify-end gap-4 mb-8")}>
				<Button variant="secondary" icon={<span>℃</span>} onClick={() => setTemp(0)} />
				<Button variant="secondary" icon={<span>℉</span>} onClick={() => setTemp(1)} />
			</section>
			<section className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
				{days &&
					days.map((day: WeatherDay) => {
						const displayDate: string = day.date.toDateString();
						const displayImageSrc: string = `${validatedWeather(
							day.weather.split(" ").join("").toLowerCase()
						)}.png`;
						const displayTemp: number[] = [
							Math.round(day.max),
							Math.round(day.min),
						];
						return (
							<Card className="flex flex-col items-center">
								<p>{displayDate}</p>
								<img
									className="w-16 h-16 my-8"
									src={displayImageSrc}
									alt={day.weather}
								/>
								<section className="w-full flex justify-between">
									<span>{displayTemp[0]}{tempSymbol[temp]}</span>
									<span className="text-gray-400">{displayTemp[1]}{tempSymbol[temp]}</span>
								</section>
							</Card>
						);
					})}
			</section>
			<section className="">
				<h2 className="text-2xl mt-8">Today's Highlights</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
					<Stat
						title="Wind Status"
						number={today.wind.speed}
						unit="mph"
					>
						<Button
							icon={
								<RiSendPlaneFill
									style={{
										transform: `rotate(${
											today.wind.degree - 45
										}deg)`,
									}}
								/>
							}
							className="mt-4"
						/>
					</Stat>
					<Stat title="Humidity" number={today.humidity} unit="%">
						<div className="w-full px-4 xl:px-16">
							<div className="w-full flex justify-between mt-4">
								<span>0</span>
								<span>50</span>
								<span>100</span>
							</div>
							<div
								className={clsx(
									"relative w-full h-3",
									"bg-gray-200 rounded-lg overflow-hidden"
								)}
							>
								<div
									className={clsx(
										"absolute top-0 h-full",
										humidityColor(today.humidity)
									)}
									style={{ width: `${today.humidity}%` }}
								></div>
							</div>
						</div>
					</Stat>
					<Stat title="Visibility" number={today.visibility} unit="miles" />
					<Stat title="Air Pressure" number={today.pressure} unit="mb" />
				</div>
			</section>

			<footer id="footer" className={clsx("mt-16 y-8 text-center")}>
				created by{" "}
				<a href="https://github.com/josejovian">josejovian</a> -{" "}
				<a href="https://devchallenges.io/">devChallenges.io</a>
			</footer>
		</main>
	);
};

export default Main;

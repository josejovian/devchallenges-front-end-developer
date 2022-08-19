import { useEffect, useState } from "react";
import "./App.css";
import Side from "./components/Side";
import Main from "./components/Main";
import { Wind, Today } from "./type/Today";
import { WeatherDay } from "./type/WeatherDay";
import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5",
});

export const tempSymbol = ["℃", "℉"];

export function validatedWeather(weather: string): string {
	const validWeathers = [
		"clear",
		"hail",
		"heavycloud",
		"heavyrain",
		"lightcloud",
		"lightrain",
		"shower",
		"sleet",
		"snow",
		"thunderstorm",
	];

	if (validWeathers.includes(weather)) return weather;

	return "unknown";
}

function App() {
	const [today, setToday] = useState({
		temperature: 0,
		location: "",
		weather: "",
		wind: {
			speed: 0,
			degree: 0,
		},
		visibility: 0,
		pressure: 0,
		humidity: 0,
	});
	const [days, setDays] = useState([
		{
			date: new Date(),
			max: 0,
			min: 0,
			weather: "Light Rain",
		},
	]);
	const [ignore, setIgnore] = useState(0);
	const [city, setCity] = useState("jakarta");
	const [coord, setCoord] = useState({
		latitude: 0,
		longitude: 0,
	});
	const [temp, setTemp] = useState(0);

	function convertWeather(weather: string): string {
		return weather
			.split(" ")
			.map((words) => capitalize(words))
			.join(" ");
	}

	function convertTodayData({
		temperature,
		location,
		weather,
		wind,
		visibility,
		pressure,
		humidity,
	}: Today): Today {
		return {
			temperature: convertTemperature(temperature),
			location: location,
			weather: convertWeather(weather),
			wind: wind,
			visibility: visibility,
			pressure: pressure,
			humidity: humidity,
		};
	}

	function selectRelevantColumns(raw: any) {
		let temperature: number = raw.list[0].main.feels_like,
			location: string = raw.city.name,
			weather: string = raw.list[0].weather[0].description,
			wind: Wind = {
				speed: raw.list[0].wind.speed,
				degree: raw.list[0].wind.deg,
			},
			visibility: number = raw.list[0].visibility,
			pressure: number = raw.list[0].main.pressure,
			humidity: number = raw.list[0].main.humidity;

		setToday(
			convertTodayData({
				temperature: temperature,
				location: location,
				weather: weather,
				wind: wind,
				visibility: visibility,
				pressure: pressure,
				humidity: humidity,
			})
		);

		setDays(selectWeatherData(raw.list));
	}

	function selectWeatherData(days: any): WeatherDay[] {
		return days
			.filter((instance: any) => {
				const instanceDate = new Date(instance.dt_txt);
				const day1: number = new Date().getDate(),
					day2: number = instanceDate.getDate(),
					diff: number = day2 - day1,
					hour: number = instanceDate.getHours(),
					minute: number = instanceDate.getMinutes(),
					second: number = instanceDate.getSeconds();
				return (
					diff > 0 &&
					5 >= diff &&
					hour === minute &&
					minute === second &&
					second === 0
				);
			})
			.map((instance: any): WeatherDay => {
				return {
					date: new Date(instance.dt_txt),
					max: convertTemperature(instance.main.temp_max),
					min: convertTemperature(instance.main.temp_min),
					weather: convertWeather(instance.weather[0].description),
				};
			});
	}

	// https://stackoverflow.com/a/1026087
	function capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function updateCurrentLocation(): void {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			setCoord({
				latitude: latitude,
				longitude: longitude,
			});
		});
	}

	async function fetchWeatherData(mode: number = 0): Promise<any> {
		if (city.length <= 3 || city.length >= 20) return;

		function handleTheRest(res : any) {
			console.log(res.data);
			selectRelevantColumns(res.data);
			localStorage.setItem(
				"time",
				JSON.stringify(new Date().getTime())
			);
			localStorage.setItem("weather", JSON.stringify(res.data));
		}

		if (mode === 0)
			await api
				.get(`/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
				.then(handleTheRest)
				.catch((e) => console.log(e));
		else
			await api
				.get(`/forecast?lat=${coord.latitude}&lon=${coord.longitude}&appid=${process.env.REACT_APP_API_KEY}`)
				.then(handleTheRest)
				.catch((e) => console.log(e)); 
	}

	function convertTemperature(value: number): number {
		if(temp === 0)
			return value - 273;
	
		return ((value - 273)*9)/5 + 32;
	}	

	useEffect(() => {
		let existingTime: string | null = localStorage.getItem("time");
		let currentDate: Date = new Date(),
			existingDate: Date | null = null;

		if (existingTime) {
			existingDate = new Date(parseInt(existingTime));
		}

		if (
			!existingDate ||
			currentDate.getDate() !== existingDate.getDate() ||
			currentDate.getMonth() !== existingDate.getMonth() ||
			currentDate.getFullYear() !== existingDate.getFullYear()
		) {
			fetchWeatherData();
		} else {
			const weather: any | null = localStorage.getItem("weather");
			if (weather) {
				selectRelevantColumns(JSON.parse(weather));
			}
		}
	}, []);

	useEffect(() => {
		if (city !== "" && ignore > 2) {
			fetchWeatherData(0);
		}
		setIgnore((prevIgnore) => prevIgnore + 1);
	}, [city]);

	useEffect(() => {
		if (city !== "" && ignore > 2) {
			fetchWeatherData(1);
		}
		setIgnore((prevIgnore) => prevIgnore + 1);
	}, [coord]);

	useEffect(() => {
		const weather: any | null = localStorage.getItem("weather");
		if (weather) {
			selectRelevantColumns(JSON.parse(weather));
		}
	}, [temp]);

	return (
		<div className="App flex lg:flex-row flex-col">
			<Side
				updateCurrentLocation={updateCurrentLocation}
				today={today}
				temp={temp}
				setCity={setCity}
			/>
			<Main days={days} today={today} temp={temp} setTemp={setTemp} />
		</div>
	);
}

export default App;

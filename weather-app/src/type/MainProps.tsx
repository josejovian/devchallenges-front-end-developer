import { Today } from "./Today";
import { WeatherDay } from "./WeatherDay";

export interface MainProps {
	days: WeatherDay[];
	today: Today;
	temp: number;
	setTemp: React.Dispatch<React.SetStateAction<number>>;
}

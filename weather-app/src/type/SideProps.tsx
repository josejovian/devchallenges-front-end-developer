import React from "react";
import { Today } from "./Today";

export interface SideProps {
	updateCurrentLocation: () => void;
	today: Today;
	setCity: React.Dispatch<React.SetStateAction<string>>;
	temp: number;
}

export interface Wind {
	speed: number,
	degree: number,
}

export interface Today {
	temperature: number,
	location: string,
	weather: string,
	wind: Wind,
	humidity: number,
	visibility: number,
	pressure: number,
}
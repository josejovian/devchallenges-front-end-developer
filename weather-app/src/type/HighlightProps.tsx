export interface WindStatus {
	speed : number,
	degree : number,
}
export interface HighlightProps {
	windStatus : WindStatus,
	humidity : number,
	visibility : number,
	airPressure : number,
}
import React from "react";

export interface StatProps {
	className : string | undefined,
	children: React.ReactNode | undefined,
	title: string,
	number: number,
	unit: string,
}
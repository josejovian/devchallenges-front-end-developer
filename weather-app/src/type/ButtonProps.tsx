import React from "react";

export interface ButtonProps {
	className : string | undefined,
	children: React.ReactNode | undefined,
	onClick : React.MouseEventHandler<HTMLButtonElement> | undefined,
	variant : string | undefined,
	icon : React.ReactNode | null | undefined,
}
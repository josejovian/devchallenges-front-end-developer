import React from "react";
import { Job } from "./Job";

export interface SideProps {
	focus: Partial<Job>,
	setFocus : React.Dispatch<React.SetStateAction<any>>;
	location: string;
	setLocation: React.Dispatch<React.SetStateAction<string>>;
	setFullTimeOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

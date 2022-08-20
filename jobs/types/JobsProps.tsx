import React from "react";
import { Job } from "./Job";

export interface JobsProps {
	jobs: Partial<Job>[];
	setFocus : React.Dispatch<React.SetStateAction<any>>;
	fullTimeOnly : boolean,
}
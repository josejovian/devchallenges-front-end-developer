import clsx from "clsx";
import React, { useEffect } from "react";
import Button from "../Button";
import { BsBriefcase } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import locations from "../../public/locations.json";
import { SideProps } from "../../types/SideProps";
import { emptyJob } from "../../pages/index";

const ViewSide: React.FC<Partial<SideProps>> = ({ focus, setFocus }) => {
	const samplePlaces = ["London", "Amsterdam", "New York", "Berlin"];

	useEffect(() => {
		console.log(focus);
	}, [focus]);

	return (
		<aside className={clsx("w-full xl:w-side")}>
			<p
				className="text-blue-600 font-bold cursor-pointer"
				onClick={() => {
					if (setFocus) setFocus(emptyJob);
				}}
			>
				← back to search
			</p>
			<h2 className="mt-4 text-gray-400 font-bold">JOB SOURCE</h2>
			<p>{focus && focus.via}</p>
		</aside>
	);
};

export default ViewSide;

import clsx from "clsx";
import React from "react";
import Button from "../Button";
import { BsBriefcase } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import locations from "../../public/locations.json";
import { SideProps } from "../../types/SideProps";

const SearchSide: React.FC<Partial<SideProps>> = ({ location = "", setLocation, setFullTimeOnly }) => {
	const samplePlaces = ["London", "Amsterdam", "New York", "Berlin"];

	function locationSearch(query: string): void {
		if (query.length < 3 || query.length > 20) return;

		const queryResults = (locations as Array<any>)?.filter((location: any) =>
			location.name.toLowerCase().includes(query.toLowerCase())
		);

		if (queryResults.length > 0 && setLocation) {
			setLocation(queryResults[0].name);
		}
	}

	function filterOnChange() {
		const checkbox = document.querySelector("#fulltime-filter") as HTMLInputElement;
		
		if(checkbox && setFullTimeOnly) {
			setFullTimeOnly(checkbox.checked);
		}
	}

	return (
		<aside className={clsx("w-full xl:w-side")}>
			<div className="flex gap-4">
				<input type="checkbox" id="fulltime-filter" onChange={filterOnChange} />
				<label htmlFor="fulltime-filter">Full Time</label>
			</div>
			<h2 className="mt-4 text-gray-400 font-bold">LOCATION</h2>
			<div
				className={clsx(
					"relative flex p-1 my-2 h-12",
					"bg-white rounded-md shadow-md"
				)}
			>
				<GoGlobe className="absolute left-4 top-4 text-gray-400" />
				<input
					className={clsx("px-12 py-2")}
					placeholder="Search..."
					onBlur={(e) => locationSearch(e.target.value)}
				/>
			</div>
			<ul className="flex flex-col gap-4 mt-8">
				{samplePlaces.map((place) => (
					<li className="flex gap-4" key={place}>
						<input
							type="radio"
							name="location"
							id={`location-${place}`}
							onChange={() => locationSearch(place)}
						/>
						<label htmlFor={`location-${place}`}>{place}</label>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default SearchSide;

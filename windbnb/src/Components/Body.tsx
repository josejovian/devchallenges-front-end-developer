import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { BodyProps } from "../App";
import Stay, { StayInterface, stays } from "./Stays";

const Body: React.FC<BodyProps> = ({ location, guest }) => {
	const [display, setDisplay] = useState(stays);

	useEffect(() => {
		setDisplay(
			stays.filter((stay: StayInterface) => {
				const locationConstraint: boolean =
					location.city === "" ||
					(stay.city === location.city &&
						stay.country === location.country);
				const guestConstraint: boolean =
					stay.maxGuests >= guest.adult + guest.child;
				return locationConstraint && guestConstraint;
			})
		);
	}, [location, guest]);

	return (
		<>
			<main
				id="body"
				className={clsx(
					"mt-40 lg:mt-32 px-responsive",
					"grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16"
				)}
			>
				{display.map((stay: StayInterface) => (
					<Stay key={stay.title} {...stay} />
				))}
			</main>
			{display.length === 0 && (
				<div className="flex justify-center mt-24 text-sm text-gray-600">
					<p>There are no stays that match your settings.</p>
				</div>
			)}
		</>
	);
};

export default Body;

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { MdLocationPin, MdSearch } from "react-icons/md";
import { Guest, Location, NavProps } from "../App";

interface GuestType {
	id: number;
	name: string;
	desc: string;
}

interface Filter {
	location: Location;
	guest: Guest;
}

const Nav: React.FC<NavProps> = ({
	location,
	setLocation,
	guest,
	setGuest,
}) => {
	const [top, setTop] = useState(true);
	const [open, setOpen] = useState(false);
	const [filter, setFilter] = useState({
		location: {
			city: "",
			country: "",
		},
		guest: {
			adult: 0,
			child: 0,
		},
	});

	const locationText =
		filter.location.city !== ""
			? `${filter.location.city}, ${filter.location.country}`
			: "";
	const guestText =
		filter.guest.adult + filter.guest.child > 0
			? `${filter.guest.adult} adults, ${filter.guest.child} children`
			: "";

	const guestTypes: GuestType[] = [
		{
			id: 0,
			name: "Adult",
			desc: "Ages 13 or above",
		},
		{
			id: 1,
			name: "Child",
			desc: "Ages 2 - 12",
		},
	];

	const stockLocations: Location[] = [
		{
			city: "Helsinki",
			country: "Finland",
		},
		{
			city: "Turku",
			country: "Finland",
		},
		{
			city: "Oulu",
			country: "Finland",
		},
		{
			city: "Vaasa",
			country: "Finland",
		},
	];

	useEffect(() => {
		function updateTop(): void {
			const y: number = window?.scrollY;
			setTop(y === 0);
		}

		window?.addEventListener("scroll", updateTop);

		return () => {
			window?.removeEventListener("scroll", updateTop);
		};
	}, []);

	return (
		<>
			<nav
				className={clsx(
					"fixed top-0 w-screen",
					"flex justify-between px-32 py-8",
					"bg-white z-10",
					!top && "border-b-2 border-gray-200"
				)}
			>
				<img
					className="h-min self-center"
					src="./logo.png"
					alt="logo"
				/>
				<section
					className="flex shadow-md rounded-lg bg-white"
					onClick={() => setOpen(!open)}
				>
					<input
						type="text"
						value={locationText}
						placeholder="Choose Location"
						readOnly
					/>
					<input
						type="text"
						placeholder="Add Guests"
						value={guestText}
						readOnly
					/>
					<button className="p-4">
						<MdSearch className="text-red-600" />
					</button>
				</section>
			</nav>
			{open && (
				<>
					<section
						className={clsx(
							"fixed top-0 w-screen h-auto px-32 py-16",
							"bg-white z-30"
						)}
					>
						<section
							id="drawer"
							className={clsx("flex shadow-md rounded-lg")}
						>
							<section className="relative flex-grow basis-5/12">
								<label>LOCATION</label>
								<input
									className="w-full pt-8 pb-2"
									type="text"
									defaultValue="Helnski, Finland"
									placeholder="Choose Location"
									value={locationText}
									onClick={() => {
										setFilter((prevFilter: Filter) => ({
											...prevFilter,
											location: {
												city: "",
												country: "",
											},
										}));
									}}
									readOnly
								/>
							</section>
							<section className="relative flex-grow basis-5/12">
								<label>GUESTS</label>
								<input
									className="w-full pt-8 pb-2"
									type="text"
									placeholder="Add Guests"
									value={guestText}
									onClick={() => {
										setFilter((prevFilter: Filter) => ({
											...prevFilter,
											guest: {
												adult: 0,
												child: 0,
											},
										}));
									}}
									readOnly
								/>
							</section>
							<button
								className={clsx(
									"p-4 flex items-center gap-4 w-32 basis-1/12",
									"bg-red-600 text-white rounded-lg"
								)}
								onClick={() => {
									const currentLocation = filter.location,
										currentGuest = filter.guest;
									setLocation(currentLocation);
									setGuest(currentGuest);
								}}
							>
								<MdSearch />
								<span>Search</span>
							</button>
						</section>
						<section className={"flex mt-3"}>
							<div className="flex-grow basis-5/12">
								{stockLocations.map((loc) => (
									<div
										className={clsx(
											"flex items-center w-fit gap-2",
											"py-2 ml-3 mr-0 text-gray-700",
											"cursor-pointer"
										)}
										onClick={() => {
											setFilter((prevFilter: Filter) => ({
												...prevFilter,
												location: loc,
											}));
										}}
									>
										<MdLocationPin />
										<span>
											{loc.city}, {loc.country}
										</span>
									</div>
								))}
							</div>
							<div className="flex flex-col flex-grow basis-5/12 gap-4 ml-8">
								{guestTypes.map((currentGuest: GuestType) => {
									const name =
										currentGuest.name.toLowerCase();

									const invalidType =
										name !== "child" && name !== "adult";

									function updateValue(sign: number): void {
										if (invalidType) return;

										setFilter((prevFilter: Filter) => {
											let newValue: number =
												prevFilter.guest[name] + sign;

											if (newValue < 0) newValue = 0;

											return {
												...prevFilter,
												guest: {
													...prevFilter.guest,
													[name]: newValue,
												},
											};
										});
									}

									return (
										<div className="flex flex-col">
											<span className="font-bold">
												{currentGuest.name}
											</span>
											<span className="text-gray-600">
												{currentGuest.desc}
											</span>
											<div className="flex gap-2 mt-2 quantity-control">
												<button
													onClick={() =>
														updateValue(-1)
													}
												>
													&minus;
												</button>
												<span>
													{!invalidType &&
														filter.guest[name]}
												</span>
												<button
													onClick={() =>
														updateValue(1)
													}
												>
													&#43;
												</button>
											</div>
										</div>
									);
								})}
							</div>
							<div className="w-32 basis-1/12"></div>
						</section>
					</section>
					<div
						className={clsx(
							"fixed top-0 w-screen h-screen z-20",
							"bg-black opacity-40"
						)}
						onClick={() => {
							setFilter({
								location: location,
								guest: guest,
							});
							setOpen(false);
						}}
					></div>
				</>
			)}
		</>
	);
};

export default Nav;

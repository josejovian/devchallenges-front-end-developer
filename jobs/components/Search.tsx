import clsx from "clsx";
import React from "react";
import Button from "./Button";
import { BsBriefcase } from "react-icons/bs";
import { SearchProps } from "../types/SearchProps";

const Search: React.FC<SearchProps> = ({ freeze, query, setQuery }) => {
	function applyQuery() {
		const search = document.getElementById("search") as HTMLInputElement;
		if (search && query !== search.value) setQuery(search.value);
	}

	return (
		<div
			className={clsx(
				"search search-sm xl:search-lg",
				"relative w-full h-full p-4",
				"flex justify-center items-center mb-16",
				"rounded-lg"
			)}
		>
			<div
				className={clsx(
					"relative flex min-w-0 p-1 h-12",
					"bg-white rounded-md"
				)}
			>
				<BsBriefcase className="absolute left-4 top-4 text-gray-400" />
				<input
					id="search"
					className={clsx("px-12 py-2 min-w-0")}
					placeholder="Search..."
				/>
				<Button onClick={() => applyQuery()} disabled={freeze}>
					Search
				</Button>
			</div>
		</div>
	);
};

export default Search;

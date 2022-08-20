import React from "react";

export interface SearchProps {
	freeze: boolean;
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
}

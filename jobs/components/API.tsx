import axios, { AxiosInstance } from "axios";

import { Job } from "../types/Job";

export const api: AxiosInstance = axios.create({
	baseURL: "https://devchallenges-front-end-developer-git-main-josejovian.vercel.app/api",
});

export async function getListing(
	query: string = "",
	location: string = ""
): Promise<Partial<Job>[]> {
	if (query === "") return [];

	let listing : Job[] = [];

	const url = `/listing?query=${query}&location=${location}`;
	try {
		await api.get(url).then((res) => {
			listing = res.data.data;
		});
	} catch(e) {}

	return listing;
}

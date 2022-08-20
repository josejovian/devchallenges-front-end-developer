// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
	baseURL: "https://serpapi.com",
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	let {location, query} = req.query;

	let locationString = "", answer : any[] = [];
	if(location !== "") locationString = `&location=${location}`;

	if(query === "")
		return;

	const url = `/search.json?engine=google_jobs&q=${query}${locationString}&api_key=87117ce1399019a9338be5cfb05f829f8abb4046bac2a1a7c13671e83d527d53`;
	await api.get(url).then((resp) => {
		answer = resp.data.jobs_results;
	}).catch(e => {console.log(e)});
	
	res.status(200).json({
		test: "OK",
		data: answer
	});
}

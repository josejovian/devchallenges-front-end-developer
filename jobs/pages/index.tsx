import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Jobs from "../components/SearchJob/Jobs";
import Search from "../components/Search";
import SearchSide from "../components/SearchJob/Side";
import styles from "../styles/Home.module.css";
import ViewSide from "../components/ViewJob/Side";
import JobDetail from "../components/ViewJob/JobDetail";
import { getListing } from "../components/API";
import { Job } from "../types/Job";

export const emptyJob: Partial<Job> = {},
	emptyJobs: Partial<Job>[] = [];

// https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
function isEmpty(obj: any) {
	return (
		obj && // 👈 null and undefined check
		Object.keys(obj).length === 0 &&
		Object.getPrototypeOf(obj) === Object.prototype
	);
}

const Home: NextPage = () => {
	const [location, setLocation] = useState("");
	const [query, setQuery] = useState("");
	const [jobs, setJobs] = useState(emptyJobs);
	const [focus, setFocus] = useState(emptyJob);
	const [fullTimeOnly, setFullTimeOnly] = useState(false);
	const [freeze, setFreeze] = useState(false);

	async function getListingByQuery() {
		await getListing(query, location)
			.then((res) => {
				setJobs(res);
				setTimeout(() => {
					setFreeze(false);
				}, 1000);
			})
			.catch((e) => {});
	}

	useEffect(() => {
		if (!freeze) {
			setFreeze(true);
			getListingByQuery();
		}
	}, [query]);

	return (
		<div>
			{!isEmpty(focus) ? (
				<div className="flex flex-col xl:flex-row gap-8">
					<ViewSide focus={focus} setFocus={setFocus} />
					<JobDetail focus={focus} />
				</div>
			) : (
				<>
					<Search freeze={freeze} query={query} setQuery={setQuery} />
					<div className="flex flex-col xl:flex-row gap-8">
						<SearchSide
							setFocus={setFocus}
							location={location}
							setLocation={setLocation}
							setFullTimeOnly={setFullTimeOnly}
						/>
						<Jobs
							jobs={jobs}
							setFocus={setFocus}
							fullTimeOnly={fullTimeOnly}
						/>
					</div>
				</>
			)}
			<footer
				id="footer"
				className="mt-16 px-responsive py-8 text-center"
			>
				created by{" "}
				<a href="https://github.com/josejovian">josejovian</a> -{" "}
				<a href="https://devchallenges.io/">devChallenges.io</a>
			</footer>
		</div>
	);
};

export default Home;

import clsx from "clsx";
import React from "react";
import Button from "../Button";
import { BsBriefcase } from "react-icons/bs";
import { GoClock, GoGlobe } from "react-icons/go";
import { JobProps } from "../../types/JobProps";

const JobDetail: React.FC<JobProps> = ({ focus }) => {
	return (
		<main className={clsx("flex flex-col w-full xl:w-exc-side")}>
			<div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
				<h1 className="text-2xl text-bold">{focus.title}</h1>
				<span className="job-schedule my-2 lg:my-0">
					<>{focus.detected_extensions.schedule_type}</>
				</span>
			</div>
			{focus.detected_extensions.posted_at && (
				<span className="job-detail">
					<GoClock />
					{focus.detected_extensions.posted_at}
				</span>
			)}
			<div className="flex my-8 gap-4">
				<div className="job-thumbnail">
					<img src={focus.thumbnail} alt={focus.company_name} />
				</div>
				<div className="flex flex-col w-full">
					<span className="text-lg font-bold">
						{focus.company_name}
					</span>
					<span className="job-detail">
						<GoGlobe />
						{focus.location}
					</span>
				</div>
			</div>
			<pre className="w-full">{focus.description}</pre>
		</main>
	);
};

export default JobDetail;

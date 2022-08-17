import clsx from "clsx";
import React from "react";
import Stay, { StayInterface, stays } from "./Stays";

const Footer: React.FC = () => {
	return (
		<footer id="footer" className={clsx("mt-16 px-32 py-8 text-center")}>
			created by <a href="https://github.com/josejovian">josejovian</a> - <a href="https://devchallenges.io/">devChallenges.io</a>
		</footer>
	);
};

export default Footer;

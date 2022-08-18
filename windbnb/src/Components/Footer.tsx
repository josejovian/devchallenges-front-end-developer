import clsx from "clsx";
import React from "react";

const Footer: React.FC = () => {
	return (
		<footer id="footer" className={clsx("mt-16 px-responsive py-8 text-center")}>
			created by <a href="https://github.com/josejovian">josejovian</a> - <a href="https://devchallenges.io/">devChallenges.io</a>
		</footer>
	);
};

export default Footer;

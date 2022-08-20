import clsx from "clsx";
import React from "react";
import Button from "../Button";
import { BsBriefcase } from "react-icons/bs";
import { GoClock, GoGlobe } from "react-icons/go";
import { JobsProps } from "../../types/JobsProps";
const sampleJobs = [
	{
		title: "Lead Full Stack Developer",
		company_name: "PT WIR Asia Tbk",
		location: "Jakarta, Indonesia",
		via: "via Linkedin",
		description:
			"Responsibilities\n• Compile and analyze data, processes, and code to solve problems and identify areas for improvement\n• Collaborating with other team members to establish objectives and design more functional, cohesive codes to enhance the user experience\n• Developing ideas for new programs, products, or features by monitoring industry developments and trends\n• Recording data and reporting it to proper parties, such as clients or team leader\n• Participate in continuous education and training to stay abreast of best practices, learn new programming languages, and better help other team members\n• Taking lead on projects, as needed\n\nRequirements\n• Bachelor’s degree in computer programming, computer science, or on any related fields\n• Excellent project and time management skills\n• Ability to work independently or with a group\n• Proficient of certain languages, such as NodeJS, TypeScript and PHP, is necessary\n• Strong knowledge and experience in RESTful API\n• Proficient of ReactJS and... Laravel, React Native and Flutter\n• Proficient of certain operating system, such as UNIX based OS, may be required\n• Fluency/understanding of certain databases technology, such as MySQL & MongoDB\n• Strong understanding of application development cycle, and programming techniques and tools\n• Strong problem-solving skill and attitude, and excellent troubleshooting\n• Strong verbal and written communication skills\n• Knowledge on repository technology\n• Preferred to have knowledge in WebRTC\n• Excellent written and verbal communication skills\n• Excellent teamwork skills\n• Collaborative team spirit",
		thumbnail:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYMrZ68658cX4diOtOvh4ipw6LCdf5zolVbkN&s=0",
		extensions: ["2 days ago", "Contractor"],
		detected_extensions: {
			posted_at: "2 days ago",
			schedule_type: "Contractor",
		},
		job_id: "eyJqb2JfdGl0bGUiOiJMZWFkIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyIiwiaHRpZG9jaWQiOiIxUUFmUHVobC0xMEFBQUFBQUFBQUFBPT0iLCJmYyI6IkVvd0NDc3dCUVVGMFZteGlSR1p4WmtOSExXaDFUalZFVWxCMlIxOWhVVTR0UjNFM1FYaFlUR1JmVTJ0algxUkNTREZPYWw5WGEwNVphWEp6WlVScGVuZFRka0ZoYkdWRUxVMTJNV2QwVldOM1h5MXpNMFkzWTNkVlkyeDNWRzV4T0ZGdE1rZFhUMnRQTUZVeE1HTkJOM1Z5VjJkbFppMTBXVWRPUlRkVmRXb3hhbHBXTm5KR1dHOW5kMjVSU1dRelpERmhVM1l5V0VjeVVIQnBZa3M0TWxwSldGUnlNbVpsV0dScFJESkVTbU5xVkRsaGJIZHdMV2wyVHpoT1RYRnhWakpSZFVGZmRTMVZTR0V0UTNwcFZ6ZGxFaGR2WVV4ZldYSnRURXMzZFdkcFRFMVFjazFYZDNGQk5Cb2lRVVJWZVVWSFpsSmZNbE4zYlc0emEyVk5kMEkxZERSRVgwZG1SRlpXWTAxNFFRIiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfMSIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiIubkZnMmVie2ZvbnQtd2VpZ2h0OjUwMH0uQmk2RGRje2ZvbnQtd2VpZ2h0OjUwMH1BcHBseSBvbiBMaW5rZWRpbiIsImxpbmsiOiJodHRwczovL2lkLmxpbmtlZGluLmNvbS9qb2JzL3ZpZXcvbGVhZC1mdWxsLXN0YWNrLWRldmVsb3Blci1hdC1wdC13aXItYXNpYS10YmstMzIyNTYwNDU3ND91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
	},
	{
		title: "Full Stack Developer",
		company_name: "Pepper Services Indonesia",
		location: "Jakarta, Indonesia",
		via: "via Glints",
		description:
			"The Role\n\nPepper Advantage is investing in the build of a loan servicing platform with the initial view of deploying internally within the Pepper Group but with a view to commercialise the application and sell to other organisations. We are looking for a Full Stack Developer to help build the platform along with a team of other developers.\n\nYou will initially be focused on building a loan servicing platform for use within the Pepper Group of companies but with a view to sell the application as a commercial product. You will be working within a team of developers reporting to a senior developer within an Agile environment.\n\nWe are looking for a can do, high achieving developer to bring their development skills to deliver a world class product. You will have experience of building cloud-based microservice container-based web and mobile applications that can scale to meet the demands of the client. If you have a genuine passion to create great enterprise products, for helping businesses... achieve the full potential of their data, and you believe you have what it takes, please apply.\n\nAn ideal candidate will have:\n• Bachelor’s, in Computer Science or similar\n• Commercial .NET development experience in one or two full time positions for a minimum of 4 years\n• Experience of working within an Agile team\n• Extensive knowledge in C#, Angular 9+, NET Core, SQL Server, HTML, CSS, JSON and JavaScript, microservices, containerisation\n• A passion for cloud technology, a logical mind-set, and a learning attitude\n• Strong abilities in Google Cloud, Azure (or other cloud technologies)\n• Extensive experience in continuous integration and deployment using tools such as Azure Dev Ops\n• Solution design experience, being able to take requirements and define and design the right solution\n• Experience building SaaS based applications for commercial resale\n\nSoft Skills\n• Self-Directed and able to manage and prioritise workload.\n• Ability to come up with solutions to complex problems\n• Strong team collaboration and experience working with remote teams.\n• Excellent communication and presentation skills.\n• Ability to handle high pressure and fast paced situations.\n• Ability to quickly and positively adapt to change",
		thumbnail:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0KAHQLJR7KM_g64AEmjZu_AZDoKOVjqLpDeRnF7O6ih7RUHxSff3nf0&s",
		extensions: ["3 days ago", "Full-time"],
		detected_extensions: {
			posted_at: "3 days ago",
			schedule_type: "Full-time",
		},
		job_id: "eyJqb2JfdGl0bGUiOiJGdWxsIFN0YWNrIERldmVsb3BlciIsImh0aWRvY2lkIjoiR213cGdXbktHRlFBQUFBQUFBQUFBQT09IiwiZmMiOiJFdmNCQ3JjQlFVRjBWbXhpUWxONGNFMWxNRFJJWmpGYWEzTTVNRGxYU3pWeE1UWmZSWEUwWkMxblQxZFFkMkpNWlhkd05uZG9YMFpyWW5OeE4wWmFOMnd4YkdoblpWaFJlV2xRYkhoSlpGbzVZa05mZFVrdFdVVnVjWGcwU1VkRGNXWmFXbEZQZERsS2QyTjJNbmxvUVUxRFpHb3hXSEY0YmxJM2NUTlFka3RqUmxodFVsWmhRVlpaWkdwS1YzUmpVbUZNWVUxQ1ZDMU1hRTF6UTFoa1JXaFdUMVpqTURkNlZXTmZXVzF5TURkU0xWRkxRMUZoZVV4a1MwUjNFaGR2WVV4ZldYSnRURXMzZFdkcFRFMVFjazFYZDNGQk5Cb2lRVVJWZVVWSFkzQkNNbFJDVDB0MGVVSjFVekkxVUdaQmRuVm9ZbFJtVmxWd1FRIiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfMyIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBkaXJlY3RseSBvbiBHbGludHMiLCJsaW5rIjoiaHR0cHM6Ly9nbGludHMuY29tL29wcG9ydHVuaXRpZXMvam9icy9mdWxsLXN0YWNrLWRldmVsb3Blci8xNjlhYzY0OC01YTgyLTQ5ODUtYmUwZi1kZjI3MWIyNGVhMjg/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==",
	},
	{
		title: "Full Stack Developer",
		company_name: "Trimegah",
		location: "Jakarta, Indonesia",
		via: "via Triplebyte",
		description: "Handle both backend and / or frontend development",
		thumbnail:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_j3ynG1P_eO8e5C7_eof6PBWW5zjMaBdlco3oyWo&s",
		extensions: ["Full-time", "No degree mentioned"],
		detected_extensions: {
			schedule_type: "Full-time",
		},
		job_id: "eyJqb2JfdGl0bGUiOiJGdWxsIFN0YWNrIERldmVsb3BlciIsImh0aWRvY2lkIjoiT0dKUWhnMmpMd01BQUFBQUFBQUFBQT09IiwiZmMiOiJFdmNCQ3JjQlFVRjBWbXhpUkRka2IyNUxNakZJZURGMFRrSkZWRlJ2ZUdSSFQyTmZZV3hYT1cxVGVXeExNMHBZUW1OelpqbFlaRWRCVVhjeE5HVnJkRXcyTXpaV1JXWTVUMnBaVW1VeVFuSlFRMXBwTTI1S2JVZDRWelpqWlZoSFIwMU1jR1ZIY1d4SlRVcFVOMVpvYmtkVFVUZEJhRk5wTkY5d1NWUjFNVVE0WDFONFVYTjBSMjFLWVMxd2IyVkVkVXBNTVdoV1VFNUZWbVJvWVZkT1lrUmpMV1JFTUZReWNtWXdlR3BMVG0xemJFWkJRbVJ0UTJka1RFeFpFaGR2WVV4ZldYSnRURXMzZFdkcFRFMVFjazFYZDNGQk5Cb2lRVVJWZVVWSFpubzJRV1V3YjJFMGNFaEZjVkJYVjBoWFh6QlBVM05QUjBsVGR3IiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfNCIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBvbiBUcmlwbGVieXRlIiwibGluayI6Imh0dHBzOi8vdHJpcGxlYnl0ZS5jb20vY29tcGFueS9wdWJsaWMvdHJpbWVnYWgvTDNtWE1rby9mdWxsLXN0YWNrLWRldmVsb3Blcj91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
	},
	{
		title: "Full Stack Developer",
		company_name: "MNC",
		location: "Jakarta, Indonesia",
		via: "via Glassdoor",
		description:
			"Requirements\n• Candidate must possess at least a Bachelor's Degree, Professional Degree in Computer Science/Information Technology, or equivalent.\n• Using react/typescript such as vue, angular for frontend\n• Using magento for backend\n\nJob Information\n\nEducation Level : S1\n\nJob Level : Officer\n\nJob Function : Information Technology (I.T.)\n\nJob Type : Contract\n\nJob Location : Jakarta\n\nWork Experience : 3 Year\n\nShare",
		thumbnail:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC50tlVzosm3p4IyPpVZWU06U43_A1XF9XlK4Z&s=0",
		extensions: ["Contractor"],
		detected_extensions: {
			schedule_type: "Contractor",
		},
		job_id: "eyJqb2JfdGl0bGUiOiJGdWxsIFN0YWNrIERldmVsb3BlciIsImh0aWRvY2lkIjoiV21BMzVJeGd5TmNBQUFBQUFBQUFBQT09IiwiZmMiOiJFdmNCQ3JjQlFVRjBWbXhpUkhGalpGRllaMVp5ZDI5ek5VUTRVbTVCYVdSRlQzQTVhbmR1YUVoNU9HZHJTV3Q0YTBKa1dYbG9iMjVmV0cxa1dHeGFZbGhqVlhkME1UZFVhbGxqYlY5ZmNqWnlVRjkyUVdvNE0xQnlWbFJJTTIxNFRXUjNhRVJ5V1ZnNVgzRjBTMUF0UmpWUFprTlhiUzFrZDJoNlpsWndPRzg1VERCaGNsZHZhR1p6WW13eGJYSTJjbEZzYzFCMmVGUkJkWGxJWm5Sa2RWVTNXVlJUYzFoblZqTnJlSGRwTW1rM1pEQnNXbWRtTldsRFRFNWpFaGR2WVV4ZldYSnRURXMzZFdkcFRFMVFjazFYZDNGQk5Cb2lRVVJWZVVWSFpFMXhWRE5pY0Uxdk1UaHFORTVZZURaRk0xcFhTR3hPYm5sQlp3IiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfNiIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBvbiBHbGFzc2Rvb3IiLCJsaW5rIjoiaHR0cHM6Ly93d3cuZ2xhc3Nkb29yLmNvbS9qb2ItbGlzdGluZy9mdWxsLXN0YWNrLWRldmVsb3Blci1tbmMtSlZfSUMyNzA5ODcyX0tPMCwyMF9LRTIxLDI0Lmh0bT9qbD0xMDA3Mzc3NDExOTAyXHUwMDI2dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==",
	},
	{
		title: "Full Stack Developer",
		company_name: "Pt Bionic Teknologi Indonesia",
		location: "Jakarta, Indonesia",
		via: "via Glints",
		description:
			"• Have a good understanding in frontend app and Vue JS\n• Have a good understanding in backend app and REST API server development,\n• Have a good knowledge in Java Spring Boot, and MVC concept,\n• Good understanding in java web application deployment and configuration,\n• Good understanding in database query, experience in schema design, query optimization is a great plus,\n• Have an experience in infrastructure like AWS or Azure and Docker or Kubernetes is a plus.",
		thumbnail:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSLjuIdblmPM9u8iisukpdz3CvyNQVpyOBW6CUfw&s",
		extensions: ["7 days ago", "Full-time", "No degree mentioned"],
		detected_extensions: {
			posted_at: "7 days ago",
			schedule_type: "Full-time",
		},
		job_id: "eyJqb2JfdGl0bGUiOiJGdWxsIFN0YWNrIERldmVsb3BlciIsImh0aWRvY2lkIjoibVo4R09oZnU0aGdBQUFBQUFBQUFBQT09IiwiZmMiOiJFb3dDQ3N3QlFVRjBWbXhpUVY4eFYwNU9kMGxVYTNCcldpMWxVSE5pYUdseGFYQjBlSE5tTjNGa2VrbGxkWEo0Tld4RVZYWjNUMHd6Y21GNVNrNUtha2wwTkdGNmNuUmljM1ZpYTE4MFpsaDBORzFRZUVwUFdVVmpaMVpKU2xkMGVrRnZhRGhuVEU5WlpEWmxZVGhrVTJkTVIwZFlkVVV6UzI1RE1tNWlZMk5YZVROcFVtbEpZVEJVYUZKUExXTldWRFZ6Y0UxQlFVeGlXR3hyVldJNVF6WllMVGx3UlhWNWJUVTVkV1JUVDBOSlExOXdZVE14Y1hSRWJYVXpNMVZHYzJsNlgwNHdVVTB5TmpSa1RrSTNNRTR3RWhkdllVeGZXWEp0VEVzM2RXZHBURTFRY2sxWGQzRkJOQm9pUVVSVmVVVkhaV0pxZUVKSllUaGFhaTFKTjNaVmEyMXZOakkzUlZSTVNYQlVadyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzgiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgZGlyZWN0bHkgb24gR2xpbnRzIiwibGluayI6Imh0dHBzOi8vZ2xpbnRzLmNvbS9pZC9lbi9vcHBvcnR1bml0aWVzL2pvYnMvZnVsbC1zdGFjay1kZXZlbG9wZXIvNjhkNTlmMDMtZGFhMi00MGJmLWE2ZTAtNTZmYTdjYTI2YmZmP3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0=",
	},
	{
		title: "Software Engineer - Web Full Stack",
		company_name: "Moka",
		location: "Jakarta, Indonesia",
		via: "via AngelList Talent",
		description:
			"We want to make POS accessible to everyone, and empower local businesses to grow. If you want to be part of a world-class team with a mission to disrupt technology in Indonesia, come join us.\n\nYou will:\n\n- Write code in Ruby on Rails, JavaScript, HTML and CSS.\n\n- Implement new features and optimize existing ones from front-end to back-end.\n\n- Work closely with, and incorporate feedback from product management and interaction designers.\n\n- Rapidly fix bugs and solve problems.\n\n- Pro-actively look for ways to make Moka better.\n\nYou have:\n\n- Bachelor degree in Computer Science or equivalent experience.\n\n- Minimum of 2 years of industry experience in engineering.\n\n- Exceptional proficiency using HTML/CSS/Javascript, Ruby/Ruby on Rails. Experience with React is a plus.\n\n- Expertise in relational databases and schema design.\n\n- Evidence of exposure to architectural patterns of a large, high-scale web application (e.g., well-designed APIs, high volume data pipelines, efficient... algorithms).\n\n- Exceptional ability to work anywhere in the technical stack.\n\n- Disciplined approach to writing tests and quality assurance.\n\nMoka focuses on Small and Medium Businesses, Mobile Payments, Point of Sale, Payment Systems, and Fin Tech. Their company has offices in Special Capital Region of Jakarta and Jakarta. They have a large team that's between 501-1000 employees. To date, Moka has raised $29.9M of funding; their latest round was closed on September 2018.\n\nYou can view their website at http://mokapos.com or find them on Twitter, Facebook, and LinkedIn",
		thumbnail:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibrDseqCxikYhF24zZV8PlQhOes5TxSJIqddAV7A&s",
		extensions: ["Full-time"],
		detected_extensions: {
			schedule_type: "Full-time",
		},
		job_id: "eyJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciAtIFdlYiBGdWxsIFN0YWNrIiwiaHRpZG9jaWQiOiJhUS1fVXNjRFUtVUFBQUFBQUFBQUFBPT0iLCJmYyI6IkV2Y0JDcmNCUVVGMFZteGlRblpyWlVacFFXcDFkRFpsZEZKTVRWWlVWamRUWm01clVYSTBPV3g2Y0ZsbGVYVk9UVWMyUW10eE5YSkxSbUk1V1dGd2JrZGphMmRJWDFCamEzaHhVM0ZZT0VWYWRuRmFiVmxmV0MwMVdFTlZOek52TFVkSk4zWlpibVJLWHpVMmMwRjJhRFJGUWtWR05sTmtXRU4zUzI1SlUzVnpTM0F5UWtKak9YWkliMnhIYkdKRWVGOXFkbGxSWlVoRmMxbGthbFpIWHpGMWRIbGhjbXB2ZDFrNFdIaFJZekJvV1hsMFlYRktlR2xsVTNoTkVoZHZZVXhmV1hKdFRFczNkV2RwVEUxUWNrMVhkM0ZCTkJvaVFVUlZlVVZIWmpBelJYUllUMk0xVlRKaWJreG5VbVpyZDB3M2NEUlBNbUV5WnciLCJmY3YiOiIzIiwiZmNfaWQiOiJmY185IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IGRpcmVjdGx5IG9uIEFuZ2VsTGlzdCBUYWxlbnQiLCJsaW5rIjoiaHR0cHM6Ly9hbmdlbC5jby9jb21wYW55L21va2Fwb3Mvam9icy84MDEwMi1zb2Z0d2FyZS1lbmdpbmVlci13ZWItZnVsbC1zdGFjaz91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
	},
	{
		title: "Full Stack Engineer",
		company_name: "Danacita",
		location: "Jakarta, Indonesia",
		via: "via Linkedin",
		description:
			"Company ErudiFi is a technology company on a mission to build a better future for youths in Southeast Asia. We are passionate about enabling access to equal opportunities through education. Our platforms include Bukas (https://bukas.ph) in the Philippines and Danacita (https://danacita.co.id) in Indonesia.\n\nJob Description:\n• Design and implement features according to project requirements.\n• Provide support in the development, deployment, and maintenance phases of the project.\n• Write readable and maintainable backend and frontend code.\n• Provide support in the development, delivery, and maintenance phases of the software.\n• Participate in R&D in the areas of development best practices, process, technology, etc.\n• “Sharpen your saw” - Improve your craft as a programmer through practice\n• Consume and synthesize software engineering-related content to improve craft.\n\nQualifications:\n• 4+ years working experience as a Software Engineer. Experience with building backend APIs as well as... frontend interfaces is ideal.\n• Proven development experience with Python, Django, ReactJS (or with a similar stack).\n• Experience with development, process, and technology.\n• Have participated in cross-functional Agile teams.\n• Able to build components on your own with minimal guidance. Something with significant engineering or product complexity to resolve — through the phases of design, development, delivery, and maintenance.\n• Able to express your thoughts well through speaking and writing",
		thumbnail:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPs8hmPAB40gLXB1uDOOpWGUu3YKyd16xUQlSydnI&s",
		extensions: ["11 hours ago", "Full-time", "No degree mentioned"],
		detected_extensions: {
			posted_at: "11 hours ago",
			schedule_type: "Full-time",
		},
		job_id: "eyJqb2JfdGl0bGUiOiJGdWxsIFN0YWNrIEVuZ2luZWVyIiwiaHRpZG9jaWQiOiJxSnJoM2RGM2VlZ0FBQUFBQUFBQUFBPT0iLCJmYyI6IkV1SUJDcUlCUVVGMFZteGlSRWxRUmpWUWJtdE9PWEIwVjFoeVlrMTJObTlQWVdGNVVteDVaWGgxT1dkTWVrbDBMV2hwVkZGUE5UTjNPRFJwZWsxM2NtZ3dhbVUwU0V0dFlXMW9ZMHB2Wm5oQmQzbG5kSFpKVWxWa2FGcFVRbUo2VmxRelV6UkhhamhrYlhCdFVWOTVXV2RzVjBwdloyaDJRVGRZTjJsRVIwbHpOalpRUlZFMVlsbENTR3hxTVdoR1ZYaEZabDlwY1d3eWFEVnpSbVpTWjFSa1dXeEZlSE4zRWhkdllVeGZXWEp0VEVzM2RXZHBURTFRY2sxWGQzRkJOQm9pUVVSVmVVVkhaV3BITW1ObmFsZGxabEl5TFdsUmEwUnpaVEkxVURKWmMwaFBVUSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzEwIiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIExpbmtlZGluIiwibGluayI6Imh0dHBzOi8vaWQubGlua2VkaW4uY29tL2pvYnMvdmlldy9mdWxsLXN0YWNrLWVuZ2luZWVyLWF0LWRhbmFjaXRhLTMyMjE0NzIwMDk/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==",
	},
	{
		title: "Full Stack Developer",
		company_name: "Id/x Partners",
		location: "Jakarta, Indonesia",
		via: "via Glints",
		description:
			"id/x partners provide consulting services that specializes in utilizing data mining solutions combined with an integrated risk management and marketing discipline to help clients optimize the portfolio profitability and business process. We want you to be part of our team, in which you will play a major role helping us to fundamentally aspect of our solutions. As a you needed for this position, you will have the opportunity to build effective and efficient process for our software solutions.\n\nYou will be responsibilities (but not limited to)\n• Work with developers to design algorithms and flowcharts\n• Produce clean, efficient code based on specifications\n• Integrate software components and third-party programs\n• Verify and deploy programs and systems\n• Troubleshoot, debug and upgrade existing software\n• Gather and evaluate user feedback\n• Responsible for creation of all coded Front-end deliverables\n• Responsible for architecting and defining the Front-end framework to solve complex... designs and interactions that reflect the creative and art direction provide\n• Recommend and execute improvements\n• Create technical documentation for reference and reporting\n• Participates in developing supporting proposal materials for projects\n• Having fundamental understanding of the creative aesthetic to implement technically across a variety of platforms and frameworks\n• Participates in scoping and planning work\n\nRequirements\n• Proven experience as a Software Developer, Software Engineer, Front End or similar role\n• Familiarity with Agile development methodologies\n• Experience with software design and development\n• Knowledge of coding languages (e.g. .Net, JavaScript, C# ) and frameworks/systems (e.g. AngularJS, Git)\n• Ability to learn new languages and technologies\n• Excellent communication skills\n• Resourcefulness and troubleshooting aptitude\n• Attention to detail\n• BSc/BA in Computer Science, Engineering or Bachelor's/College Degree a related field\n• Candidate must possess at least e in any field.\n\nWe will give you chance to grow, and if you demonstrate high performance during 1-year contract based, you will be promoted to permanent employee and entitled annual performance bonus for the next year.\n\nAre you up for the challenge?\n\nSIGN-UP BONUS: Valid for candidates who joined Us before 15 May 2022",
		thumbnail:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGi-nKHtagWoKm5RywC2RZv7jVd7bM03a-Bwcu-O8&s",
		extensions: ["Full-time"],
		detected_extensions: {
			schedule_type: "Full-time",
		},
		job_id: "eyJqb2JfdGl0bGUiOiJGdWxsIFN0YWNrIERldmVsb3BlciIsImh0aWRvY2lkIjoibXkzMEU3WUFsSnNBQUFBQUFBQUFBQT09IiwiZmMiOiJFdmNCQ3JjQlFVRjBWbXhpUVhRMk1WOWFhbFp3UjBzME4xVnBURTFxTkU1UmJWRjBUR05vYmpBelFsWndiRVZuVFZObFlUWXlSR1F3UzNKQk9UWXhXazgxZEVkdFZXaFJiemhRU0hGWmIxTnJRMmhLWlRsWmNWcHFaQzAwZUc5b1ltMW1kbmREWmpZMU1IWmhUSE4wTXpOb2RVTlpYM0JoYmpkbFVqUnRXRko0WWxwbVpVZFdOMFp2YkZsWU4yWXdaVGg0TkVsQ1lWODBUVXRTY21sM1ozWjVibmxDTjBSalJrUnJTUzB6WTB0RmR6SjBPV1ZQYkZCM1FYaFZFaGR2WVV4ZldYSnRURXMzZFdkcFRFMVFjazFYZDNGQk5Cb2lRVVJWZVVWSFpHVjVjemRCZFY5clJ6QXdWbGg0WlVWMVFuQmlialZJYW5ONFp3IiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfMTEiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgZGlyZWN0bHkgb24gR2xpbnRzIiwibGluayI6Imh0dHBzOi8vZ2xpbnRzLmNvbS9vcHBvcnR1bml0aWVzL2pvYnMvZnVsbC1zdGFjay1kZXZlbG9wZXIvNWJjZWFiYTYtMmMxZC00OWRjLWIxZmYtNmY4ZmNjN2Y2ZDM3P3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0=",
	},
	{
		title: "Fullstack Developer",
		company_name: "Zinergo",
		location: "Jakarta, Indonesia",
		via: "via Triplebyte",
		description: "test dulu",
		extensions: ["Full-time", "No degree mentioned"],
		detected_extensions: {
			schedule_type: "Full-time",
		},
		job_id: "eyJqb2JfdGl0bGUiOiJGdWxsc3RhY2sgRGV2ZWxvcGVyIiwiaHRpZG9jaWQiOiJoZ0RjcW9tb0tZd0FBQUFBQUFBQUFBPT0iLCJmYyI6IkV1SUJDcUlCUVVGMFZteGlRV3d0U2pSTFFVSlBSRzFZVldaSFZWUlFaMWRmUjFSRGFFaDNVM295V1haMmRuQXpURGRmWWpWa1p6UjBlRWhoVDBoaWVGOVJTV0Z0Tm5sa1MwUk9WSGg0WkhCbGQwaEZjVzlDUVZadFMwSlJPV00yUkdoR1lUaDZNR280U2w4MllVVlliamhyVlZKdWJIRmhhMTkzUlVVMFRHVk5la3MzTVdKZlNIUklha2xZVmxsQ1oxSk5aazlQVDJaNVdtMXNYekV4WVdOdGNUSjJVbFpCRWhkdllVeGZXWEp0VEVzM2RXZHBURTFRY2sxWGQzRkJOQm9pUVVSVmVVVkhaVjlYUlhrd2FISXhNblZQZURWUlpHSjJZM2hPYkhKeVRuQm5adyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzEyIiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIFRyaXBsZWJ5dGUiLCJsaW5rIjoiaHR0cHM6Ly90cmlwbGVieXRlLmNvbS9jb21wYW55L3B1YmxpYy96aW5lcmdvL1lCUnNqYVkvZnVsbHN0YWNrLWRldmVsb3Blcj91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
	},
	{
		title: "Full Stack Engineer",
		company_name: "PT Hermes Solusi Integrasi",
		location: "Jakarta, Indonesia",
		via: "via Linkedin",
		description:
			"I’m #hiring Junior Full-Stack Developer for an open role. Know anyone who would be a good fit?\n\nWe are urgently looking Junior Full-Stack Developer for our client, healthcare and pharmaceutical company based in South Jakarta.\n\nEmployment Type: Contract for 12 Months\nWork Station: Jakarta, Indonesia (WFH/WFO)\nEmployer: Healthcare\nSalary: Monthly (IDR per month)\n\nRequirements:\n• Bachelor Degree\n• At Least 2 Years Experiences in related field\n• Able to join immediately or 1 month's notice at the latest.\n• Indonesian citizenship.\n• Understanding Micro Services Architecture Technical skill Experience\n• Experinced in Kotlin Springboot frameworks/PHP Lumens\n• Message Broker ( RabitQ,Kafka)\n• Caching server ( Redis )\n• DOCKER,Kubertnates\n• API RESTFull, SYNC/ASYNC API\n• Git\n• HTML, CSS. Javascript\n• MYSQL,MSSQL,PostgresSQL\n• JS Framework ( Angular,ReactJS)\n\nIf you think you are the right person to fill in this position, please simply sign up and express your interest to this position.\n\nShare... your update CV at fidella.ancini@hermes-solusi.com",
		thumbnail:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGZ58ua5vTXDVLXHQydK3tfOH0--t8W8-iNCo7qA&s",
		extensions: ["2 days ago", "Full-time"],
		detected_extensions: {
			posted_at: "2 days ago",
			schedule_type: "Full-time",
		},
		job_id: "eyJqb2JfdGl0bGUiOiJGdWxsIFN0YWNrIEVuZ2luZWVyIiwiaHRpZG9jaWQiOiJYUHUzeHBEZjEzMEFBQUFBQUFBQUFBPT0iLCJmYyI6IkV2Y0JDcmNCUVVGMFZteGlSREJVYTJFd1RIcG5WR1UzTjFZeVRHUmFiMFp3TVhJeGJVWlpTakZuY201bFZYZzRSV0pTYldoU2JIUTBNVzFKVDNWWlRrTlFOa015UjFVeGJuQm5Ua3haV1VsSFRrYzJXWEZxT0hSTmRVdGZhR3BJUzFBd1VsTnhlVk5FVG1FellqQkNRbDlZYzA5YVowb3dTMGRsTmxCRU16TnBRalZDTm1OT1NHNVNXVmxPWm0wdFpuUkVXVWh4YUhoNlRqRndRM2g2ZW1rMFJrOXVUekJVVDBkSmNraElhelZNZUhONE1ISkJOakl6Y213MEVoZHZZVXhmV1hKdFRFczNkV2RwVEUxUWNrMVhkM0ZCTkJvaVFVUlZlVVZIWkRkMU0yTTJZbk5TVUZoMFoyRlRVVzg1ZG14aFQyMVBXSFJCUVEiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY18xMyIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBvbiBMaW5rZWRpbiIsImxpbmsiOiJodHRwczovL2lkLmxpbmtlZGluLmNvbS9qb2JzL3ZpZXcvZnVsbC1zdGFjay1lbmdpbmVlci1hdC1wdC1oZXJtZXMtc29sdXNpLWludGVncmFzaS0zMjI2NjA5Nzc4P3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0=",
	},
];

const Jobs: React.FC<JobsProps> = ({
	jobs = sampleJobs,
	setFocus,
	fullTimeOnly,
}) => {
	return (
		<main className={clsx("flex flex-col gap-8 w-full xl:w-exc-side")}>
			{jobs
				.filter(
					(job) =>
						!fullTimeOnly ||
						job.detected_extensions.schedule_type === "Full-time"
				)
				.map((job) => {
					const {
						job_id,
						thumbnail,
						company_name,
						title,
						location,
						detected_extensions,
					} = job;
					return (
						<article
							key={job_id}
							className={clsx(
								"job",
								"flex p-4 gap-4",
								"bg-white shadow-md rounded-lg",
								"hover:bg-gray-50 active:bg-gray-100 transition-colors"
							)}
							onClick={() => setFocus(job)}
						>
							<div className="job-thumbnail">
								<img src={thumbnail} alt={company_name} />
							</div>
							<div className="flex flex-col w-full">
								<span className="text-sm">{company_name}</span>
								<h3 className="text-xl">{title}</h3>
								<div className="flex flex-col xl:flex-row xl:justify-between w-full mt-1 gap-1">
									<span className="job-schedule">
										<>{detected_extensions.schedule_type}</>
									</span>
									<div className="flex gap-4 text-gray-600">
										<span className="job-detail">
											<GoGlobe />
											{location}
										</span>
										{detected_extensions.posted_at && (
											<span className="job-detail">
												<GoClock />
												{detected_extensions.posted_at}
											</span>
										)}
									</div>
								</div>
							</div>
						</article>
					);
				})}
			{jobs.length === 0 && (
				<div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg">
					No jobs match your filter.
				</div>
			)}
		</main>
	);
};

export default Jobs;

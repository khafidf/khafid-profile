import React from "react";
import {
	SiGithub,
	SiGitlab,
	SiPostman,
	SiVisualstudiocode,
} from "react-icons/si";
import { skills } from "../data";

const Skills = () => {
	return (
		<div>
			<div id="skills" className="h-[248px] bg-secondary/10">
				<div className="container flex flex-col items-center gap-8 px-4 py-20 mx-auto">
					<h2 className="font-semibold text-md">Software I Use</h2>
					<div className="flex gap-16">
						<SiVisualstudiocode size={30} className="text-icon" />
						<SiGithub size={30} className="text-icon" />
						<SiGitlab size={30} className="text-icon" />
						<SiPostman size={30} className="text-icon" />
					</div>
				</div>
			</div>
			<div className="container flex flex-col gap-6 px-8 pt-24 pb-8 mx-auto md:h-fit text-primary lg:w-4/5 xl:w-1/2">
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-bold">My Skill and Framework</h2>
					<p className="text-sm font-base">
						Here are some of the technologies I'm skilled in
					</p>
				</div>
				<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
					{skills.map((skill) => (
						<div className="flex items-center justify-center w-40 h-40 mx-auto rounded-md bg-secondary/10">
							<img
								src={`/images/${skill}.png`}
								alt={skill}
								width={90}
								height={90}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;

import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
	return (
		<div
			id="projects"
			className="container md:h-[706px] px-8 py-8 gap-6 flex flex-col text-primary lg:w-4/5 xl:w-1/2 mx-auto"
		>
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Projects</h2>
				<p className="text-sm font-base">
					Take a look at some of the projects I've worked on. Each one
					highlights my skills and dedication to building quality applications.
				</p>
			</div>
			<div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2">
				{/* Right */}
				<div className="mx-auto">
					<div className="flex flex-col gap-2">
						<div className="relative mx-auto border-2 rounded-lg w-fit border-secondary/10 group">
							<img
								width={480}
								height={480}
								src="/images/acme-nextjs.png"
								alt="Gear on progress"
								className="items-center mx-auto group-hover:blur-sm"
							/>
							<a
								href="https://nextjs-learn-olive-rho.vercel.app/"
								target="_blank"
								className="absolute hidden p-2 text-white transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-primary group-hover:flex left-1/2 top-1/2 "
							>
								<GoProjectSymlink size={28} />
							</a>
						</div>

						<p className="text-xs font-light">
							NextJS Learn Course - April 22, 2024
						</p>
						<h1 className="text-lg font-bold">NextJS Learn Course</h1>
						<p className="inline-block h-24 overflow-hidden text-sm font-normal">
							The "Nextjs Learn Course" teaches you how to build modern web apps
							using Next.js, React, and TypeScript...
						</p>
					</div>
				</div>
				{/* Left */}
				<div className="grid grid-cols-2 gap-2">
					<div className="flex flex-col gap-2">
						<div className="relative mx-auto border-2 rounded-lg w-fit border-secondary/10 group">
							<img
								width={230}
								height={230}
								src="/images/tictactoe.png"
								alt="Gear on progress"
								className="rounded-lg group-hover:blur-sm"
							/>
							<a
								href="https://tictactoe-olive-chi.vercel.app/"
								target="_blank"
								className="absolute hidden p-2 text-white transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-primary group-hover:flex left-1/2 top-1/2 "
							>
								<GoProjectSymlink size={20} />
							</a>
						</div>

						<p className="text-xs font-light">Tictactoe - June 15, 2024</p>
						<h1 className="text-lg font-bold">Tictactoe</h1>
					</div>
					<div className="flex flex-col gap-2">
						<div className="mx-auto rounded-lg w-fit bg-secondary/10">
							<img
								width={230}
								height={230}
								src="/images/gear.png"
								alt="Gear on progress"
							/>
						</div>
						<p className="text-xs font-light">
							On Development - August 26, 2024
						</p>
						<h1 className="text-lg font-bold">On Development</h1>
					</div>
					<div className="flex flex-col gap-2">
						<div className="mx-auto rounded-lg w-fit bg-secondary/10">
							<img
								width={230}
								height={230}
								src="/images/gear.png"
								alt="Gear on progress"
							/>
						</div>
						<p className="text-xs font-light">
							On Development - August 26, 2024
						</p>
						<h1 className="text-lg font-bold">On Development</h1>
					</div>
					<div className="flex flex-col gap-2">
						<div className="mx-auto rounded-lg w-fit bg-secondary/10">
							<img
								width={230}
								height={230}
								src="/images/gear.png"
								alt="Gear on progress"
							/>
						</div>
						<p className="text-xs font-light">
							On Development - August 26, 2024
						</p>
						<h1 className="text-lg font-bold">On Development</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

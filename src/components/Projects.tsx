const Projects = () => {
	return (
		<div
			id="projects"
			className="container md:h-[658px] px-8 py-8 gap-6 flex flex-col text-primary lg:w-4/5 xl:w-1/2 mx-auto"
		>
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Projects</h2>
				<p className="text-sm font-base">
					Take a look at some of the projects I've worked on. Each one
					highlights my skills and dedication to building quality applications.
				</p>
			</div>
			<div className="flex flex-col items-center gap-4 mx-auto md:flex-row">
				{/* Right */}
				<div className="mx-auto">
					<div className="flex flex-col gap-2 w-fit">
						<div className="rounded-lg bg-secondary/10">
							<img
								width={480}
								height={480}
								src="/images/gear.png"
								alt="Gear on progress"
							/>
						</div>
						<p className="text-xs font-light">
							On Development - August 26, 2024
						</p>
						<h1 className="text-lg font-bold">On Development</h1>
						<p className="text-sm font-normal">Ongoing</p>
					</div>
				</div>
				{/* Left */}
				<div className="grid grid-cols-2 gap-2">
					<div className="flex flex-col gap-2">
						<div className="rounded-lg bg-secondary/10">
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
						<div className="rounded-lg bg-secondary/10">
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
						<div className="rounded-lg bg-secondary/10">
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
						<div className="rounded-lg bg-secondary/10">
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

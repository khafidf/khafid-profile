const Home = () => {
	return (
		<div
			id="home"
			className="container md:h-[478px] flex flex-col-reverse items-center gap-8 px-2 py-8 mx-auto md:justify-center md:flex-row md:p-8"
		>
			{/* Left */}
			<div className="flex flex-col w-5/6 gap-4 text-center md:text-start md:justify-end md:w-1/3 text-primary">
				<h2 className="text-3xl font-bold lg:text-4xl">
					I'm Eko Khafid Firmansyah 👋
				</h2>
				<p className="w-4/5 mx-auto text-sm font-normal md:w-full md:mx-0 opacity-80">
					A <span className="font-bold">Junior Front-End Developer</span> with
					some back-end skills. Let's build something great together!
				</p>
				<button className="px-2 py-2 mx-auto text-xs font-semibold text-white duration-300 rounded-md md:mx-0 w-fit hover:bg-white hover:shadow-md hover:text-primary bg-primary">
					Talk With Me
				</button>
			</div>
			{/* Right */}
			<div>
				<img
					src="/images/photo.png"
					className="items-end bg-gray-100 rounded-md"
					width={300}
					height={300}
					alt="Foto saya"
				/>
			</div>
		</div>
	);
};

export default Home;

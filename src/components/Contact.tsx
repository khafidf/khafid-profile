import { MdDesignServices, MdEmail, MdWebAsset } from "react-icons/md";

const Contact = () => {
	return (
		<div
			id="contact"
			className="container md:h-[496px] px-8 pb-24 pt-8 gap-6 flex flex-col text-primary lg:w-4/5 xl:w-1/2 mx-auto"
		>
			<div className="container flex flex-col items-center gap-4 mx-auto md:flex-row">
				{/* Right */}
				<div className="mx-auto">
					<div className="flex flex-col gap-8 mb-4 md:mb-0 w-fit">
						<h3 className="text-2xl font-bold">How I Can Help You</h3>
						<p className="text-sm font-normal">Feel free for send me email.</p>
						<label htmlFor="email" className="relative block">
							<span className="absolute inset-y-0 left-0 flex items-center pl-2">
								<MdEmail size={20} />
							</span>
							<input
								type="text"
								name="email"
								className="block p-2 py-2 pr-16 rounded-md bg-secondary pl-9 focus:outline-none placeholder:text-primary/50 placeholder:text-sm"
								placeholder="youremail@email.com"
							/>
							<button className="absolute px-2 py-0 text-xs font-bold text-white duration-300 rounded-md shadow-md inset-y-2 right-4 w-fit hover:bg-white hover:shadow-md shadow-secondary hover:text-primary bg-primary">
								Send Me
							</button>
						</label>
					</div>
				</div>
				{/* Left */}
				<div className="flex flex-col items-center gap-8 py-10">
					<div className="flex flex-col w-4/5 gap-2">
						<div className="p-2 rounded-md bg-secondary w-fit">
							<MdDesignServices size={32} className="text-primary" />
						</div>
						<h4 className="font-bold text-md">UI/UX Design</h4>
						<p className="text-xs font-light">
							Designing intuitive and attractive user interfaces to boost
							engagement.
						</p>
					</div>
					<div className="flex flex-col w-4/5 gap-2">
						<div className="p-2 rounded-md bg-secondary w-fit">
							<MdWebAsset size={32} className="text-prmary" />
						</div>
						<h4 className="font-bold text-md">Website Development</h4>
						<p className="text-xs font-light">
							Creating responsive, impactful websites to elevate your online
							presence.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;

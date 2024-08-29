import { FaGithub, FaInstagram } from "react-icons/fa";

const Footerbar = () => {
	return (
		<div className="bg-footer flex flex-col h-[416px]">
			<div className="flex justify-center w-3/4 gap-6 pt-10 pb-16 mx-auto border-b border-b-slate-100">
				<div className="p-2 text-white rounded-full bg-icon-footer">
					<a href="https://www.instagram.com/khafidfrm/">
						<FaInstagram size={20} />
					</a>
				</div>
				<div className="p-2 text-white rounded-full bg-icon-footer">
					<a href="https://github.com/khafidf">
						<FaGithub size={20} />
					</a>
				</div>
			</div>
			<div className="flex flex-col justify-center w-3/4 h-full gap-2 mx-auto text-white ">
				<h4 className="text-2xl font-bold ">Let's work together</h4>
				<p className="w-3/4 text-sm">
					I'm always excited to explore new opportunities and collaborate on
					innovative projects. Whether you have a specific idea in mind or just
					want to chat about potential partnerships, feel free to get in touch.
					Let’s create something amazing together!
				</p>
			</div>
		</div>
	);
};

export default Footerbar;

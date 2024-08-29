import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { navLink } from "../data";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const openNav = () => {
		setOpen(!open);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<nav className="container flex px-2 py-8 mx-auto md:p-8 justify-evenly">
			<h1 className="text-3xl font-bold cursor-pointer text-primary">
				Khafid.dev
			</h1>

			<div
				className={`absolute w-full ${
					open && "shadow-md bg-white"
				} md:shadow-none md:w-fit  md:h-fit top-24 md:static`}
			>
				<ul
					className={`flex flex-col bg-white md:mt-2 md:flex-row gap-6 ${
						open && "pt-6"
					}`}
				>
					{navLink.map((nav, id) => (
						<li
							key={id}
							className={`${
								!open && "hidden"
							} md:block text-primary text-sm w-1/2 text-center font-medium px-4 py-2 md:px-2 md:py-1 hover:bg-primary rounded-md hover:text-white cursor-pointer mx-auto`}
						>
							<a href={`#${nav.toLowerCase()}`}>{nav}</a>
						</li>
					))}
				</ul>
				<FiChevronDown
					size={28}
					color="white"
					onClick={openNav}
					className={`relative ${
						open && "hidden"
					} mx-auto bg-primary w-16 h-8 rounded-full cursor-pointer bottom-2 md:hidden`}
				/>

				<FiChevronUp
					size={28}
					color="white"
					onClick={openNav}
					className={`relative ${
						!open && "hidden"
					} mx-auto bg-primary w-16 h-8 rounded-full cursor-pointer top-4 md:hidden`}
				/>
			</div>
			<div>
				<button className="px-5 py-2 font-semibold text-white duration-300 rounded-md hover:bg-white hover:shadow-md hover:text-primary text-md bg-primary">
					Hire Me
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

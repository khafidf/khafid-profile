import Navbar from "../components/Navbar";
import Footerbar from "../components/Footer";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Layout = () => {
	return (
		<>
			<header className="border-b-2">
				{/* NAVBAR */}
				<Navbar />
			</header>

			<main className="cursor-default">
				{/* Home */}
				<Home />
				{/* Skills */}
				<Skills />
				{/* Projects */}
				<Projects />
				{/* Contact */}
				<Contact />
			</main>
			<footer>
				<Footerbar />
			</footer>
		</>
	);
};

export default Layout;

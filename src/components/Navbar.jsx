import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { HashLink as Link } from "react-router-hash-link";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
	const navRef = useRef(null);
	const navLinks = [
		{ id: "home", title: "Home" },
		{ id: "how", title: "How It Works" },
		{ id: "explore", title: "Explore Skills" },
		{ id: "rewards", title: "Rewards" },
		//{ id: "blog", title: "Blog" },
		{ id: "contact", title: "Contact" },
	];
	useGSAP(() => {
		gsap.to(navRef.current, {
			//backgroundColor: "#00000050",
			//backgroundColor: "rgba(0, 0, 0, 0.3)",
			backgroundColor: "rgba(5, 8, 34, 0.5)",

			backdropFilter: "blur(10px)",
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: document.documentElement,
				start: "top -100px",
				end: "top -150px",
				scrub: 0.3,
				toggleActions: "play none none reverse",
			},
		});
	}, []);
	return (
		<nav
			ref={navRef}
			className="fixed top-0 left-0 w-full z-50 font-bricolage flex justify-between items-center px-4 md:px-8 py-4 transition-all duration-300"
		>
			<Link to="/#home" smooth className="font-bold text-3xl flex items-center">
				SkillSwap
			</Link>

			<ul className="hidden md:flex text-xl items-center gap-9 text-neutral-200">
				{navLinks.map((link) => (
					<li
						key={link.id}
						//	className="text-white hover:text-blue-600 transition-colors duration-200"
						className="cursor-pointer group"
					>
						<Link
							to={`/#${link.id}`}
							smooth
							className="hover:text-white transition-colors duration-300"
						>
							{link.title}
						</Link>

						<div className="h-[2px] bg-[#2d336c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
					</li>
				))}
			</ul>

			<div className="flex items-center gap-4">
				<button className="py-2 px-4 border border-[#2d336c] hover:bg-[#22296c] hover:scale-105 duration-300 rounded-full font-semibold cursor-pointer text-neutral-200 hover:text-white transition-colors">
					Login
				</button>
				{/* <button className="cursor-pointer bg-[#2d336c] text-white px-4 py-2 rounded-lg hover:bg-[#505264] transition"> */}
				<button className="cursor-pointer bg-[#2d336c] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#22296c] transition-all duration-300 transform hover:scale-105">
					Get Started
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

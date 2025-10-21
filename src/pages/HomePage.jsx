import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
	const sectionsRef = useRef([]);

	useEffect(() => {
		sectionsRef.current.forEach((section) => {
			gsap.to(section, {
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: section,
					start: "top 80%",
					end: "bottom 60%",
					toggleActions: "play none none reverse",
				},
			});
		});
	});
	return (
		<>
			{["home", "how", "explore", "rewards", "contact"].map((id, index) => (
				<section
					key={id}
					id={id}
					ref={(el) => (sectionsRef.current[index] = el)}
					className={`overflow-hidden h-screen flex flex-col items-center justify-center ${
						index % 2 === 0 ? "bg-[#0b0e2b]" : "bg-[#141845]"
					} text-white text-4xl font-bold px-6`}
				>
					{id.charAt(0).toUpperCase() + id.slice(1)} Section
				</section>
			))}
		</>
	);
};

export default HomePage;

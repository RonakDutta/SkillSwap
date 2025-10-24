import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AppLayout = () => {
	const main = useRef();

	useGSAP(
		() => {
			const sections = gsap.utils.toArray(".section");
			sections.forEach((section) => {
				const heading = section.querySelector(".section-heading");
				const paragraph = section.querySelector(".section-content");

				gsap.from([heading, paragraph], {
					opacity: 0,
					y: 50,
					duration: 1,
					ease: "power3.out",
					stagger: 0.2,
					scrollTrigger: {
						trigger: section,
						start: "top 80%", // when  top of the section is 80% from the top of the viewport
						end: "bottom 20%",
						toggleActions: "play none none reverse",
					},
				});
			});
		},
		{ scope: main }
	);

	return (
		<main ref={main}>
			{[
				{ id: "home", title: "Welcome to SkillSwap" },
				{ id: "how", title: "How It Works" },
				{ id: "explore", title: "Explore Your Potential" },
				{ id: "rewards", title: "Earn and Grow" },
				{ id: "contact", title: "Get In Touch" },
			].map((item, index) => (
				<section
					key={item.id}
					id={item.id}
					className={`section h-screen flex flex-col items-center justify-center gap-4 ${
						index % 2 === 0 ? "bg-[#0b0e2b]" : "bg-[#141845]"
					} text-white px-6 text-center font-bricolage`}
				>
					<h1 className="section-heading text-4xl md:text-6xl font-bold">
						{item.title}
					</h1>
					<p className="section-content consolas text-lg md:text-xl max-w-2xl text-neutral-300">
						This is the placeholder for the "{item.title}" section. Engage with
						our platform and discover a new way of learning!!
					</p>
				</section>
			))}
		</main>
	);
};

export default AppLayout;

'use client'
import { motion } from "framer-motion";

const NavBar = () => {
  return (
  	<nav className="text-4xl font-bold phone:text-xl tablet:text-2xl">
			<div className="flex justify-between text-eerie_black dark:text-ghost_white">
				<motion.div
					whileHover={{ 
						scale: 1.1,
						rotate: 180,
						transition: { duration: 0.5 }}
					}
					whileTap={{ scale: 0.9 }}
				>
					<a href="/">
						{"{ "}
						<span className="text-outer_space dark:text-ghost_white">SY</span>
						{" }"}
					</a>
				</motion.div>
				<ul className="flex gap-10 phone:hidden">
					<motion.li
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<a href="#about">About</a>
					</motion.li>
					<motion.li
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<a href="#project">Project(s)</a>
					</motion.li>
					<motion.li
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<a href="#contact">Contact</a>
					</motion.li>
				</ul>
			</div>
    </nav>
  );
}

export default NavBar; 
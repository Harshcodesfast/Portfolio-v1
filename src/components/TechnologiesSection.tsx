import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiRecoil, SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { motion, type Variants } from "framer-motion";

const iconVarients = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechnologiesSection = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 "
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(3)}
          className="p-4 "
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(5)}
          className="p-4 "
        >
          <RiTailwindCssFill className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2)}
          className="p-4"
        >
          <TbBrandFramerMotion className="text-7xl text-amber-300" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(6)}
          className="p-4"
        >
          <SiShadcnui className="text-7xl text-gray-200" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(4)}
          className="p-4"
        >
          <SiRecoil className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechnologiesSection;

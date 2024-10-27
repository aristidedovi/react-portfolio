import { RiReactjsLine } from "React-icons/ri";
import { TbBrandNextjs } from "React-icons/tb";
import { SiMongodb } from "React-icons/si";
import { DiRedis, DiNodejsSmall } from "React-icons/di";
//import { DiNodejs } from "React-icons/fa";
import { BiLogoPostgresql } from "React-icons/bi";
import { motion } from "framer-motion";

const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: "reverse"

        }
    }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5}}
            className="my-20 text-center text-4xl">
            Technologies
        </motion.h1>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap4">
            <motion.div 
                 variants={iconVariant(2.5)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                variants={iconVariant(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div 
                variants={iconVariant(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-400" />
            </motion.div>
            <motion.div 
                variants={iconVariant(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-7xl text-red-400" />
            </motion.div>
            <motion.div 
                variants={iconVariant(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiNodejsSmall className="text-7xl text-green-400" />
            </motion.div>
            <motion.div 
                variants={iconVariant(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-400" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies

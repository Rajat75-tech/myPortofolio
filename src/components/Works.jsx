import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// const ScrollReveal = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const ProjectCard = ({ project }) => {
//   return (
//     <ScrollReveal>
//       <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
//         <img
//           src={project.image}
//           alt=""
//           className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
//         />
//         <div className="flex flex-col gap-5">
//           <div className="flex flex-col gap-3">
//             <div className="text-xl font-semibold">{project.title}</div>
//             <p className="text-gray-400">{project.description}</p>
//           </div>
//           <div className="flex flex-wrap gap-5">
//             {project.technologies.map((tech, index) => (
//               <span key={index} className="rounded-lg bg-black p-3">
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </ScrollReveal>
//   );
// };

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
  // return (
  //   <div
  //     id="projects"
  //     className="flex min-h-screen w-full flex-col justify-center items-center gap-16 p-4 md:px-14 md:py-24"
  //   >
  //     <ScrollReveal>
  //       <h1 className="text-4xl font-light text-white md:text-6xl">
  //         My Projects
  //       </h1>
  //     </ScrollReveal>

  //     <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
  //       {projectsData.map((project, index) => (
  //         <ProjectCard key={index} project={project} />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default SectionWrapper(Works, "");

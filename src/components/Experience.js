import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-36">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Mi pasado
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Miembro del Ejercito"
            // company="Mi propio jefe"
            // companyLink="https://google.com"
            time="2016-2022"
            address="Selva Peruana"
            work="Serví como miembro del Ejército Peruano, enfocándome en operaciones estratégicas, logística y planificación táctica en diversos entornos"
          />
          <Details
            position="Miembro del Ejercito"
            // company="Google"
            // companyLink="https://google.com"
            time="2016-2022"
            address="Selva Peruana"
            work="Serví como miembro del Ejército Peruano, enfocándome en operaciones estratégicas, logística y planificación táctica en diversos entornos"
          />

          <Details
            position="Coach Online"
            company="Wolf club"
            companyLink="https://www.instagram.com/cristhian_vasquez98/"
            time="Desde 2019"
            address="Lima, Perú"
            work="Me desempeñé como coach en línea, brindando apoyo y orientación en diversas áreas a mis clientes, tanto en el ámbito personal como profesional."
          />

          {/* <Details
            position="Teaching Assistant"
            company="MIT"
            companyLink="https://mit.edu"
            time="Fall 2018"
            address="Massachusetts Ave, Cambridge, MA."
            work="Assisted in teaching a course on computer programming, held office
              hours to help students with assignments, and graded exams and
              assignments."
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;

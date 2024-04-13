import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/projects/imgW4 (1).jpg";
import blog2 from "../../public/images/projects/imgW3.jpeg";
import blog3 from "../../public/images/projects/imgW5.jpg";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light"
    >
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Wolf Club</title>
        <meta name="description" content="By IgmeMarcial" />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Accede Sala Afiliados !"
            className="!text-7xl !leading-tight mb-16 lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="Curso MINDSET MILLONARIO con Vasquez"
              time="Tiempo limitado"
              summary="✅Aprende el MINDSET que me llevo de fregar platos y tener $50 en 2015 a MILLONARIO en 2018

✅Aprende todo el CONOCIMIENTO aprendido de mis MENTORES 

✅Incluye una MENTORIA de 90 min con mi mayor mentor

✅Aprende los 4 pilares del EXITO

✅Aprende la tecnica del CIRCULO MILLONARIO"
              link="https://www.instagram.com/cristhian_vasquez98/"
            />

            <FeaturedArticle
              img={blog2}
              title="Curso NUTRICION Y ENTRENAMIENTO con Vasquez"
              time="Tiempo limitado"
              summary="✅Aprende el METODO VASQUEZ para que la NUTRICION y el ENTRENAMIENTO sea un lifestyle

✅Aprende a crear programas de entrenamiento personalizado a tus clientes 

✅Aprende a calcular las CALORIAS para una definición o un volumen limpio

✅Aprende todo sobre los SUPLEMENTOS que una persona necesita

✅Aprende todo sobre MACROS"
              link="https://www.instagram.com/cristhian_vasquez98/"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            Proximos Master Mind
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="Master Mind 4.0"
              img={blog3}
              date="Abril 14, 2024"
              link="https://www.instagram.com/cristhian_vasquez98/"
            />
            <Article
              title="Master Mind 5.0"
              img={blog3}
              date="Abril 21, 2024" // Cambiado al siguiente domingo
              link="https://www.instagram.com/cristhian_vasquez98/"
            />
            <Article
              title="Master Mind 6.0"
              img={blog3}
              date="Abril 28, 2024" // Siguiente domingo
              link="https://www.instagram.com/cristhian_vasquez98/"
            />
            <Article
              title="Master Mind 7.0"
              img={blog3}
              date="Mayo 5, 2024" // Siguiente domingo
              link="https://www.instagram.com/cristhian_vasquez98/"
            />
            <Article
              title="Master Mind 8.0"
              img={blog3}
              date="Mayo 12, 2024" // Siguiente domingo
              link="https://www.instagram.com/cristhian_vasquez98/"
            />
            <Article
              title="Master Mind 9.0"
              img={blog3}
              date="Mayo 19, 2024" // Siguiente domingo
              link="https://www.instagram.com/cristhian_vasquez98/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}

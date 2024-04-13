import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, InstagramIcon, WassIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/imgW3.jpeg";
import proj2 from "../../public/images/projects/imgW5.jpg";
import proj3 from "../../public/images/projects/imgW1.jpeg";
import proj4 from "../../public/images/projects/imgW2.jpeg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <WassIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Club Jefazos
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github: instagram }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Unirse
          </Link>
          <Link
            href={instagram}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            {/* <WassIcon /> */}
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Wolf Club</title>
        <meta name="description" content="BY MARCIAL IGME TEAM WOLF CLUB" />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Crea el Hombre/Mujer que Admiras y Respetas"
            // className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:mb-8 sm:!text-5xl xs:!text-3xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Master Mine 4.0"
                title="Wolf Club"
                summary="WOLF CLUB 🐺 es más que un club es una familia de personas con ganas de superarse en la vida empezando por dejar sus malos hábitos malos amigos malos vicios como drogas ;fiestas ;alcohol ;mujeres videojuegos;casinos ;pandillaje y como lo estamos haciendo a travez de la DISCIPLINA & la SABIDURÍA de DIOS siguiendo consejos y hábitos día tras día sin fallar hasta desarrollar una actitud mental positiva y una mentalidad inquebrantable ante toda adversidad hasta llegar a tu MÁXIMO POTENCIAL tú tienes un GIGANTE que vive en ti pero tienes que pulirlo tienes que trabajarlo y para eso estamos nosotros para ayudarte para ser tus nuevos amigos esos amigos que de verdad te mereces amigos que te impulsen y te inspiren a ser un verdadero GANADOR porque ese GANADOR ya habita en ti ."
                img={proj1}
                link="https://www.instagram.com/cristhian_vasquez98/"
                github="https://www.instagram.com/cristhian_vasquez98/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Master Mine"
                title="Wolf Club"
                img={proj2}
                link="https://www.instagram.com/cristhian_vasquez98/"
                github="https://www.instagram.com/cristhian_vasquez98/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Master Mind 3.0"
                title="Wolf Club"
                img={proj3}
                link="https://www.instagram.com/cristhian_vasquez98/"
                github="https://www.instagram.com/cristhian_vasquez98/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Marketing de Afiliados"
                title="Escapa el Sistema cambiando vidas"
                summary="WOLF CLUB /club de lobos Lima PERÚ 🇵🇪 🐺 MÁS DE 25 almas cambiando su vida pasada por su vida FUTURA "
                img={proj4}
                link="https://www.instagram.com/cristhian_vasquez98/"
                github="https://www.instagram.com/cristhian_vasquez98/"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                img={proj5}
                title="Agency Website Template"
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/codebucks27/wibe-studio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Blog Website"
                img={proj6}
                title="DevDreaming"
                link="https://devdreaming.com"
                github="https://github.com/codebucks27"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
}

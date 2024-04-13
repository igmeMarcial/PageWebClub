import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/img3.jpg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wolf Club</title>
        <meta
          name="description"
          content="Explore el portafolio del desarrollador de Next.js de MarcialIgme y descubra los últimos proyectos de aplicaciones web y artículos de ingeniería de software. Demuestra tus habilidades como desarrollador full-stack y ingeniero de software, y aprende cómo puedes convertirte en parte del 1% de profesionales de la tecnología"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col md:gap-6">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full ">
              <Image
                src={profilePic}
                alt="CodeBucks"
                className="h-96 w-96 rounded-md object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Cristhian Vasquez COACH ONLINE"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                Esto no lo aprenderas en la Universidad, esto no lo aprenderas
                en ningun otro lado, porque nadie lo ha hecho! Nadie lo ha
                documentado desde el hostal, desde fregar platos, desde
                obrero....al Bugatti, la Mansion, el Jet Privado, el Mega Yate,
                el Fisico de mis sueños, la Mujer de mis sueños, las amigas de
                mis sueños...ahora te toca a ti aprender como para que seas el
                siguiente JEFAZO !
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="https://www.instagram.com/cristhian_vasquez98/"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Masterclas
                  <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="https://www.instagram.com/cristhian_vasquez98/"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Codebucks"
          />
        </div>
      </article>
    </>
  );
}

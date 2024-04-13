import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/img1.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Wolf Club</title>
        <meta name="description" content="By Marcial Igme" />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Crea la persona que admiras!"
            // className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            className="mb-16 !text-7xl !leading-tight lg:!text-6xl sm:!text-4xl xs:!text-2xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                MI HISTORIA
              </h2>
              <p className="my-4 font-medium">
                Gracias al Fitness logre dejar de escapar mi vida con el alcohol
                y las drogas. Cambie mis Habitos y mi Mindset y me converti en
                un Ganador En 2015 trabajaba de obrero, friegaplatos...tenia tan
                solo $50 en mi cuenta de banco. 2016 aun vivia en un hostal y
                compartia habitación con 16 personas en literas. Me movía en
                Autobús y tren hasta que me compre este scooter por 300$
              </p>
              <p className="font-medium">
                Cuando empece a INVERTIR mi vida cambio. Me di cuenta que
                trabajando duro seguiría siendo un empleado toda mi vida Decidí
                empezar a invertir en coaches/mentores con los resultados que yo
                quería, y mi vida despego. Nunca mire atrás y nunca dejo de
                aprender, siempre sere un alumno pero de los profesores
                correctos...aquellos que tienen los RESULTADOS que yo quiero He
                cumplido muchos sueños, vivo de lo que me apasiona, me he
                comprado muchos supercoches, viajo el mundo pero lo que
                realmente me hace feliz no es el dinero... Lo que me hace FELIZ
                es levantarme cada día y ayudar a los demás a lograr lo mismo Yo
                GANO cuando TU GANAS
              </p>
              <p className="font-medium ">
                Te ayudo a solucionar problemas que yo he solucionado
                DROGAS/DEPRESION/PERDIDADEMIPADRE/ALCOHOL Y FIESTAS
              </p>
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Codebucks"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Vidas Cambiadas
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Wolf club
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={9} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Años de experiencia
                </h2>
              </div>
            </div>
          </div>

          {/* <Skills /> */}
          <Experience />
          {/* <Education /> */}
        </Layout>
      </main>
    </>
  );
}

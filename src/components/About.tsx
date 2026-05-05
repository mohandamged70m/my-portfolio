"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-28 mt-10 px-4 sm:px-6 lg:px-4">
      <div className="max-w-2xl grid items-center justify-start text-wrap mx-auto prose">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=""
        >
          <div className="font-bold text-3xl text-black/90">About</div>
          <p>
            I&apos;m Mohand Darwish, a passionate 20-year-old self-taught
            Egyptian software engineer and an aspiring AI Products
            Expert with over 1 year of experience and a strong drive for
            building impactful web experiences.
          </p>
          <p className="mt-2">
            At 20, I’ve already built and shipped real-world AI products and I’m just getting started. I love solving
            real problems through tech, learning fast, and creating beautiful,
            high-performing user interfaces.
          </p>
          <p className="mt-2">
            I'm also actively building my presence in the tech community. As a
            full-stack engineer passionate about scalable APIs and great web
            experiences, I've immersed myself in the open source world —
            learning from builders who ship real things and write code that
            matters. have shaped how I think about building products, designing systems,
            and moving fast without breaking everything.
          </p>
        </motion.div>
      </div>

      <Link
        href="https://www.linkedin.com/in/mohandamged/"
        target="_blank"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center mt-10 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="py-2 px-3 bg-white shadow-sm rounded-sm w-fit"
          >
            <Image
              src="/img/profile-pic.jpg"
              width={200}
              height={200}
              alt="profile image"
              className="rounded-sm bg-white w-full max-w-[200px]"
            />
            <span className="text-sm block text-center mt-1 text-gray-800">
              @mohand.darwish
            </span>
          </motion.div>
        </motion.div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="flex justify-center mt-6 px-4"
      >
        <Button className="!bg-black/90 text-white !cursor-pointer !py-4 !px-6 hover:!bg-black/82">
          <a href="#contact" aria-label="Contact for collaboration">
            Let&apos;s collaborate!
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default About;

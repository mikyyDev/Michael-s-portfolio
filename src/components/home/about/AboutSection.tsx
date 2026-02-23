"use client";

import Header from "@/components/general/Header";
import ServicesCard from "@/components/home/about/ServicesCard";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/general/LinkButton";
import { ArrowBigRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      {/* --- Intro / Bio --- */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {" "}
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300">
              About <span className="text-indigo-400">Me</span>
            </h1>
            <div className="text-gray-300 text-lg leading-relaxed space-y-6 mb-8">
              <p>
                I'm Michael Alula, a passionate Frontend Developer specializing
                in building fast, responsive, and accessible web applications
                using modern technologies like React, Next.js, and TypeScript. I
                focus on creating clean, scalable interfaces that deliver
                seamless user experiences across all devices.
              </p>

              <p>
                My journey started with simple HTML and CSS projects, and over
                time I’ve grown into developing full-featured applications with
                strong attention to performance, usability, and design
                consistency. I enjoy transforming ideas into real-world digital
                solutions that are both visually appealing and technically
                solid.
              </p>
            </div>
            <p className="text-indigo-400 font-medium mb-4">
              Building modern digital experiences that are fast, scalable, and
              user-focused.
            </p>
            <div className="flex gap-4 flex-wrap">
              <LinkButton
                href="#projects"
                text="See my work"
                icon={ArrowBigRight}
              />
            </div>
          </div>
          {/* Right Content - Profile Image */}
          <div className="relative h-80 w-80 mx-auto lg:mx-0">
            {/* Gradient background glow */}
            <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
            <div className="relative h-full w-full rounded-full p-1">
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/miky.jpg"
                  alt="Michael Alula"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Services / What I Offer --- */}
      <Header title="Services I Offer" />
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 mb-20">
        <ServicesCard
          name="UI and UX"
          icon="/images/s1.png"
          description="Designing intuitive interfaces and seamless user experiences."
        />
        <ServicesCard
          name="Web and Mobile App"
          icon="/images/s2.png"
          description="Building responsive web apps and cross-platform mobile solutions."
        />
        <ServicesCard
          name="Design and Creative"
          icon="/images/s3.png"
          description="Creating unique brand identities and compelling visual designs."
        />
        <ServicesCard
          name="Development"
          icon="/images/s4.png"
          description="Full-stack development with modern frameworks and best practices."
        />
      </div>

      {/* --- CTA / Contact Button --- */}
      <div className="text-center">
        <LinkButton href="#contact" text="Get in Touch" icon={ArrowBigRight} />
      </div>
    </section>
  );
}

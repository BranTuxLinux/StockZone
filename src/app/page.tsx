"use client";

import { Carousels } from "@/components/home/Carrousel";
import NavbarComponents from "@/components/home/Navbar";

export default function Home() {
  
  return (
    <>
    <NavbarComponents  />
    <section id="Content" className=" w-full flex items-center justify-center">
      <Carousels />
    </section>
    </>
  );
}


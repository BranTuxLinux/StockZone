"use client";
import {  useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Home() {
  const { user, isLoading } = useUser();
  

  return (
    <>
      <h1>Home</h1>
      <hr />
      <Link href={"/dashboard"}>Ir a dashboard </Link>
      <hr />
      <br />
      <div>
        <a href="/api/auth/login">Login</a>
      </div>
      <div>
        <a href="/api/auth/logout">Salir</a>
      </div>
    </>
  );
}


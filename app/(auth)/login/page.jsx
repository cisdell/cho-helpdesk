"use client";
import AuthForm from "../AuthForm";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log("user login in the works");
  };

  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}

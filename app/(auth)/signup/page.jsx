"use client";
import { useState } from "react";
import AuthForm from "../AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "../../../node_modules/next/navigation";

export default function Signup() {
  const router = useRouter;
  const [error, setError] = useState("");

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`, //for dev purpose only.
      },
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/verify");
    }

    console.log("user sign up", email, password);
  };

  return (
    <main>
      <h2 className="text-center">Sign up</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  );
}

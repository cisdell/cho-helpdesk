"use client";
import { useState } from "react";
import { createClientComponentClient } from "../../../node_modules/@supabase/auth-helpers-nextjs/dist/index";

//components
import AuthForm from "../AuthForm";
import { useRouter } from "../../../node_modules/next/navigation";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("user login in the works");
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/");
    }
  };

  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  );
}

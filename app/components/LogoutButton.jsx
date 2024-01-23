"use client";

import React from "react";
import { createClientComponentClient } from "../../node_modules/@supabase/auth-helpers-nextjs/dist/index";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <button className="btn-primary" onClick={handleLogout}>
      Logout
    </button>
  );
}

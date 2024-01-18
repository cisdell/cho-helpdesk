import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Cho-HELPDESK</h1>
      <Link href="/">Dashbord</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

import Navbar from "../components/Navbar";
import { createServerComponentClient } from "../../node_modules/@supabase/auth-helpers-nextjs/dist/index";
import { cookies } from "next/headers";
import { redirect } from "../../node_modules/next/navigation";

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  console.log(data);
  if (!data.session) {
    redirect("/login");
  }
  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
}

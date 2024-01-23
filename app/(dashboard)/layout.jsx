import Navbar from "../components/Navbar";
import { createServerComponentClient } from "../../node_modules/@supabase/auth-helpers-nextjs/dist/index";
import { cookies } from "next/headers";

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  console.log(data);

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
}

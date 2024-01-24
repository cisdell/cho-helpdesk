import { createRouteHandlerClient } from "../../../node_modules/@supabase/auth-helpers-nextjs/dist/index";
import { NextResponse } from "../../../node_modules/next/server";
//'localhost:3000/api/tickets'
export const dynamic = "force-dynamic";

// export async function GET() {
//   const res = await fetch("http://localhost:4000/tickets");

//   const tickets = await res.json();

//   return NextResponse.json(tickets, {
//     status: 200,
//   });
// }

export async function POST(request) {
  const ticket = await request.json();

  // const res = await fetch("http://localhost:4000/tickets", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(ticket),
  // });

  // const newTicket = await res.json();

  // return NextResponse.json(newTicket, {
  //   status: 201,
  // });

  // get the supabase
  const supabase = createRouteHandlerClient();

  //get current user session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  //insert data
  const { data, error } = await supabase
    .from("tickets")
    .insert({
      ...ticket,
      user_email: session.user.email,
    })
    .select()
    .single();

  return NextResponse.json({ data, error });
}

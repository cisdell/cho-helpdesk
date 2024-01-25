import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "../../../../node_modules/@supabase/auth-helpers-nextjs/dist/index";
import { cookies } from "../../../../node_modules/next/headers";
export async function DELETE(_, { params }) {
  const id = params.id;
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.from("tickets").delete().eq("id", id);

  return NextResponse.json({ error });
}
//'localhost:3000/api/tickets'
// export async function GET(_, { params }) {
//   const id = params.id;
//   const res = await fetch(`http://localhost:4000/tickets/${id}`);
//   const ticket = await res.json();
//   console.log(res);
//   if (!res.ok) {
//     console.log("sdfsdfsdfsfsdf!!");
//     return NextResponse.json(
//       { error: "Cannot find the ticket" },
//       { status: 404 }
//     );
//   }
//   return NextResponse.json(ticket, {
//     status: 200,
//   });
// }

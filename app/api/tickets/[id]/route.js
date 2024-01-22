import { NextResponse } from "../../../../node_modules/next/server";
//'localhost:3000/api/tickets'
export async function GET(_, { params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await res.json();
  console.log(res);
  if (!res.ok) {
    console.log("sdfsdfsdfsfsdf!!");
    return NextResponse.json(
      { error: "Cannot find the ticket" },
      { status: 404 }
    );
  }
  return NextResponse.json(ticket, {
    status: 200,
  });
}

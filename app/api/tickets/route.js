import { NextResponse } from "../../../node_modules/next/server";
//'localhost:3000/api/tickets'
export async function GET() {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}

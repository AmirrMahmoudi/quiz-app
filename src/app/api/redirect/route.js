import { redirect } from "next/navigation";

const fullname = "Amirhossein_Mahmoudi";

export async function GET() {
  redirect(`https://localhost:3000/api/username/${fullname}`);
}

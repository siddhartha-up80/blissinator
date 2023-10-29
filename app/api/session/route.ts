import Session from "@/models/session";
import { connectToDB } from "@/utils/database";

export const POST = async (request: any) => {
  
  const { name, email, phone, concern, gender, filename } = await request.json();
    console.log(name, email, phone, concern, gender, filename)
  try {
    await connectToDB();
    const session = new Session({ name, email, phone, concern, gender, filename });

    await session.save();
    return new Response(JSON.stringify(session), { status: 201 });
  } catch (error) {
    return new Response("Failed to add concern support contact", { status: 500 });
  }
};

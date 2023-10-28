import Call from "@/models/call";
import { connectToDB } from "@/utils/database";

export const POST = async (request: any) => {
    const { name, email, phone, timings, gender } = await request.json();

    try {
        await connectToDB();
        const call = new Call({ name, email, phone, timings, gender });

        await call.save();
        return new Response(JSON.stringify(call), { status: 201 })
    } catch (error) {
        return new Response("Failed to add call support contact", { status: 500 });
    }
}
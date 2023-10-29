import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export const POST = async (req: any) => {
    
    const data = await req.formData();
    const file = data.get('file')

    if(!file){
        return NextResponse.json(({message: 'No file uploaded'}), {status: 400})
    } 

    const byteData = await file.arrayBuffer()
    const buffer = Buffer.from(byteData)
    const path = `public/${file.name}`

    await writeFile(path, buffer)
    return NextResponse.json(({message: 'File uploaded'}), {status: 201})

};

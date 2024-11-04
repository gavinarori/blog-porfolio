import { prisma } from '@/db/index';
import { NextResponse } from "next/server";



//this function component is to read posts from the db
export const GET = async (req: Request, res: NextResponse) => {
  try {
    await prisma.$connect();
    const blogs = await prisma.blog.findMany();
    return NextResponse.json({ message: "Success", blogs }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//this function component is to write the posts to the db
export const POST = async (req: Request, res: NextResponse) => {
    try {
      const { title, summary, description } = await req.json(); 
      await prisma.$connect();
      
      const blogs = await prisma.blog.create({
        data: { title, summary, description, },
      });
  
      return NextResponse.json({ message: "Success", blogs }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };
  
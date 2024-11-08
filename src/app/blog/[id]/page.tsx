"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";
import SkeletonBlog from "@/components/skeleton/blogs_skeletons";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { Slash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";



export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null); 
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { data: session } = useSession(); 
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`https://omari-john-paul.vercel.app/api/blog/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data.blog); 
          console.log(data.blog);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <SkeletonBlog />;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  const deleteBlog = async (id: string) => {
    const res = fetch(`https://omari-john-paul.vercel.app/api/blog/${id}`, {
      method: "DELETE",
      //@ts-ignore
      "Content-Type": "application/json",
    });
    return (await res).json();
  };

  const handleDelete = async () => {
   
    await deleteBlog(params.id);
    router.push("/");
  };
  

  return (
    <>
      <Header>
        <Container>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title || "Untitled"}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.title || "Untitled"}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {post.updatedAt
                ? new Date(post.updatedAt).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "No date available"}
            </p>
            {session ? (<DropdownMenu>
  <DropdownMenuTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>
</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My blogs</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href={`/edit/${post.id}`}>Edit</Link></DropdownMenuItem>
    <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
  </DropdownMenuContent>
  </DropdownMenu>
    ) : (
    <p className="">Please log in to add a blog.</p>
          )}
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          {post.description || "Description not available."}
        </article>
      </Container>
    </>
  );
}



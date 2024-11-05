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
import { Fragment, useRef } from "react";
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";


type UpdateBlogParams = {
  title: string;
  description: string;
  summary: string;
  id: string;
};

const updateBlog = async (data: UpdateBlogParams) => {
  const res = fetch(`http://localhost:3000/api/blog/${data.id}`, {
    method: "PUT",
    body: JSON.stringify({ title: data.title, summary: data.summary , description: data.description }),
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};


const getBlogById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};

const EditBlog = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const summaryRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    getBlogById(params.id)
      .then((data) => {
        if (titleRef.current && descriptionRef.current && summaryRef.current) {
          titleRef.current.value = data.title;
          descriptionRef.current.value = data.description;
          summaryRef.current.value = data.summary;
        
        }
      })
      .catch((err) => {
        console.log(err);
       
      });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (titleRef.current && descriptionRef.current) {
     
      await updateBlog({
        title: titleRef.current?.value,
        description: descriptionRef.current?.value,
        summary: summaryRef.current?.value as string,
        id: params.id,
      });
      await router.push("/");
    }
  };
  return (
    <Fragment>
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-2xl text-slate-200 font-bold p-3">
            Edit your blog
          </p>
          <form onSubmit={handleSubmit}>
            <input
              ref={titleRef}
              placeholder="Enter Title"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2 "
            />
            <input
              ref={summaryRef}
              placeholder="Enter SUMMARY"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2 "
            />
            <textarea
              ref={descriptionRef}
              placeholder="Enter Description"
              className="rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <div className="flex justify-between">
              <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};


export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null); 
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/blog/${id}`)
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
    const res = fetch(`http://localhost:3000/api/blog/${id}`, {
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
            <DropdownMenu>
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



"use client";

import { useEffect, useState } from "react";
import SkeletonBlog from "@/components/skeleton/blogs_skeletons";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null); // Initialize as null for a single object
  const [loading, setLoading] = useState(true);
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

"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SkeletonCard from "@/components/skeleton/popular_posts_skeleton";

async function fetchBlogs() {
  const response = await fetch("https://omari-john-paul.vercel.app/api/blog");
  
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  
  return await response.json();
}

export default function LatestPosts() {
  const { toast } = useToast();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setPosts(data.blogs);
        
        toast({
          title: "Success",
          description: "Blog posts fetched successfully.",

        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch blog posts.",
        });
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, [toast]);

  if (loading) {
    return <SkeletonCard />;
  }

  return (
    <>
      <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
        Recently Published
      </h1>
      {posts?.map((post) => (
        <article key={post.id} className="text-wrap max-w-md my-10">
          <Link href={`/blog/${post.id}`}>
            <h3 className="font-bold py-2 leading-5 hover:text-blue-400">
              {post.title}
            </h3>
          </Link>
          <p className="leading-8 my-5">{post.summary}</p>
          <p className="text-sm text-muted-foreground">
          {new Date(post.updatedAt).toLocaleDateString('en-US', {
          weekday: 'long', 
          year: 'numeric',
          month: 'long',   
          day: 'numeric', 
          })}
          </p>
        </article>
      ))}
    </>
  );
}

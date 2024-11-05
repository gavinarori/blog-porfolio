"use client"
import { useSession } from 'next-auth/react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";
import TopCatogories from "@/components/home/top-categories";
import { MainNav } from "@/components/main-nav";
import AddBlog from "../add/page";

export default function All() {
  const { data: session } = useSession(); 

  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>
        <div className="h-screen ">
          {session ? (
            <Dialog>
              <DialogTrigger>
                <Button variant="outline">
                  Add a blog
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="">
                <AddBlog/>
              </DialogContent>
            </Dialog>
          ) : (
            <p className="">Please log in to add a blog.</p>
          )}

          <div className="mt-4">
            <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
            <TopCatogories />
          </div>
        </div>
      </main>
    </Container>
  );
}

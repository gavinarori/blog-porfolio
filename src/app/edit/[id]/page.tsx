"use client";

import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef } from "react";

type UpdateBlogParams = {
  title: string;
  description: string;
  summary: string;
  id: string;
};

const updateBlog = async (data: UpdateBlogParams) => {
  const res = fetch(`https://omari-john-paul.vercel.app/api/blog/${data.id}`, {
    method: "PUT",
    body: JSON.stringify({ title: data.title, summary: data.summary , description: data.description }),
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};


const getBlogById = async (id: string) => {
  const res = await fetch(`https://omari-john-paul.vercel.app/api/blog/${id}`);
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
    if (titleRef.current && descriptionRef.current && summaryRef.current) {
     
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

export default EditBlog;
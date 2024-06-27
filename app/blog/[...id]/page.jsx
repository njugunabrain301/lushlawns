import ECommerceForm from "@/components/ECommerceForm";
import {
  FormatQuoteOutlined,
  LocationOn,
  MailOutline,
  Phone,
} from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";
import data from "@/utils/posts";
import Link from "next/link";
import styles from ".././styles.module.css";

export const runtime = "edge";

export default function page({ params }) {
  const { posts } = data;
  let values = params.id;
  let id = values[0];
  let post = posts[posts.length - 1];
  posts.map((p) => {
    if (p.id == id) post = p;
  });

  return (
    <div className="mb-20">
      <div className="w-[112%] max-h-[40vh] overflow-hidden relative ml-[-6%]">
        <Image
          src={post.image}
          alt="Blog Banner"
          width={1000}
          height={100}
          className="w-[100%] object-cover max-h-[40vh]"
        />
        <div className="absolute w-[100%] h-[100%] bg-[#00000075] px-1 sm:p-2 md:p-3 lg:p-4 top-0 left-0 flex items-center justify-center text-white text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-center">
          {post.title}
        </div>
      </div>
      <div className="italic w-[80%] mx-auto my-14">
        <h2 className="text-xl md:text-2xl">Summary</h2> <FormatQuoteOutlined />{" "}
        {post.summary}
      </div>
      <div className={"mb-16 " + styles.blog}>
        <Markdown>{post.content}</Markdown>
      </div>
      <div>
        <h3 className="text-2xl font-black">Continue Reading...</h3>
        <ul className="list-disc ml-8">
          {posts
            .filter((p) => p.id !== post.id)
            .map((p) => (
              <li key={p.id}>
                <Link href={"/blog/" + p.id + "/" + p.title}>{p.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

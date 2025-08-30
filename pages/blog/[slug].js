import React from "react";
import { useRouter } from "next/router";
import posts from "../../data/posts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-[#FE0000]">Post no encontrado</h2>
          <button className="mt-6 px-6 py-2 border rounded-full" onClick={() => router.push("/Blog")}>Volver al Blog</button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen py-16">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-xl mb-8" />
          <h1 className="text-4xl font-extrabold mb-4 text-[#FE0000]">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <img src="/avatar.png" alt={post.author} className="w-6 h-6 rounded-full" />
            <span>{post.author}</span>
            <span>-</span>
            <span>{post.date}</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full ml-2">{post.category}</span>
          </div>
          <div className="text-lg text-gray-700 mb-6">{post.description}</div>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 border rounded-full font-semibold hover:bg-[#FE0000] hover:text-white transition" onClick={() => router.push("/Blog")}>Volver al Blog</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

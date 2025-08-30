import React, { useState } from "react";

const categories = [
  { name: "All", count: 10 },
  { name: "Health", count: 3 },
  { name: "Lifestyle", count: 1 },
  { name: "Travel", count: 3 },
  { name: "Technology", count: 2 },
  { name: "Culture", count: 1 },
];

const posts = [
  {
    title: "Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life",
    description:
      "In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.",
    author: "Ryna Kenter",
    date: "Aug 24 2023",
    category: "Health",
    image: "/blog1.jpg",
    badge: "PRO",
  },
  {
    title: "Culinary Expeditions: Tasting the World's Flavors in the Heart of Local Culture",
    description:
      "In a world filled with constant noise and distractions the allure of a simpler lifestyle beckons like a soothing whisper.",
    author: "Ryna Kenter",
    date: "Aug 24 2023",
    category: "Health",
    image: "/blog2.jpg",
  },
  {
    title: "Holistic Harmony: Nurturing Mind, Body, and Spirit for Optimal Wellness",
    description:
      "In a world filled with constant noise and distraction the allure of a simpler lifestyle beckons like a soothing whisper.",
    author: "Ryna Kenter",
    date: "Aug 24 2023",
    category: "Health",
    image: "/blog3.jpg",
  },
];

export default function BlogCategorySection() {
  const [activeCategory, setActiveCategory] = useState("Health");
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center animate-fade-in">
      <h2 className="text-4xl font-bold mb-2 text-center">Browse by Category</h2>
      <p className="text-gray-500 mb-8 text-center">Select a category to see more related content</p>
      <div className="flex gap-4 mb-10 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`px-6 py-2 rounded-full border font-semibold transition-all ${
              activeCategory === cat.name
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat.name} ({cat.count.toString().padStart(2, "0")})
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 w-full max-w-5xl">
        {filteredPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-0 flex flex-col overflow-hidden">
            <div className="relative w-full h-56 bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full rounded-t-xl"
              />
              {post.badge && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{post.badge}</span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-2 leading-tight hover:underline cursor-pointer">{post.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{post.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <img src="/avatar.png" alt={post.author} className="w-6 h-6 rounded-full" />
                <span>{post.author}</span>
                <span>-</span>
                <span>{post.date}</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full ml-2">{post.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="px-6 py-3 border rounded-full font-semibold hover:bg-gray-100 transition">Browse all Posts</button>
    </section>
  );
}

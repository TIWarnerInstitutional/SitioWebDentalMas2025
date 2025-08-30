import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import posts from "../data/posts";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeTag, setActiveTag] = useState("");
  const [sliderIdx, setSliderIdx] = useState(0);
  const tags = Array.from(new Set(posts.flatMap(post => post.tags || [])));

  // Filtrar por búsqueda, categoría y tag
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = search.trim() === "" || post.title.toLowerCase().includes(search.toLowerCase()) || post.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
    const matchesTag = activeTag === "" || (post.tags && post.tags.includes(activeTag)) || post.title.toLowerCase().includes(activeTag.toLowerCase()) || post.description.toLowerCase().includes(activeTag.toLowerCase());
    return matchesSearch && matchesCategory && matchesTag;
  });
  return (
    <>
      <Header />
      <main className="bg-[#F7FAFC] min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-16 flex flex-col items-center justify-center bg-white border-b border-[#fe0000] relative">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center text-[#fe0000] mb-4 tracking-tight">Minimalismo Digital Blog</h1>
          <p className="text-xl text-black text-center mb-8">Ideas, guías y opinión para una vida digital más simple y productiva.</p>
        </section>
        <div className="container mx-auto flex flex-col md:flex-row gap-10 px-4 md:px-0">
          {/* Sidebar */}
          <aside className="md:w-1/4 w-full md:mt-16 mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="relative mb-4">
                <input
                  type="text"
                  value={search}
                  onChange={e => {
                    setSearch(e.target.value);
                    setActiveTag("");
                  }}
                  placeholder="Buscar artículo..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <span className="absolute right-4 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                </span>
              </div>
              <h4 className="font-bold text-lg mb-3 text-[#fe0000]">Categorías</h4>
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  key="Todos"
                  onClick={() => setActiveCategory("Todos")}
                  className={`px-5 py-2 rounded-full border font-semibold text-sm transition-all duration-200 ${activeCategory === "Todos" ? "bg-[#fe0000] text-white border-[#fe0000] shadow scale-105" : "bg-white text-[#fe0000] border-[#fe0000] hover:bg-red-50"}`}
                >
                  Todos
                </button>
                {[...new Set(posts.map(p => p.category))].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full border font-semibold text-sm transition-all duration-200 ${activeCategory === cat ? "bg-[#fe0000] text-white border-[#fe0000] shadow scale-105" : "bg-white text-[#fe0000] border-[#fe0000] hover:bg-red-50"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <h4 className="font-bold text-lg mb-3 text-[#fe0000]">Tags</h4>
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className={`px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 cursor-pointer transition ${activeTag === tag ? "ring-2 ring-blue-400 bg-blue-200" : ""}`}
                    onClick={() => {
                      if (activeTag === tag) {
                        setActiveTag("");
                      } else {
                        setActiveTag(tag);
                        setSearch("");
                      }
                    }}
                  >{tag}</span>
                ))}
              </div>
            </div>
          </aside>
          {/* Main Content */}
          <div className="md:w-3/4 w-full flex flex-col gap-12">
            {/* Artículos Recientes */}
            <section className="w-full">
              <h3 className="text-2xl font-bold text-[#fe0000] mb-8">Artículos recientes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredPosts
                  .filter(post => activeCategory === "Todos" || post.category === activeCategory)
                  .slice(0, 3)
                  .map((post, idx) => (
                  <Link key={idx} href={`/blog/${post.slug}`} legacyBehavior>
                    <a className="group bg-white rounded-3xl shadow-xl border border-[#fe0000] flex flex-col overflow-hidden hover:scale-[1.04] hover:shadow-2xl transition-transform duration-300">
                      <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img
                          src="/FondoPrincipal.jpg"
                          alt={post.title}
                          className="object-cover w-full h-full rounded-t-3xl group-hover:brightness-95 transition duration-300"
                        />
                      </div>
                      <div className="p-7 flex flex-col flex-1">
                        <h3 className="font-extrabold text-xl md:text-2xl mb-3 leading-tight text-[#fe0000] group-hover:text-black transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-black mb-6 flex-1 text-base md:text-lg">{post.description}</p>
                        <div className="flex items-center gap-3 mt-auto">
                          <img
                            src="/LogoDentalMas.png"
                            alt={post.author}
                            className="w-8 h-8 rounded-full border border-[#fe0000] shadow"
                          />
                          <span className="text-base text-black font-semibold">{post.author}</span>
                          <span className="text-sm text-gray-400">• {post.date}</span>
                          <span className="bg-[#fe0000] text-white px-3 py-1 rounded-full text-xs font-semibold ml-auto">{post.category}</span>
                        </div>
                        <Link href={`/blog/${post.slug}`} className="mt-4 inline-block px-5 py-2 bg-[#fe0000] text-white rounded-full font-semibold shadow hover:bg-black transition text-center w-fit">Leer más</Link>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </section>
            {/* Posts por Categoría */}
            {(() => {
              const cats = [...new Set(posts.map(p => p.category))];
              if (activeCategory !== "Todos") {
                // Si hay categoría seleccionada, NO mostrar la sección por categoría (ya se muestran en principal)
                return null;
              }
              // Si está 'Todos', muestra todas las categorías
              return cats.map(cat => (
                <section key={cat} className="w-full">
                  <h3 className="text-xl font-bold text-[#002B5C] mb-6 mt-2">{cat}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {posts.filter(p => p.category === cat).slice(0, 4).map((post, idx) => (
                      <Link key={idx} href={`/blog/${post.slug}`} legacyBehavior>
                        <a className="group bg-white rounded-2xl shadow-lg border border-[#fe0000] flex flex-col overflow-hidden hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
                          <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                            <img
                              src="/FondoPrincipal.jpg"
                              alt={post.title}
                              className="object-cover w-full h-full rounded-t-2xl group-hover:brightness-95 transition duration-300"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <h4 className="font-bold text-lg mb-2 leading-tight text-[#fe0000] group-hover:text-black transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-black mb-4 flex-1 text-sm md:text-base">{post.description}</p>
                            <div className="flex items-center gap-2 mt-auto">
                              <img
                                src="/LogoDentalMas.png"
                                alt={post.author}
                                className="w-6 h-6 rounded-full border border-[#fe0000]"
                              />
                              <span className="text-sm text-black">{post.author}</span>
                              <span className="text-xs text-gray-400">• {post.date}</span>
                              <span className="bg-[#fe0000] text-white px-2 py-1 rounded-full text-xs font-semibold ml-auto">{post.category}</span>
                            </div>
                            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block px-4 py-1 bg-[#fe0000] text-white rounded-full font-semibold shadow hover:bg-black transition text-center w-fit text-xs">Leer más</Link>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </section>
              ));
            })()}
          </div>
        </div>
      </main>
      <Footer />
    </>

  );
};

export default Blog;


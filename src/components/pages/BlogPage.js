export default function BlogPage() {
  return (
    <div className="blogPage text-slate-200">
      <section className="blogHeader bg-gradient-to-b from-slate-900 from-5% via-slate-800 to-slate-900 to-90%">
        <div className="max-w-5xl mx-auto px-8 pt-40 pb-24 relative">
          <h3 className="text-6xl uppercase text-amber-400 font-medium tracking-wider">
            Blogs
          </h3>
          <p className="text-2xl pt-3">Front-End Skills and Experience</p>
          <p className="text-8xl uppercase text-slate-500 opacity-10 font-medium tracking-widest absolute top-16 left-20">
            Blogs
          </p>
        </div>
      </section>
      <section className="blogContent bg-gradient-to-b from-slate-800 to-slate-900 to-90%">
        <div className="max-w-5xl mx-auto text-xl px-8 py-24">
          <p>Blog Page</p>
        </div>
      </section>
    </div>
  );
}

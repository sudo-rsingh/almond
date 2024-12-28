export default function Home() {
  return (
    <main style={{ fontFamily: "monospace", padding: "20px" }}>
      <h1>Rakshit Personal Almond</h1>
      <p>Welcome to my personal website! Explore my blog, projects, and more.</p>
      <nav>
        <a href="/about" style={{ marginRight: "10px" }}>About</a>
        <a href="/blog" style={{ marginRight: "10px" }}>Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </main>
  );
}

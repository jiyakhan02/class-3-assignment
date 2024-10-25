import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between bg-blue-400 text-[24px] px-8">
      <ul className="flex gap-6 items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
        <Link href="/article">
          <li>Article</li>
        </Link>
        <Link href="/public/gallery">
          <li>Gallery</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;

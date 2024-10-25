import Link from "next/link";

function Footer() {
  return (
    <div className="items-end bg-blue-400 flex justify-center gap-6 px-10 ">
      <ul>
        <Link href="/terms">
          <li>Terms & Condition</li>
        </Link>
        <Link href="/terms">
          <li>Privacy and Policy</li>
        </Link>
      </ul>
      <p>© 2024 Quaid-e-Azam Blog</p>
    </div>
  );
}

export default Footer;

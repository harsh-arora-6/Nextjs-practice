import React from "react";
import Link from "next/link";
// These rounting are only for client side routing
const Page = () => (
  <div>
    <h1>Note Index Path</h1>
    <Link href="/notes/[id]" as={`/notes/1`}>
      <a>Note 1</a>
    </Link>
  </div>
);
export default Page;

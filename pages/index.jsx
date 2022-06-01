import React from "react";
import Link from "next/link";
import styles from "../src/components/styles.module.css";
/**
 * Page navigation
 * put path relative to pages in href
 */

const Page = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
      <a>Link</a>
    </Link>
  </div>
);
export default Page;

import React from "react";
import { useRouter } from "next/router";
// /notes/1/2/3/4 .. can go till whatever u want
// called catch all routes
// used when we want same layout for further pages so we don't need to generate web page for each id
const Page = () => {
  const router = useRouter();

  const { params } = router.query;
  console.log(params);
  return <h1>Note </h1>;
};
export default Page;

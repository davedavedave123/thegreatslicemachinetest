import React from "react";
import { useRouter } from "next/router";

import Button from "../components/Button";

export default function Whoops() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Whoops!</h1>
      <div>We don't know what happened there.</div>
      <div className="mb-10">This page doesn't seem to exist.</div>
      <div>
        <Button title="BACK TO SAFETY" onClick={() => router.back()} />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Layout } from "@/components";
import "@/styles/globals.scss";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import { title } from "process";
import React from "react";

export const metadata = {
  title: "threads",
  description: "A Next.js 13 Meta Threads Application",
};
const inter = Inter({subsets:['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
   <html lang="eng">
<body className={`${inter.className} bg-dark-1`}>
    {children}
</body>
   </html>
  </ClerkProvider>
  )
}

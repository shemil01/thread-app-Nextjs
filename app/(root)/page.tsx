import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <main>
      <UserButton afterSignOuturl="/" />
    </main>
  );
}

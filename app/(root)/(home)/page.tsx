import { UserButton } from "@clerk/nextjs";
function Home() {
  return (
    <div>
      <h1>Vickoman APP</h1>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Home;

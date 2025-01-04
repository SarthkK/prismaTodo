import ButtonBW from "../components/ButtonBW";

function Home() {
  return (
    <div className="flex min-h-screen flex-col w-screen">
      <nav className="border-b-4 border-black py-8 px-8 flex justify-between items-center">
        <p className="text-xl font-bold">THE TODO</p>
        <div className="flex gap-2">
          <ButtonBW text="LOGIN" to="/login" />
          <ButtonBW text="SIGNUP" to="/signup" />
        </div>
      </nav>
      <main className="w-screen flex-grow bg-slate-400 flex flex-col gap-8 items-center justify-center">
        <p className="text-7xl font-extrabold">
          The{" "}
          <span className="bg-gradient-to-r from-slate-600 to-green-800 bg-clip-text text-transparent">
            Next-Gen
          </span>{" "}
          TODO App
        </p>
        <ButtonBW to="/signup" text="GET STARTED" />
      </main>
    </div>
  );
}

export default Home;

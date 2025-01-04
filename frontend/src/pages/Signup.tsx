export default function Signup() {
  return (
    <div className="bg-slate-400 flex justify-center items-center h-screen">
      <div className="border-2 border-black rounded-xl p-8 bg-white flex flex-col">
        <p className="text-2xl font-medium text-center tracking-wide pt-5 pb-9 underline underline-offset-8">
          SIGN UP
        </p>
        <input
          className="border-b border-gray-400 text-2xl outline-none p-2"
          type="text"
          placeholder="E-mail"
        />
        <input
          className="border-b border-gray-400 text-2xl outline-none p-2"
          type="password"
          placeholder="Password"
        />
        <button
          className="border-2 border-black rounded-md mt-8 bg-slate-300 py-1 font-medium tracking-wider hover:bg-slate-400"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

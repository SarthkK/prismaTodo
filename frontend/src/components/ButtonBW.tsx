import { useNavigate } from "react-router-dom";

type buttonArgs = {
  text: string;
  to: string;
};

function ButtonBW({ text, to }: buttonArgs) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(to);
  }
  return (
    <div
      className="border-black bg-white border-2 rounded-lg px-3 py-2 cursor-pointer hover:bg-slate-300 hover:font-bold"
      onClick={handleClick}
    >
      {text}
    </div>
  );
}

export default ButtonBW;

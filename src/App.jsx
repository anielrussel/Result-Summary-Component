import "./App.css";
import memory from "../../assets/images/icon-memory.svg";
import verbal from "../../assets/images/icon-verbal.svg";
import visual from "../../assets/images/icon-visual.svg";

function App() {
  return (
    <div className="md:mt-[10%] md:mx-[30%] md:flex md:shadow-xl rounded-2xl">
      <div className="bg-light-slate-blue h-auto w-full md:w-[50%] flex-col content-center items-center text-center py-5 rounded-b-[20px] md:rounded-2xl">
        <h1 className="text-white/80 font-medium pb-5">Your Result</h1>
        <div className="bg-violet-blue md:mx-[28%] mx-[38%] rounded-full p-5 md:p-8 mt-7 cursor-pointer hover:bg-blue-600">
          <h1 className="text-white font-bold text-5xl pb-2">76</h1>
          <p className="text-white/60 font-semibold text-sm">of 100</p>
        </div>
        <div className="md:px-14 px-[25%] mt-7">
          <h1 className="text-white text-xl font-semibold pt-5">Great</h1>
          <p className="text-white/80 text-md">
            You scored higher than 65% of the people who have taken this test.
          </p>
        </div>
      </div>
      <div className="px-8 py-5 md:w-[50%] flex-col content-center items-center text-center">
        <h1 className="text-dark-gray-blue font-bold pb-5 text-left">Summary</h1>
        <div className="bg-light-red flex justify-between rounded-md p-3 mb-3 cursor-pointer hover:bg-red-200">
          <div className="flex gap-2">
            <img src={memory} alt="" />
            <h1 className="text-light-red1 font-semibold">Reaction</h1>
          </div>
          <div>
            <h1 className="text-black"><span className="font-bold">80 </span>/ 100</h1>
          </div>
        </div>
        <div className="bg-orangey-yellow flex justify-between rounded-md p-3 mb-3 cursor-pointer hover:bg-yellow-200">
          <div className="flex gap-2">
            <img src={memory} alt="" />
            <h1 className="text-orangey-yellow1 font-semibold">Memory</h1>
          </div>
          <div>
            <h1 className="text-black"><span className="font-bold">92 </span>/ 100</h1>
          </div>
        </div>
        <div className="bg-green-teal flex justify-between rounded-md p-3 mb-3 cursor-pointer hover:bg-green-200">
          <div className="flex gap-2">
            <img src={verbal} alt="" />
            <h1 className="text-green-teal1 font-semibold">Verbal</h1>
          </div>
          <div>
            <h1 className="text-black"><span className="font-bold">61 </span>/ 100</h1>
          </div>
        </div>
        <div className="bg-cobalt-blue flex justify-between rounded-md p-3 mb-3 cursor-pointer hover:bg-blue-300">
          <div className="flex gap-2">
            <img src={visual} alt="" />
            <h1 className="text-cobalt-blue1 font-semibold">Visual</h1>
          </div>
          <div>
            <h1 className="text-black"><span className="font-bold">72 </span>/ 100</h1>
          </div>
        </div>
        <button className="bg-dark-gray-blue text-white font-semibold p-3 rounded-full w-full my-5 hover:scale-110 ease-in duration-200">Continue</button>
      </div>
    </div>
  );
}

export default App;

import { FC } from "react";
import { Canvas } from "../../components/canvas";
export const MessengerView: FC = ({}) => {
  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Messenger
        </h1>
        {/* CONTENT GOES HERE */}
          <Canvas/>
          </div>
        </div>
  );
};

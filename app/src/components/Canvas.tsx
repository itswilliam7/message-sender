import { FC } from "react";
import { SendMessage } from "../components/SendMessage";


export const Canvas: FC = (props) => {
  return (
    <div className="text-center flex">
      <div>
        <canvas
          className="canvas bg-white"
          id="canvas"
          width="640"
          height="640"
        />
      </div>
      <div className="">
        <p>Recipient's SOL Address:</p>
        <input
          className="text-black p-1 m-2"
          type="text"
          id="address"
          placeholder="SOL Address..."
        />
        <p>Your Message</p>
        <input
          className="text-black p-1 m-2"
          type="text"
          id="message"
          placeholder="Your Message..."
        />
        <SendMessage />
      </div>
    </div>
  );
};

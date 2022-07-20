import { FC } from "react";
import { SendMessage } from "../components/SendMessage";

export const Canvas: FC = (props) => {
  const onWriteMessage = (e: any) => {
    var canvas: any = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(e.target.value, canvas.width / 2, canvas.height / 2);
  };

  return (
    <div className="text-center flex">
      <div>
        <canvas
          className="canvas bg-white"
          id="myCanvas"
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
        <p>Your Message1</p>
        <input
          className="text-black p-1 m-2"
          type="text"
          id="message"
          placeholder="Your Message..."
          onChange={(e) => onWriteMessage(e)}
        />
        <SendMessage />
      </div>
    </div>
  );
};

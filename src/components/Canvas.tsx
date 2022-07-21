import React, { useEffect } from "react";
import { SendMessage } from "../components/SendMessage";

export const Canvas: React.FC = (props) => {
  const canvas = React.useRef<any>();

  const printAt = (context, text, x, y, lineHeight = 30, fitWidth) => {
    fitWidth = fitWidth || 0;
    if (fitWidth <= 0) {
      context.fillText(text, x, y);
      return;
    }
    for (var idx = 1; idx <= text.length; idx++) {
      var str = text.substr(0, idx);
      if (context.measureText(str).width > fitWidth) {
        context.fillText(text.substr(0, idx - 1), x, y);
        printAt(
          context,
          text.substr(idx - 1),
          x,
          y + lineHeight,
          lineHeight,
          fitWidth
        );
        return;
      }
    }
    context.fillText(text, x, y);
  };

  const set_Image = () => {
    var ctx = canvas.current.getContext("2d");
    let base_image = new Image();
    base_image.src = "nft.png";
    ctx.drawImage(
      base_image,
      canvas.current.width / 2,
      canvas.current.height / 2
    );
  };

  const onWriteMessage = (e: any) => {
    var ctx = canvas.current.getContext("2d");
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    //  clear letters
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    // image set
    if (e.target.value !== "") {
      set_Image();
    }
    //  set letters
    printAt(
      ctx,
      e.target.value,
      canvas.current.width / 2,
      canvas.current.height / 2,
      30,
      canvas.current.width
    );
  };

  return (
    <div className="text-center flex">
      <div>
        <canvas
          ref={canvas}
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
        <p>Your Message</p>
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

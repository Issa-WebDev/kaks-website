import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import AnimatedElement from "./AnimatedElement";

const QRCodeGenerator = ({ url }) => {
  return (
    <div className="flex flex-col dark:bg-[#222] items-center justify-center pb-4 space-y-4">
      <AnimatedElement>
        <h2 className="text-lg font-bold dark:text-white">
          Scannez le QR Code pour visiter notre site
        </h2>
      </AnimatedElement>
      <AnimatedElement>
        <QRCodeCanvas
          value={url}
          size={200}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"H"}
          includeMargin={true}
        />
      </AnimatedElement>
      <AnimatedElement>
        <p className="text-sm text-gray-600 dark:text-white">{url}</p>
      </AnimatedElement>
    </div>
  );
};

export default QRCodeGenerator;

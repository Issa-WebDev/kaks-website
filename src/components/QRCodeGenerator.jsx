import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const url = "https://kaks-gamma.vercel.app/";

const QRCodeGenerator = ({ url }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-lg font-bold">
        Scannez le QR Code pour visiter notre site
      </h2>
      <QRCodeCanvas
        value={url}
        size={200}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"H"}
        includeMargin={true}
      />
      <p className="text-sm text-gray-600">{url}</p>
    </div>
  );
};

export default QRCodeGenerator;

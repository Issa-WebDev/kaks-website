import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = ({ url }) => {
  return (
    <div className="flex flex-col items-center justify-center pb-4 space-y-4">
      <h2 className="text-lg font-bold" data-aos="fade-right">
        Scannez le QR Code pour visiter notre site
      </h2>
      <QRCodeCanvas
        value={url}
        size={200}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"H"}
        includeMargin={true}
        data-aos="fade-right"
      />
      <p className="text-sm text-gray-600" data-aos="fade-right">
        {url}
      </p>
    </div>
  );
};

export default QRCodeGenerator;

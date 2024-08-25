import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

function DownloadBtn() {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/SreekeshKPrabhuResume.pdf";
    link.download = "Sreekesh_K_Prabhu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloaded(true);

    const id = setTimeout(() => {
      setIsDownloaded(false);
    }, 5 * 1000);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);

  return (
    <div className="flex gap-5 items-center justify-center">
      <button
        className={`mybtn grid h-10 place-items-center text-center ${
          isDownloaded ? "opacity-50" : "hover:scale-105"
        } px-5 select-none`}
        onClick={handleDownload}
        disabled={isDownloaded}
      >
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        <span className="font-popins text-xs md:text-base uppercase font-medium select-none">
          {isDownloaded ? "Downloaded" : "Download Resume"}
        </span>
      </button>
      {isDownloaded && <FaCheck size={14} color="#4CAF50" />}
    </div>
  );
}

export default DownloadBtn;

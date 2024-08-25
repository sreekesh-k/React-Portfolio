import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { FaCheck } from "react-icons/fa";

function DownloadBtn() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    const downloaded = Cookies.get("resumeDownloaded");
    if (downloaded) {
      setIsDownloaded(true);
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/SreekeshKPrabhuResume.pdf";
    link.download = "Sreekesh_K_Prabhu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloaded(true);
    Cookies.set("resumeDownloaded", "true", { expires: 1 / 24 });
  };
  return (
    <>
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
        <p className="text-[.5rem] font-roboto">20 Downloads</p>
      </div>
     
    </>
  );
}

export default DownloadBtn;

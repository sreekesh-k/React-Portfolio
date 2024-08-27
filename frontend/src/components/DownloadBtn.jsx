import React, { useState, useEffect } from "react";
import { FaCheck, FaSpinner, FaExclamationCircle } from "react-icons/fa";

function DownloadBtn() {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleDownload = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(
        `${import.meta.env.REACT_APP_PUBLIC_API}/asdasdasda/`
      );

      if (!response.ok) {
        throw new Error("Failed to download");
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Sreekesh_K_Prabhu_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      setIsDownloaded(true);
      setIsLoading(false);

      const id = setTimeout(() => {
        setIsDownloaded(false);
      }, 5 * 1000);
      setTimeoutId(id);
    } catch (error) {
      console.error("Error downloading file:", error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);

  return (
    <>
      <div className="flex gap-3 xl:gap-5 items-center justify-center">
        <button
          className={`mybtn py-2 h-10 flex gap-1 items-center justify-center text-center ${
            isDownloaded || isLoading ? "opacity-50" : "hover:scale-105"
          } px-5 select-none`}
          onClick={handleDownload}
          disabled={isDownloaded || isLoading}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {isLoading ? (
            <FaSpinner className="animate-spin" size={14} />
          ) : (
            <span> </span>
          )}
          <span className="font-popins text-xs xl:text-base uppercase font-medium select-none">
            {isDownloaded ? "Downloaded" : ""}
            {isLoading ? "Downloaded" : ""}
            {!isLoading && !isDownloaded ? "Download Resume" : ""}
          </span>
        </button>
        {isDownloaded && <FaCheck size={14} color="#4CAF50" />}
        {isError && (
          <>
            <FaExclamationCircle size={14} color="#F44336" />{" "}
            <span className="text-[.5rem] xl:text-xs font-roboto">
              An error occurred, please try again!
            </span>
          </>
        )}
      </div>
    </>
  );
}

export default DownloadBtn;

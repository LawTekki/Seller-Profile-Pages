import React from "react";
import styles from "./Video.module.css";

export const Video = () => {
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setVideoSrc(url);

      // Try to extract a frame from the video as the poster
      const video = document.createElement('video');
      video.src = url;
      video.crossOrigin = 'anonymous';
      video.currentTime = 1;
      video.onloadeddata = () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageUrl = canvas.toDataURL('image/png');
          setPoster(imageUrl);
        }
      };
    }
  };
  const [videoSrc, setVideoSrc] = React.useState(
    "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/2462c91d9fe2e9f528bb2158d02a93fc96a98cb2?placeholderIfAbsent=true"
  );
  const [poster, setPoster] = React.useState(
    "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/2462c91d9fe2e9f528bb2158d02a93fc96a98cb2?placeholderIfAbsent=true"
  );

  return (
    <div className={styles.videoContainer}>
      <div
        // Mobile: completely flush; md+: your original offset and min-height + outer padding
        className="
          relative
          md:top-[-18px] md:min-h-[370px] md:px-0
        "
      >
        {/* Aspect‑ratio wrapper */}
        <div
          className="
            relative w-full overflow-hidden rounded-lg
            // Mobile: 16:9 box; md+: 897×364 ratio
            pb-[56.25%]
            md:pb-[40.6%]
            // ensure no extra mobile min-height
            md:min-h-[0]
            shadow-xl
          "
          style={{
            border: "1px solid #ccc",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.10)",
          }}
        >
          <video
            src={videoSrc}
            poster={poster}
            controls
            className="absolute inset-0 w-full h-full object-cover"
          />
          <label
            htmlFor="video-upload"
            className="
              absolute top-1 right-1 flex items-center gap-1 px-2 py-1 text-xs
              border border-white text-white rounded-lg shadow cursor-pointer transition
              bg-transparent
              md:top-2 md:right-2 md:gap-2 md:px-3 md:py-1.5
            "
            style={{ zIndex: 2, lineHeight: 1.2 }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e5cf1325dbdd366ffd159182f6cdc4c5e49567c8?placeholderIfAbsent=true"
              className="w-4 h-4 md:w-3 md:h-3"
              alt="Change video icon"
            />
            <span>Change video</span>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleVideoChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect } from "react";

const FrameworkImageModal = ({ isOpen, onClose }) => {
  const [animating, setAnimating] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasDragged, setHasDragged] = useState(false);
  const imageRef = useRef(null);

  // Handle enter animation
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimating(true);
        });
      });
    }
  }, [isOpen]);

  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const handleClose = () => {
    setAnimating(false);
    setTimeout(() => {
      onClose();
      setImageScale(1);
      setImagePosition({ x: 0, y: 0 });
    }, 300);
  };

  const handleImageZoomToggle = (e) => {
    e.stopPropagation();
    // Skip zoom toggle if user just finished dragging
    if (hasDragged) {
      return;
    }
    if (imageScale === 1) {
      setImageScale(2);
      setImagePosition({ x: 0, y: 0 });
    } else {
      setImageScale(1);
      setImagePosition({ x: 0, y: 0 });
    }
  };

  const handleDragStart = (e) => {
    if (imageScale > 1) {
      e.preventDefault();
      setIsDragging(true);
      setHasDragged(false);
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      setDragStart({
        x: clientX - imagePosition.x,
        y: clientY - imagePosition.y,
      });
    }
  };

  const handleDragMove = (e) => {
    if (isDragging && imageScale > 1) {
      e.preventDefault();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const newX = clientX - dragStart.x;
      const newY = clientY - dragStart.y;
      // Mark as dragged if moved more than 5 pixels
      if (
        Math.abs(newX - imagePosition.x) > 5 ||
        Math.abs(newY - imagePosition.y) > 5
      ) {
        setHasDragged(true);
      }
      setImagePosition({ x: newX, y: newY });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Reset hasDragged after a short delay to allow click event to check it
    setTimeout(() => {
      setHasDragged(false);
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-8"
      onClick={handleClose}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/90 overlay-backdrop ${
          animating ? "overlay-backdrop-active" : "overlay-backdrop-enter"
        }`}
      />
      {/* Modal Content - Full screen on mobile */}
      <div
        className={`relative w-full h-full md:max-w-7xl md:w-full md:h-auto md:max-h-[90vh] overlay-content ${
          animating ? "overlay-content-active" : "overlay-content-enter"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 md:-top-0 md:-right-12 w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 text-gray-800 transition-colors shadow-lg z-20"
          aria-label="Close"
        >
          <span className="text-2xl">&#10005;</span>
        </button>

        {/* Zoom Controls */}
        <div className="absolute top-4 left-4 md:top-0 md:-left-12 flex flex-col gap-2 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setImageScale((prev) => Math.min(prev + 0.5, 3));
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 text-gray-800 transition-colors shadow-lg"
            aria-label="Zoom in"
          >
            <span className="text-xl">+</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (imageScale <= 1) {
                setImagePosition({ x: 0, y: 0 });
              } else {
                setImageScale((prev) => Math.max(prev - 0.5, 1));
              }
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 text-gray-800 transition-colors shadow-lg"
            aria-label="Zoom out"
          >
            <span className="text-xl">-</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setImageScale(1);
              setImagePosition({ x: 0, y: 0 });
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 text-gray-800 transition-colors shadow-lg text-xs font-bold"
            aria-label="Reset zoom"
          >
            1:1
          </button>
        </div>

        {/* Image Container with Pan/Zoom */}
        <div className="bg-white md:rounded-2xl shadow-2xl overflow-hidden h-full md:h-auto flex flex-col">
          <div
            className="overflow-hidden flex-1 md:max-h-[85vh] relative flex items-center justify-center"
            style={{ touchAction: imageScale > 1 ? "none" : "auto" }}
          >
            <img
              ref={imageRef}
              src={`${import.meta.env.BASE_URL}assets/framework-full.png`}
              alt="กรอบแนวคิดฉบับเต็ม"
              className={`w-full h-auto transition-transform ${isDragging ? "" : "duration-200"} ${imageScale > 1 ? "cursor-grab" : "cursor-zoom-in"} ${isDragging ? "cursor-grabbing" : ""}`}
              style={{
                transform: `scale(${imageScale}) translate(${imagePosition.x / imageScale}px, ${imagePosition.y / imageScale}px)`,
                transformOrigin: "center center",
              }}
              onClick={handleImageZoomToggle}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
              draggable={false}
            />
          </div>
          <div className="p-3 md:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 text-center flex-shrink-0">
            <p className="text-xs md:text-sm text-gray-600">
              {imageScale > 1
                ? "ลากเพื่อเลื่อนดูภาพ | คลิกเพื่อซูมออก | กดปุ่ม ESC หรือ X เพื่อปิด"
                : "คลิกที่รูปภาพเพื่อซูม | กดปุ่ม ESC หรือ X เพื่อปิด"}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              ระดับซูม: {Math.round(imageScale * 100)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameworkImageModal;

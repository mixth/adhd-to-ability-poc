import React from "react";

const LiquidBlobs = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Large blobs */}
    <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-rose-300/40 to-pink-400/30 rounded-full blur-3xl animate-blob"></div>
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-teal-300/40 to-cyan-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-300/40 to-yellow-400/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-emerald-300/30 to-teal-400/20 rounded-full blur-3xl animate-blob-slow"></div>

    {/* Medium blobs */}
    <div className="absolute top-10 left-1/3 w-48 h-48 bg-gradient-to-br from-violet-300/50 to-purple-400/30 rounded-full blur-2xl animate-blob-reverse"></div>
    <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-gradient-to-br from-blue-300/40 to-indigo-400/30 rounded-full blur-2xl animate-blob-reverse animation-delay-3000"></div>
    <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-br from-pink-300/50 to-rose-400/30 rounded-full blur-2xl animate-blob animation-delay-1000"></div>

    {/* Small accent blobs */}
    <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/60 to-teal-500/40 rounded-full blur-xl animate-float"></div>
    <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-amber-400/60 to-orange-500/40 rounded-full blur-xl animate-float animation-delay-2000"></div>
    <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-rose-400/60 to-pink-500/40 rounded-full blur-xl animate-float animation-delay-4000"></div>
  </div>
);

export default LiquidBlobs;

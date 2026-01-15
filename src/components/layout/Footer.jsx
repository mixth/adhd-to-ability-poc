import React from "react";

const Footer = () => (
  <footer className="mt-10">
    <div className="glass rounded-2xl p-6 text-center">
      <p className="text-sm text-slate-500 mb-4">สนับสนุนโดย</p>
      <div className="flex justify-center items-center gap-8 flex-wrap mb-4">
        <img
          src={`${import.meta.env.BASE_URL}assets/logo1.jpg`}
          alt="AIDS Access Foundation"
          className="h-16 object-contain"
        />
        <img
          src={`${import.meta.env.BASE_URL}assets/logo2.jpg`}
          alt="สสส."
          className="h-16 object-contain"
        />
        <img
          src={`${import.meta.env.BASE_URL}assets/YPM-logo.jpg`}
          alt="Young Policy Makers #2"
          className="h-16 object-contain"
        />
      </div>
      <p className="text-slate-400 text-sm">
        โครงการ ADHD to Ability &copy; 2569 | Young Policy Makers #2
      </p>
      <p className="text-slate-400 text-xs mt-1">ทีม A Dee H Dee</p>
    </div>
  </footer>
);

export default Footer;

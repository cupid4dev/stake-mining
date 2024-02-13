'use client'
import React from "react";

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust threshold as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="fixed w-full h-full bg-primary">
      <iframe src={isMobile ? "mobile/index.html" : "/pc/index.html"} frameBorder="0" className="iframe-content"></iframe>
    </div>
  );
}

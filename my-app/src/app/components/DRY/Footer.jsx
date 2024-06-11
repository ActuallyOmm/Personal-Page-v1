import React from "react";

function Footer() {
  return (
    <footer className="bg-customDarkPurple text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 ">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-xl font-semibold">
            Omm Bhavsar
          </a>
          <p className="text-sm">&copy; 2024 Actually Omm.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

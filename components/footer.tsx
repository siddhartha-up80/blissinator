import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Link
        className="w-full flex items-center justify-center py-3 bg-purple-50 text-sm"
        href="https://blissinator.vercel.app"
      >
        Copyright © 2023 Blissinator. All rights reserved.
      </Link>
    </div>
  );
};

export default Footer;

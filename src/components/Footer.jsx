import React from "react";

export default function FooterWithModel() {
  return (
    <footer className="py-6 text-center text-gray-500 w-full">
      © {new Date().getFullYear()} Dagimawi — All rights reserved.
    </footer>
  );
}
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Outdoor Furniture</h3>
          <Link href="#">Outdoor Chairs</Link>
          <Link href="#">Outdoor Tables</Link>
          <Link href="#">Sun Loungers</Link>
          <Link href="#">Daybeds</Link>
          <Link href="#">Outdoor Sofas</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Indoor Furniture</h3>
          <Link href="#">Indoor Chairs</Link>
          <Link href="#">Sofas</Link>
          <Link href="#">Indoor Tables</Link>
          <Link href="#">Storage Racks</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Shades & Umbrellas</h3>
          <Link href="#">High Wind Proof Umbrellas</Link>
          <Link href="#">Resort Type Umbrellas</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Custom Furniture</h3>
          <Link href="#">Custom Furniture for Hotels and Resorts</Link>
          <Link href="#">Custom Furniture for F&B Establishments</Link>
          <Link href="#">Custom Furniture for Condominiums</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Fabrics & Materials</h3>
          <Link href="#">Sunbrella Fabrics</Link>
          <Link href="#">Quick Dry Cushions</Link>
          <Link href="#">Aluminum, Steel, and Iron Components</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

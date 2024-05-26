import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Outdoor Furniture</h3>
          <Link className="hover:underline" href="#">
            Outdoor Chairs
          </Link>
          <Link className="hover:underline" href="#">
            Outdoor Tables
          </Link>
          <Link className="hover:underline" href="#">
            Sun Loungers
          </Link>
          <Link className="hover:underline" href="#">
            Daybeds
          </Link>
          <Link className="hover:underline" href="#">
            Outdoor Sofas
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Indoor Furniture</h3>
          <Link className="hover:underline" href="#">
            Indoor Chairs
          </Link>
          <Link className="hover:underline" href="#">
            Sofas
          </Link>
          <Link className="hover:underline" href="#">
            Indoor Tables
          </Link>
          <Link className="hover:underline" href="#">
            Storage Racks
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Shades & Umbrellas</h3>
          <Link className="hover:underline" href="#">
            High Wind Proof Umbrellas
          </Link>
          <Link className="hover:underline" href="#">
            Resort Type Umbrellas
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Custom Furniture</h3>
          <Link className="hover:underline" href="#">
            Custom Furniture for Hotels and Resorts
          </Link>
          <Link className="hover:underline" href="#">
            Custom Furniture for F&B Establishments
          </Link>
          <Link className="hover:underline" href="#">
            Custom Furniture for Condominiums
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Fabrics & Materials</h3>
          <Link className="hover:underline" href="#">
            Sunbrella Fabrics
          </Link>
          <Link className="hover:underline" href="#">
            Quick Dry Cushions
          </Link>
          <Link className="hover:underline" href="#">
            Aluminum, Steel, and Iron Components
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

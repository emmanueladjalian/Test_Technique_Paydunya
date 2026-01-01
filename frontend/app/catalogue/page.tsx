"use client";
import Link from 'next/link';

export default function Catalogue() {
  const product = { name: "Laptop Pro", price: "500 XOF" };

  return (
    <div className="p-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Catalogue Produits</h2>
      <div className="border p-6 rounded-xl shadow-lg w-72 text-center bg-white">
        <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center text-gray-500">Image Laptop</div>
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-blue-600 font-bold my-2">{product.price}</p>
        <Link href="/recapitulatif" className="mt-4 block bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Voir les détails
        </Link>
      </div>
    </div>
  );
}
"use client";
import Link from 'next/link';
import Footer from '../components/Footer';

const PRODUCTS = [
  { id: 1, name: "Laptop Pro", price: 500, reference: "LP-001", color: "bg-blue-100", icon: "💻" },
  { id: 2, name: "Tablet Air", price: 250000, reference: "TA-002", color: "bg-purple-100", icon: "📱" },
  { id: 3, name: "Smart Watch", price: 125000, reference: "SW-003", color: "bg-emerald-100", icon: "⌚" },
  { id: 4, name: "Casque Audio", price: 75000, reference: "CA-004", color: "bg-orange-100", icon: "🎧" },
];

export default function Catalogue() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-6xl mx-auto px-6 py-16 grow">
        <h2 className="text-4xl font-extrabold mb-12 text-slate-900">Nos Produits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="border p-6 rounded-2xl">
              <div className={`h-40 ${product.color} flex items-center justify-center text-5xl mb-4`}>
                {product.icon}
              </div>

              <h3 className="font-bold text-slate-900">{product.name}</h3>
              <p className="text-blue-600 font-bold"> 
                {product.price.toLocaleString()} XOF
              </p>

              <Link
                href={`/recapitulatif?name=${product.name}&price=${product.price}&ref=${product.reference}`}
                className="block mt-4 text-center bg-black text-white py-2 rounded-lg"
              >
                Voir les détails
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

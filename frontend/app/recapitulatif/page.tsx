"use client";
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '../components/Footer';

export default function Recapitulatif() {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const productName = searchParams.get('name')!;
  const productRef = searchParams.get('ref')!;
  const price = Number(searchParams.get('price')!);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'http://localhost:8080/api/payments/checkout',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            productName,
            productRef,
            price
            // Pas besoin d'ajouter custom_data ici, c'est le backend qui s'en charge
          }),
        }
      );

      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-slate-900">Récapitulatif</h2>

          <p className="text-slate-900"><b>Produit :</b> {productName}</p>
          <p className="text-slate-900"><b>Référence :</b> {productRef}</p>
          <p className="text-blue-600 font-bold mt-2">
            {price.toLocaleString()} XOF
          </p>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-bold"
          >
            {loading ? "Traitement..." : "🔐💳Payer avec PayDunya"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

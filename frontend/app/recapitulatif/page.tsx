"use client";
import { useState } from 'react';

export default function Recapitulatif() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/payments/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productName: "Laptop Pro",
          productRef: "LP-PRO-2025", // Pour la contrainte custom-data
          price: 500
        }),
      });

      const data = await response.json();
      if (data.url) {
        // Étape 4 : Redirection vers la page de paiement sécurisée
        window.location.href = data.url;
      } else {
        alert("Erreur lors de l'initialisation du paiement");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Le backend est-il bien lancé sur le port 8080 ?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white mt-10 shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Récapitulatif de la commande</h2>
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-lg font-medium">Laptop Pro</p>
          <p className="text-sm text-gray-500 font-mono italic">Réf: LP-PRO-2025</p>
        </div>
        <p className="text-xl font-bold">500 XOF</p>
      </div>
      <button 
        onClick={handlePayment}
        disabled={loading}
        className={`w-full py-4 text-white font-bold rounded-lg text-lg ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-800 transition-colors'}`}
      >
        {loading ? "Chargement..." : "Payer avec PayDunya"}
      </button>
    </div>
  );
}
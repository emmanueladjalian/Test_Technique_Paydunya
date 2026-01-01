"use client";
import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    
    // On vérifie simplement que les champs ne sont pas vides
    if (email.trim() !== "" && password.trim() !== "") {
      // On redirige directement vers le catalogue
      router.push('/catalogue');
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <form onSubmit={handleLogin} className="p-8 bg-white shadow-xl rounded-2xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-600">Bienvenue</h1>
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email (fictif)" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black" 
            value={email} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Mot de passe (fictif)" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black" 
            value={password} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
            required 
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Se connecter
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500 text-center italic">
          Entrez n'importe quel identifiant pour tester l'application.
        </p>
      </form>
    </div>
  );
}
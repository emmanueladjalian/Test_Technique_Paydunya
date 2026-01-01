"use client";
import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Footer from './components/Footer';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "" && password.trim() !== "") {
      router.push('/catalogue');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div className="grow flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="p-10 bg-white shadow-2xl rounded-3xl w-full max-w-md border border-slate-100">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-blue-700 tracking-tight">TechNova</h1>
            <p className="text-slate-500 mt-2 font-medium">Accédez à votre espace client en entrant n’importe quel identifiant fictif pour <b>tester l’application.</b></p>
          </div>
          
          <div className="space-y-5">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black transition-all" 
              value={email} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Mot de passe" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-black transition-all" 
              value={password} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
              required 
            />
            <button 
              type="submit" 
              style={{cursor:'pointer'}}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
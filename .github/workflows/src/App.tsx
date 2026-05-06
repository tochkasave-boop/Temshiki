import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    username: '',
    telegram: '',
    age: '',
    about: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Имитация отправки данных
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Секция с эмблемой */}
      <div className="relative overflow-hidden pt-16 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors"></div>
              <img 
                src="/images/emblem.png" 
                alt="ТЕМЩИКИ" 
                className="relative w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter italic">
            <span className="bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent">
              ТЕМЩИКИ
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-500 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            ЗАКРЫТОЕ СООБЩЕСТВО. ВХОД ТОЛЬКО ДЛЯ СВОИХ.
          </p>
        </div>
      </div>

      {/* Форма заявки */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-md mx-auto">
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">ПРИНЯТО</h3>
                <p className="text-zinc-500">Ожидай верификации. Мы напишем тебе в Telegram.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-zinc-600 hover:text-white transition-colors"
                >
                  Отправить еще раз
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">Никнейм</label>
                  <input
                    type="text"
                    name="username"
                    required
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-zinc-800/50 border border-zinc-700/30 rounded-2xl focus:outline-none focus:ring-1 focus:ring-white/30 text-white placeholder-zinc-600 transition-all"
                    placeholder="Как тебя звать?"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">Telegram</label>
                  <input
                    type="text"
                    name="telegram"
                    required
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-zinc-800/50 border border-zinc-700/30 rounded-2xl focus:outline-none focus:ring-1 focus:ring-white/30 text-white placeholder-zinc-600 transition-all"
                    placeholder="@handle"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">Возраст</label>
                  <input
                    type="number"
                    name="age"
                    required
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-zinc-800/50 border border-zinc-700/30 rounded-2xl focus:outline-none focus:ring-1 focus:ring-white/30 text-white placeholder-zinc-600 transition-all"
                    placeholder="Твой возраст"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">О себе</label>
                  <textarea
                    name="about"
                    required
                    rows={3}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-zinc-800/50 border border-zinc-700/30 rounded-2xl focus:outline-none focus:ring-1 focus:ring-white/30 text-white placeholder-zinc-600 transition-all resize-none"
                    placeholder="Чем занимаешься?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-sm rounded-2xl hover:bg-zinc-200 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? 'ОТПРАВКА...' : 'ПОДАТЬ ЗАЯВКУ'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <footer className="py-12 border-t border-zinc-900 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-700">
          TEMSHIKI PRIVATE © 2026
        </p>
      </footer>
    </div>
  );
}

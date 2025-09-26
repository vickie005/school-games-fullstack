import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const emojis = ["🎉", "⭐", "💫", "✨"];

const FloatingEmoji = ({ emoji }: { emoji: string }) => {
  const xStart = Math.random() * 100; // random start position (vw)
  const duration = 5 + Math.random() * 3; // 5–8s duration

  return (
    <motion.span
      initial={{ opacity: 0, y: "100vh", x: `${xStart}vw`, scale: 0.8 }}
      animate={{ opacity: [0, 1, 0.8, 0.7], y: "-10vh" }}
     
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="absolute text-2xl"
      style={{ left: `${xStart}vw` }}
    >
      {emoji}
    </motion.span>
  );
};

const RegisterPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [floatingEmojis, setFloatingEmojis] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
  };

   useEffect(() => {
    if (!isRegistered) return;

    const interval = setInterval(() => {
      setFloatingEmojis((prev) => [
        ...prev,
        emojis[Math.floor(Math.random() * emojis.length)],
      ]);
    }, 600); 

    return () => clearInterval(interval);
  }, [isRegistered]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Neon glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20"
      >
        {!isRegistered ? (
          <>
            <h1 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Create Account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-2 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-[0_0_15px_rgba(236,72,153,0.6)]"
              >
                Sign Up
              </button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center relative"
          >
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
              🎉 Registered Successfully!
            </h2>
            <p className="text-white/80 mb-4">
              Welcome aboard! You can now log in and start exploring.
            </p>
            <a
              href="/login"
              className="mt-6 inline-block bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:from-cyan-500 hover:to-fuchsia-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300 shadow-[0_0_15px_rgba(56,189,248,0.6)]"
            >
              Go to Login
            </a>
          </motion.div>
        )}
      </motion.div>

      {isRegistered &&
        floatingEmojis.map((emoji, index) => (
          <FloatingEmoji key={index} emoji={emoji} />
        ))}
    </div>
  );
};

export default RegisterPage;

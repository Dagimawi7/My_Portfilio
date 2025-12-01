import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

export default function ProfileCard() {
  const skills = [
    { name: "React", rating: 75 },
    { name: "Node.js", rating: 70 },
    { name: "TypeScript", rating: 68 },
    { name: "MongoDB", rating: 72 },
    { name: "Problem Solving", rating: 80 },
    { name: "Team Work", rating: 85 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 180 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-sm mx-auto perspective-1000"
    >
      {/* Card Container */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/80">

        {/* Holographic Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-30 pointer-events-none" />

        {/* Top Banner */}
        <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-sm">DT</span>
            </div>
            <span className="text-blue-900 font-bold text-sm uppercase tracking-wider">Engineer Card</span>
          </div>
          <div className="bg-blue-900 px-3 py-1 rounded-full">
            <span className="text-yellow-400 font-bold text-xs">★ 78</span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative p-4">
          {/* Photo Frame */}
          <div className="relative mx-auto w-48 h-56 mb-3">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-lg" />
            <img
              src={profile}
              alt="Dagimawi Tamrat"
              className="w-full h-full object-cover rounded-lg border-2 border-yellow-400/50"
            />
            {/* Position Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 px-4 py-1 rounded-full border-2 border-blue-900 shadow-lg">
              <span className="text-blue-900 font-bold text-xs uppercase">Full-Stack</span>
            </div>
          </div>

          {/* Name & Info */}
          <div className="text-center mb-4 mt-4">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-1 flex items-center justify-center gap-2">
              Dagimawi
              <span className="text-yellow-400">✦</span>
            </h2>
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">Tamrat</p>
            <p className="text-blue-200 text-xs mt-1">🇪🇹 Ethiopia • 2+ Years XP</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/30 text-center">
              <p className="text-yellow-400 text-xl font-bold">75</p>
              <p className="text-blue-200 text-[10px] uppercase">Code</p>
            </div>
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/30 text-center">
              <p className="text-yellow-400 text-xl font-bold">80</p>
              <p className="text-blue-200 text-[10px] uppercase">Logic</p>
            </div>
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/30 text-center">
              <p className="text-yellow-400 text-xl font-bold">72</p>
              <p className="text-blue-200 text-[10px] uppercase">Speed</p>
            </div>
          </div>

          {/* Skill Bars */}
          <div className="space-y-2">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-white text-xs font-semibold uppercase tracking-wide">{skill.name}</span>
                  <span className="text-yellow-400 text-xs font-bold">{skill.rating}</span>
                </div>
                <div className="h-2 bg-blue-950/50 rounded-full overflow-hidden border border-yellow-400/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.rating}%` }}
                    transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 mt-3">
          <div className="flex justify-between items-center text-blue-900 text-xs font-bold">
            <span>💼 Learning</span>
            <span>📧 Available</span>
            <span>🌱 Growing</span>
          </div>
        </div>

        {/* Card Number */}
        <div className="absolute top-14 right-3 bg-blue-950/80 backdrop-blur-sm px-2 py-1 rounded border border-yellow-400/50">
          <span className="text-yellow-400 text-[10px] font-mono">#001/100</span>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
    </motion.div>
  );
}

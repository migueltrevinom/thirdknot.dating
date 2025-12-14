"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Camera, CheckCircle2, ChevronRight, Search } from "lucide-react";

export default function VerifyChurch() {
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChurch, setSelectedChurch] = useState<string | null>(null);

  // Mock data for churches
  const churches = [
    { id: 1, name: "Elevation Church", address: "123 Faith Blvd, Charlotte, NC" },
    { id: 2, name: "Life.Church", address: "456 Grace Ave, Edmond, OK" },
    { id: 3, name: "Hillsong NYC", address: "789 Worship St, New York, NY" },
  ].filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <main className="min-h-screen bg-[#030014] text-white flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="p-6 flex items-center justify-between z-10">
         <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00FFFF]"></span>
             <h1 className="font-bold tracking-tight text-lg">ThirdKnot</h1>
         </div>
         <div className="text-xs font-mono text-white/50">STEP {step}/3</div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full z-10">
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
            <motion.div 
                className="h-full bg-gradient-to-r from-cyan-400 to-amber-400"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
            />
        </div>

        {/* Step 1: Find Church */}
        {step === 1 && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full"
            >
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
                        <MapPin className="w-8 h-8 text-amber-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">The Sunday Seal</h2>
                    <p className="text-white/60 text-sm">Verify your place of worship to unlock the "Gather" mode and find matches in your community.</p>
                </div>

                <div className="glass-panel p-4 rounded-xl mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input 
                            type="text" 
                            placeholder="Search for your church..." 
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-3 h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    {churches.map((church) => (
                        <button 
                            key={church.id}
                            onClick={() => setSelectedChurch(church.name)}
                            className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${selectedChurch === church.name ? 'border-amber-500/50 bg-amber-500/10' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}
                        >
                            <h3 className={`font-medium ${selectedChurch === church.name ? 'text-amber-400' : 'text-white'}`}>{church.name}</h3>
                            <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors">{church.address}</p>
                        </button>
                    ))}
                    {churches.length === 0 && (
                        <div className="text-center py-8 text-white/30 text-sm">
                            No churches found. <br/> <span className="underline cursor-pointer hover:text-white">Add yours manually?</span>
                        </div>
                    )}
                </div>

                <button 
                    disabled={!selectedChurch}
                    onClick={() => setStep(2)}
                    className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    Confirm Location
                </button>
            </motion.div>
        )}

        {/* Step 2: Location Check (Mock) */}
        {step === 2 && (
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full text-center"
            >
                <div className="w-24 h-24 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/20 relative">
                     <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping" />
                    <MapPin className="w-10 h-10 text-cyan-400" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2">Locating Sanctuary</h2>
                <p className="text-white/60 text-sm mb-8">Please ensure you are physically at <span className="text-amber-400">{selectedChurch}</span> to verify your attendance.</p>
                
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 max-w-xs mx-auto">
                    <div className="h-32 w-full bg-slate-800 rounded-lg mb-4 flex items-center justify-center text-xs text-white/20">
                        [Map Mockup]
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-cyan-400 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Within 50m Range</span>
                    </div>
                </div>

                <div className="flex gap-4">
                     <button 
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    >
                        Back
                    </button>
                    <button 
                        onClick={() => setStep(3)}
                        className="flex-1 bg-white text-black font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        I'm Here
                    </button>
                </div>
            </motion.div>
        )}

         {/* Step 3: Selfie Evidence */}
         {step === 3 && (
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full text-center"
            >
                 <div className="mb-8 relative w-full aspect-[3/4] max-h-[400px] bg-black rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center overflow-hidden group hover:border-amber-500/50 transition-colors cursor-pointer">
                    <Camera className="w-12 h-12 text-white/30 mb-4 group-hover:text-amber-400 transition-colors" />
                    <p className="text-white/40 text-sm px-8">Take a selfie in front of the church sign or stage.</p>
                     <div className="absolute bottom-4 left-0 w-full text-center">
                        <span className="text-xs bg-black/50 px-2 py-1 rounded text-white/50">Tap to Capture</span>
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-2">Seal the Knot</h2>
                 <p className="text-white/60 text-sm mb-6">This helps keep our community authentic and safe.</p>

                <button 
                    onClick={() => alert("Verification pending review!")}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    <span>Submit Verification</span>
                    <ChevronRight className="w-4 h-4" />
                </button>
            </motion.div>
        )}

      </div>
    </main>
  );
}

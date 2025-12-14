import ThreeKnot from "./components/ThreeKnot";
import Link from "next/link";
import { Mail, CheckCircle, MapPin, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative text-white overflow-x-hidden">
      {/* Fixed 3D Background */}
      <ThreeKnot />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:px-20 gap-12 md:gap-24">
        
        {/* Left Column: Brand & Visual Focus */}
        <div className="flex-1 flex flex-col items-start text-left z-10 animate-in fade-in slide-in-from-left-10 duration-1000 order-2 md:order-1">
          <div className="flex items-center space-x-3 mb-6">
             <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#00FFFF]"></span>
             <span className="h-4 w-4 rounded-full bg-white shadow-[0_0_20px_#FFFFFF] -mt-4"></span>
             <span className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_15px_#FFD700]"></span>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-amber-100 via-amber-200 to-amber-500 text-glow leading-[0.9]">
            THIRD<br/>KNOT
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-cyan-50/80 max-w-lg leading-relaxed font-light">
           The strongest relationships are triangles.<br/>
           <span className="text-amber-400 font-medium">You, Your Partner, and God.</span>
          </p>
        </div>

        {/* Right Column: Auth CTA */}
        <div className="flex-1 w-full max-w-sm z-10 animate-in fade-in slide-in-from-right-10 duration-1000 order-1 md:order-2">
           <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
             <h2 className="text-2xl font-bold mb-2 text-center">Join the Sanctuary</h2>
             <p className="text-center text-white/50 text-sm mb-8">Begin your journey to a divine connection.</p>

             <div className="flex flex-col gap-4">
                <button className="glass-panel group relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-all hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]">
                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-54.7-74.3-60.8-71.9zm-72.2-126.1c23.5-29.6 48-71 45.4-114.9-38.3 2.1-78.3 25-103.2 55-21 24.3-39.7 65.2-35.5 106.6 42.6 3.1 76.5-21.6 93.3-46.7z"/>
                    </svg>
                    <div className="text-left">
                        <div className="text-[10px] uppercase leading-none opacity-60">Download on the</div>
                        <div className="text-lg font-bold leading-none">App Store</div>
                    </div>
                </button>

                <button className="glass-panel group relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-all hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]">
                    <svg viewBox="0 0 48 48" className="w-6 h-6">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 12.01-2.19 16.03-5.9l-7.73-6c-2.15 1.45-4.92 2.3-8.3 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                    <div className="text-left">
                        <div className="text-[10px] uppercase leading-none opacity-60">Get it on</div>
                        <div className="text-lg font-bold leading-none">Google Play</div>
                    </div>
                </button>
             </div>
             
             <p className="mt-8 text-xs text-center text-white/30">
               By joining, you agree to our Terms of Faith & Service.
             </p>
           </div>
        </div>
      </section>

      {/* Explainer Section */}
      <section className="relative py-24 px-6 md:px-20 bg-black/40 backdrop-blur-md">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em] mb-4">Why ThirdKnot?</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-16 text-white leading-tight">
               Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ancient Truths</span><br/> 
               for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">Modern Believer</span>.
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <CheckCircle className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">The Sunday Seal</h4>
                  <p className="text-white/60 leading-relaxed">
                     Accountability meets community. We verify church attendance using geofencing technology, ensuring your matches truly value gathering on the Lord's Day.
                  </p>
               </div>

               <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Sparkles className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Divine Matchmaker</h4>
                  <p className="text-white/60 leading-relaxed">
                     Our AI Agent analyzes spiritual maturity, denomination, and life goals to suggest connections that strengthen your walk with Christ, not distract from it.
                  </p>
               </div>

               <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Faith-First Geolocation</h4>
                  <p className="text-white/60 leading-relaxed">
                     Don't just swipe left or right. Find people in nearby congregations and coordinate meetups at verified safe locations and church events.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonies Section (Tinder-style) */}
      <section className="py-20 px-6 md:px-20 border-t border-white/5 bg-black/60 backdrop-blur-xl">
         <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-10 text-white">Kingdom Connections</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {/* Story 1 */}
                <div className="glass-panel p-0 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform">
                    <div className="h-48 bg-slate-800 relative">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                         {/* Placeholder for Image */}
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute bottom-4 left-4 z-20 text-white px-2">
                             <h4 className="font-bold text-lg">Sarah & David</h4>
                         </div>
                    </div>
                    <div className="p-6">
                        <p className="text-white/60 text-sm mb-4">"We realized we went to sister churches just 10 miles apart. The Sunday Seal confirmed it."</p>
                        <button className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                             Read their story <span className="mb-0.5">→</span>
                        </button>
                    </div>
                </div>

                 {/* Story 2 */}
                 <div className="glass-panel p-0 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform">
                    <div className="h-48 bg-slate-800 relative">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621253073747-cf42d76aa25e?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute bottom-4 left-4 z-20 text-white px-2">
                             <h4 className="font-bold text-lg">Michael & Grace</h4>
                         </div>
                    </div>
                    <div className="p-6">
                        <p className="text-white/60 text-sm mb-4">"The AI suggested we read the same devotional. It was the perfect icebreaker."</p>
                        <button className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                             Read their story <span className="mb-0.5">→</span>
                        </button>
                    </div>
                </div>

                 {/* Story 3 */}
                 <div className="glass-panel p-0 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform">
                    <div className="h-48 bg-slate-800 relative">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute bottom-4 left-4 z-20 text-white px-2">
                             <h4 className="font-bold text-lg">John & Hannah</h4>
                         </div>
                    </div>
                    <div className="p-6">
                        <p className="text-white/60 text-sm mb-4">"ThirdKnot didn't just find me a partner, it found me a prayer warrior."</p>
                        <button className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                             Read their story <span className="mb-0.5">→</span>
                        </button>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="bg-[#020010] border-t border-white/5 pt-16 pb-8 px-6 md:px-20 text-white">
        <div className="max-w-6xl mx-auto">
            
            {/* Links Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div>
                    <h4 className="font-bold mb-6 text-lg">Legal</h4>
                    <ul className="space-y-3 text-sm text-white/50">
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Privacy Policy</li>
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Terms of Faith</li>
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Cookie Policy</li>
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Intellectual Property</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6 text-lg">Community</h4>
                    <ul className="space-y-3 text-sm text-white/50">
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Church Partners</li>
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Safety Tips</li>
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Success Stories</li>
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Destinations</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6 text-lg">Support</h4>
                    <ul className="space-y-3 text-sm text-white/50">
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Help Center</li>
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Contact Us</li>
                        <li className="hover:text-amber-400 cursor-pointer transition-colors">Prayer Request</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold mb-6 text-lg">Social</h4>
                    <div className="flex gap-4">
                        {/* Instagram */}
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                           </svg>
                        </a>
                        {/* TikTok */}
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                             <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.09v8.32c0 .41.01.82-.07 1.23-.2 1.05-.81 1.97-1.61 2.66-.97.8-2.18 1.16-3.41 1.19-1.33.02-2.65-.24-3.83-.87-1.14-.62-2.07-1.66-2.54-2.85-.47-1.18-.5-2.5-.08-3.7.43-1.25 1.32-2.31 2.45-2.92 1.06-.57 2.29-.75 3.48-.56V14.6c-.7-.14-1.45.02-2.04.46-.57.43-1.02 1.11-1.04 1.83-.02.66.33 1.26.88 1.6.53.33 1.18.42 1.79.25.61-.17 1.13-.57 1.48-1.09.34-.51.52-1.12.52-1.74V.02h-3.26z"/>
                             </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                             </svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                             <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white group-hover:text-amber-400 transition-colors">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                             </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-white/10 pt-10 pb-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <h4 className="text-2xl font-bold">Get the app!</h4>
                <div className="flex gap-4">
                    <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2 rounded-lg flex items-center gap-3 transition-colors">
                        <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
                             <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-54.7-74.3-60.8-71.9zm-72.2-126.1c23.5-29.6 48-71 45.4-114.9-38.3 2.1-78.3 25-103.2 55-21 24.3-39.7 65.2-35.5 106.6 42.6 3.1 76.5-21.6 93.3-46.7z"/>
                        </svg>
                         <div className="text-left">
                            <div className="text-[9px] uppercase leading-none opacity-60">Download on the</div>
                            <div className="text-sm font-bold leading-none">App Store</div>
                        </div>
                    </button>
                    <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2 rounded-lg flex items-center gap-3 transition-colors">
                         <svg viewBox="0 0 48 48" className="w-5 h-5">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                            <path fill="#34A853" d="M24 48c6.48 0 12.01-2.19 16.03-5.9l-7.73-6c-2.15 1.45-4.92 2.3-8.3 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                        </svg>
                         <div className="text-left">
                            <div className="text-[9px] uppercase leading-none opacity-60">Get it on</div>
                            <div className="text-sm font-bold leading-none">Google Play</div>
                        </div>
                    </button>
                </div>
            </div>

            {/* SEO Block */}
            <div className="border-t border-white/10 pt-10 text-xs text-white/30 leading-relaxed text-left">
                 <p className="mb-4">
                    Single believers, listen up: If you're looking for a marriage centered on Christ, want to start dating with intention, or just find fellowship, you need to be on ThirdKnot. With thousands of verified matches from churches across the globe, it's the place to be to meet your person. Let's be real, the dating landscape looks very different today, as most people are meeting online. With ThirdKnot, the world's most popular faith-based dating app, you have access to single men and women at your fingertips and they're all ready to meet someone like you. Whether you're non-denominational, Baptist, Catholic, or Pentecostal, ThirdKnot's here to bring you all the sparks.
                </p>
                <p>
                    There really is something for everyone on ThirdKnot. Want to get into a relationship? You got it. Trying to find some new friends in your congregation? Say no more. New kid on campus and looking to make the most of your college ministry experience? ThirdKnot helps you find your flock. ThirdKnot isn't your average dating site — it's the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.
                </p>
            </div>

            {/* Copyright Line */}
             <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/20">
                <div className="flex gap-4">
                    <span>FAQ</span>
                    <span>Safety Tips</span>
                    <span>Terms</span>
                    <span>Cookie Policy</span>
                    <span>Privacy Settings</span>
                </div>
                <div className="mt-4 md:mt-0">
                    &copy; 2025 ThirdKnot LLC, All Rights Reserved.
                </div>
             </div>

        </div>
      </footer>

    </div>
  );
}

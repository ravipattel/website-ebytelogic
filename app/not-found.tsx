"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiRadio } from "react-icons/bi";
import { GoAlert } from "react-icons/go";
import { CgLayoutGrid, CgMoveLeft } from "react-icons/cg";

export default function NotFound() {
  return (
    <div className="relative py-20 w-full flex items-center justify-center bg-[#f8faff] overflow-hidden font-sans">
      <div 
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#3078fb 1.5px, transparent 1.5px), linear-gradient(90deg, #3078fb 1.5px, transparent 1.5px)`,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="container relative z-10 px-6 mx-auto">
        <div className="relative flex flex-col items-center">
          
          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-2 border-b-2 border-[#3078fb]/20 rounded-full"
            />
            
            <div className="relative flex items-center justify-center space-x-2 md:space-x-4">
              <motion.span 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-8xl md:text-9xl font-black text-white drop-shadow-[0_10px_10px_rgba(48,120,251,0.3)] [-webkit-text-stroke:2px_#3078fb]"
              >
                4
              </motion.span>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, delay: 0.4 }}
                className="size-20 sm:size-24 md:w-32 md:h-32 bg-[#3078fb] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#3078fb]/40 rotate-12 relative overflow-hidden group"
              >
                <motion.div 
                  animate={{ y: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-full h-1 bg-white/40 z-20"
                />
                <BiRadio className="w-12 h-12 md:w-16 md:h-16 text-white animate-pulse" />
              </motion.div>

              <motion.span 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-8xl md:text-9xl font-black text-[#3078fb]"
              >
                4
              </motion.span>
            </div>

            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute top-10 right-0 bg-white border border-[#3078fb]/20 px-3 py-1 rounded-full shadow-md flex items-center gap-2"
            >
              <GoAlert className="w-4 h-4 text-[#3078fb]" />
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Signal Lost</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8 max-w-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Oops! Data Out of Reach.
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10">
              {`The page you are looking for has been moved or deleted. Our radar is scanning but it seems this coordinate doesn't exist.`}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/"
                className="relative overflow-hidden group bg-[#3078fb] text-white px-10 py-4 rounded-2xl font-bold transition-all hover:shadow-[0_20px_40px_rgba(48,120,251,0.3)] flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <CgLayoutGrid className="w-5 h-5" />
                <span>Return to Home</span>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-[#3078fb] border-2 border-[#3078fb]/10 hover:border-[#3078fb] hover:bg-white transition-all"
              >
                <CgMoveLeft className="w-5 h-5" />
                <span>Previous Step</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="text-[#3078fb]/20 font-mono text-sm space-y-1">
          <p>{`LOC: 40.7128° N`}</p>
          <p>{`ERR: PAGE_VOID_04`}</p>
          <p>{`STATUS: DISCONNECTED`}</p>
        </div>
      </div>
    </div>
  );
}
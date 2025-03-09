"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionModal: React.FC<InstructionModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-2xl max-w-md w-full mx-4 relative border border-gray-100"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex flex-col items-center space-y-6">
              {/* Animated QR Code Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-3 bg-indigo-100 rounded-lg"
              >
                <svg
                  className="w-14 h-14 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 5h4v4H5zM5 15h4v4H5zM15 5h4v4h-4zM15 15h4v4h-4zM9 3H3v6h6V3zM9 21H3v-6h6v6zM21 9h-6V3h6v6zM13 13h-2v-2h2zM13 17h-2v-2h2zM17 13h-2v-2h2zM17 17h-2v-2h2zM21 21h-6v-6h6z" />
                </svg>
              </motion.div>

              <h2 className="text-3xl font-bold text-gray-900 text-center leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  SALATECH QR CODE GENERATOR
                </span>
              </h2>

              <div className="space-y-4 text-center">
                <p className="text-gray-600 text-lg">
                  Transform your links and documents into beautiful,
                  customizable QR codes with our intuitive generator.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-800">
                    ✨ Pro Tip: Upload your logo and match colors to your brand
                    for professional results!
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-100"
              >
                Let&apos;s Get Started!
              </motion.button>

              {/* Social Link */}
              <div className="pt-6 border-t border-gray-100 w-full text-center">
                <a
                  href="https://x.com/salatech2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                  <span className="text-sm font-medium">Follow me on X</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstructionModal;

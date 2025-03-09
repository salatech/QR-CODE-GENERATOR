"use client";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

declare global {
  interface Window {
    BarcodeDetector: any;
  }
}
const metadata: Metadata = {
  title: 'QR Tools',
  description: 'Custom QR Scanner & Generator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  );
}
"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import QrGenerator from '../components/QrGenerator';

export default function Home() {
  const [scanResult, setScanResult] = useState('');

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="space-y-6">
          <QrGenerator />
        </section>
      </div>
    </main>
  );
}
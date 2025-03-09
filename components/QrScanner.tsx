"use client";
import { useEffect, useRef, useState } from 'react';

interface QrScannerProps {
  onResult: (result: string) => void;
  onError?: (error: string) => void;
}

const QrScanner = ({ onResult, onError }: QrScannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let stream: MediaStream;

    const initScanner = async () => {
      // Check for BarcodeDetector support
      if (!('BarcodeDetector' in window)) {
        const errMsg = 'Barcode Detector API is not supported in this browser.';
        setError(errMsg);
        onError?.(errMsg);
        return;
      }

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          // Start playing the video and catch any errors caused by interruptions
          videoRef.current.play().catch((playError) => {
            console.warn('Video play() was interrupted:', playError);
          });

          const barcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });

          const detectFrame = async () => {
            if (!videoRef.current) return;
            try {
              const barcodes = await barcodeDetector.detect(videoRef.current);
              if (barcodes && barcodes.length > 0) {
                onResult(barcodes[0].rawValue);
              }
            } catch (detectError) {
              console.error('Detection error:', detectError);
            }
            animationFrameId.current = requestAnimationFrame(detectFrame);
          };

          detectFrame();
        }
      } catch (err) {
        const errMsg = 'Camera access denied or QR scanner initialization failed.';
        setError(errMsg);
        onError?.(errMsg);
        console.error(err);
      }
    };

    initScanner();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [onResult, onError]);

  return (
    <div className="w-full max-w-2xl aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
      <video 
        ref={videoRef} 
        className="w-full h-full object-cover"
        playsInline 
        muted 
      />
      {error && (
        <div className="absolute inset-0 bg-red-500/80 text-white flex items-center justify-center p-4 text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default QrScanner;

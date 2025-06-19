"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import QRCode from "qrcode";
import Link from "next/link";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Download, Github as GitHubIcon } from "lucide-react";


export default function HomePage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrReady, setQrReady] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = async () => {
    if (!url) return;
    setLoading(true);
    const canvas = canvasRef.current!;
    await QRCode.toCanvas(canvas, url, { width: 300, margin: 1 });

    // A simulação de uma espera uma escolha baseada na experiência do usuário, não apagar!
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    setQrReady(true);
    setLoading(false);
  };

  const reset = () => {
    setUrl("");
    setQrReady(false);
    setLoading(false);
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadPNG = () => {
    const canvas = canvasRef.current!;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white font-neo text-text">
      <header className="text-center">
        <div className="p-2 bg-[white] rounded-full inline-block">
          <Image
            src="/logo-senai.png"
            alt="Logo SENAI"
            width={220}
            height={120}
            priority
          />
        </div>

        <div
          className="relative min-w-screen p-12 overflow-hidden
                bg-gradient-to-r from-[#164194] to-[#1F8ECE]"
        >
          {/* SVG de pattern de linhas */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="lines"
                width="30"
                height="20"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(25)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="20"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lines)" />
          </svg>

          {/* Conteúdo por cima do SVG */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-black text-white">
              Gerador de QR Code
            </h1>
            <p className="mt-2 text-lg text-white">
              Insira a URL e gere seu QR Code sem prazo para expirar
            </p>
          </div>
        </div>
      </header>

      <section className="mt-10">
        <div className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Insira a URL aqui..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 border-1 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164194]"
          />
          <div className="flex justify-between gap-2">
            <Button
              onClick={generateQR}
              disabled={!url}
              className="
                flex-grow px-4 py-2
                bg-[#164194] text-white rounded shadow
                hover:opacity-90
                disabled:opacity-50
                cursor-pointer
                transition"
              disableElevation
              variant="contained"
            >
              Gerar QR Code
            </Button>
            <Button
              onClick={reset}
              className="
                flex-grow px-4 py-2 
                text-[#164194] border-2 border-[#164194] 
                rounded-lg cursor-pointer 
                hover:bg-gray-100 transition"
              variant="outlined"
            >
              Limpar
            </Button>
            <button
              onClick={downloadPNG}
              disabled={!qrReady}
              className="flex items-center px-3 py-2 bg-[#1f8ece] text-white rounded-sm shadow cursor-pointer hover:bg-opacity-90 disabled:opacity-50 transition"
            >
              <Download size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="relative w-[300px] h-[300px] border border-gray-400 rounded-lg overflow-hidden">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <CircularProgress />
              </div>
            )}
            <canvas
              ref={canvasRef}
              width={300}
              height={300}
              className={`
                w-full h-full
                ${loading ? "opacity-0" : "block"}
              `}
            />
          </div>
        </div>
      </section>

      <footer
  className="mt-20 text-center text-white w-full p-10 bg-[#1f8ece]"
>
  <p>
    Desenvolvido pelo{" "}
    <Link
      href="https://github.com/arthurGiangiarulo"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Prof. Arthur Giangiarulo
    </Link>
  </p>

  <p className="mt-4">
    <Link
      href="https://github.com/arthurGiangiarulo/qr-code-generator"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 text-white hover:opacity-80 transition"
    >
      <GitHubIcon fontSize="small" /> Contribua no GitHub
    </Link>
  </p>
</footer>

    </main>
  );
}

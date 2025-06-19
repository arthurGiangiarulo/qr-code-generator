'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import QRCode from 'qrcode'

export default function HomePage() {
  const [url, setUrl] = useState('')
  const [qrReady, setQrReady] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateQR = async () => {
    if (!url) return
    const canvas = canvasRef.current!
    await QRCode.toCanvas(canvas, url, { width: 300, margin: 1 })
    const ctx = canvas.getContext('2d')!
    const img = new Image()
    img.src = '/logo-senai.png'
    img.onload = () => {
      const logoSize = 60
      const x = (canvas.width - logoSize) / 2
      const y = (canvas.height - logoSize) / 2
      ctx.drawImage(img, x, y, logoSize, logoSize)
      setQrReady(true)
    }
  }

  const reset = () => {
    setUrl('')
    setQrReady(false)
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const downloadPNG = () => {
    const canvas = canvasRef.current!
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = 'qrcode.png'
    link.click()
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white font-neo text-text">
      <header className="mb-8 text-center">
        <div className='p-4 bg-black rounded-full inline-block'>
          <Image
            src="/logo-senai.png"
            alt="Logo SENAI"
            width={220}
            height={120}
            priority
          />
        </div>
        <h1 className="mt-4 text-4xl font-black text-senai-primary">
          Gerador de QR Code
        </h1>
        <p className="mt-2 text-lg text-senai-accent">
          Insira a URL e gere seu QR Code com logo
        </p>
      </header>

      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Cole a URL aqui..."
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="w-full p-3 border-2 border-senai-primary rounded-md focus:outline-none focus:ring-2 focus:ring-senai-accent"
        />
        <div className="flex justify-between">
          <button
            onClick={generateQR}
            disabled={!url}
            className="flex-grow mr-2 px-4 py-2 bg-senai-accent text-white rounded-xl shadow hover:bg-opacity-90 disabled:opacity-50 transition"
          >
            Gerar
          </button>
          <button
            onClick={reset}
            className="flex-grow mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-100 transition"
          >
            Resetar
          </button>
          <button
            onClick={downloadPNG}
            disabled={!qrReady}
            className="flex-grow ml-2 px-4 py-2 bg-senai-primary text-white rounded-xl shadow hover:bg-opacity-90 disabled:opacity-50 transition"
          >
            Baixar PNG
          </button>
        </div>
      </div>

      <div className="mt-8">
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="border-2 border-gray-300 rounded"
        />
      </div>
    </main>
  )
}

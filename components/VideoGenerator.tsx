
import React, { useState } from 'react';

export const VideoGenerator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string | undefined) || '';
  const isApiAvailable = Boolean(apiKey);

  const handleGenerateVideo = async () => {
    if (!isApiAvailable) {
      setError('Modo demo: agrega VITE_GEMINI_API_KEY para habilitar la generación con IA.');
      return;
    }
    setIsLoading(true);
    setVideoUrl(null);
    setError(null);
    setProgress(0);
    setProgressMessage('Inicializando el motor de IA...');

    try {
      const { GoogleGenAI } = await import('https://esm.sh/@google/genai@0.20.0');
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `
        Create a dynamic and inspiring 15-second promotional video for a financial platform called CRECEX.
        The target audience is young, middle-class professionals in Mexico.
        The video should have an energetic, modern, and hopeful tone, suitable for social media.
        - Scene 1: Show diverse, optimistic young professionals collaborating in a modern office, looking towards a bright future.
        - Scene 2: Montage of futuristic visuals: solar panels glistening under the sun, efficient hydroponic farms with lush greens, and clean, advanced medical technology being used.
        - Scene 3: A smartphone screen showing the CRECEX app with a simple, growing investment chart.
        - Text Overlays (in Spanish, clean modern font): "Invierte en tu futuro", "Alto Rendimiento", "Impacto Real".
        - Ending: The CRECEX logo appears with the tagline "Lo que sí funciona."
        - Style: Cinematic, high-quality, professional, and sleek.
      `;
      
      let operation = await ai.models.generateVideos({
        model: 'veo-2.0-generate-001',
        prompt: prompt,
        config: {
          numberOfVideos: 1,
        },
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
        if (operation.progress?.percentage) {
          const newProgress = Math.round(operation.progress.percentage);
          setProgress(newProgress);
          if (newProgress <= 10) {
            setProgressMessage('Inicializando el motor de IA...');
          } else if (newProgress <= 30) {
            setProgressMessage('Analizando la solicitud...');
          } else if (newProgress <= 60) {
            setProgressMessage('Componiendo las escenas clave...');
          } else if (newProgress <= 90) {
            setProgressMessage('Renderizando el video en alta calidad...');
          } else {
            setProgressMessage('Aplicando los toques finales...');
          }
        }
      }
      
      setProgress(100);
      setProgressMessage('¡Video listo!');
      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;

      if (downloadLink) {
        const response = await fetch(`${downloadLink}&key=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch video: ${response.statusText}`);
        }
        const videoBlob = await response.blob();
        const objectUrl = URL.createObjectURL(videoBlob);
        setVideoUrl(objectUrl);
      } else {
        throw new Error('Video generation did not return a valid link.');
      }
    } catch (err) {
      console.error(err);
      setError('Oops! Something went wrong while creating your video. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="video-generator" className="py-20 bg-cresex-blue">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Crea Tu Propio Video Promocional</h2>
          <p className="mt-4 mb-8 text-cresex-light-gray">
            ¿Quieres compartir la visión de CRECEX? Haz clic abajo para generar un video corto y dinámico con el poder de la IA, perfecto para tus redes sociales.
          </p>

          {!isApiAvailable && !videoUrl && (
            <div className="bg-cresex-blue-light p-4 rounded-lg border border-cresex-gray/30 text-left mb-6">
              <p className="text-cresex-white font-semibold">Modo demo (sin API)</p>
              <p className="text-cresex-light-gray text-sm mt-1">
                Esta sección funciona sin configuración mostrando un video de demostración. Para habilitar la generación con IA, define <code>VITE_GEMINI_API_KEY</code> y reinicia el servidor.
              </p>
            </div>
          )}

          {!isLoading && !videoUrl && isApiAvailable && (
            <button
              onClick={handleGenerateVideo}
              className="bg-cresex-teal text-cresex-blue font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cresex-teal/20"
            >
              Generar Video Ahora
            </button>
          )}

          {!isLoading && !videoUrl && !isApiAvailable && (
            <div className="flex flex-col items-center gap-4">
              <button
                disabled
                className="bg-cresex-teal/40 cursor-not-allowed text-cresex-blue font-bold py-3 px-8 rounded-lg text-lg"
                title="Habilita la API para generar con IA"
              >
                Generar Video (requiere API)
              </button>
              <div className="w-full max-w-2xl bg-cresex-blue-light p-2 rounded-lg border border-cresex-gray/30">
                <video
                  src="https://filesamples.com/samples/video/mp4/sample_640x360.mp4"
                  controls
                  muted
                  loop
                  className="w-full rounded-md"
                />
              </div>
            </div>
          )}

          {isLoading && (
            <div className="flex flex-col items-center justify-center bg-cresex-blue-light p-8 rounded-lg border border-cresex-gray/30 w-full max-w-lg mx-auto">
              <svg className="animate-spin h-10 w-10 text-cresex-teal mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-white text-lg font-semibold mb-2">Generando tu video...</p>
              <div className="w-full bg-cresex-gray rounded-full h-2.5">
                <div 
                  className="bg-cresex-teal h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <p className="mt-2 text-cresex-teal font-bold text-xl tabular-nums">{progress}%</p>
              <p className="mt-2 text-cresex-white h-5 transition-opacity duration-300">{progressMessage}</p>
              <p className="mt-4 text-cresex-light-gray text-sm">Esto puede tardar unos minutos. ¡Gracias por tu paciencia!</p>
            </div>
          )}

          {error && <p className="text-red-400 mt-4">{error}</p>}

          {videoUrl && !isLoading && (
            <div className="flex flex-col items-center">
              <div className="w-full max-w-2xl bg-cresex-blue-light p-2 rounded-lg border border-cresex-gray/30 shadow-2xl">
                <video src={videoUrl} controls autoPlay muted loop className="w-full rounded-md" />
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                 <a
                    href={videoUrl}
                    download="crecex-promo-video.mp4"
                    className="bg-cresex-teal text-cresex-blue font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
                  >
                    Descargar Video
                  </a>
                  <button
                    onClick={handleGenerateVideo}
                    className="border-2 border-cresex-gray text-cresex-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-cresex-gray transition-colors duration-300"
                  >
                    Generar Otro
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
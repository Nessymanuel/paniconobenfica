import { useState } from "react"

import videoSemNarracao from "./assets/video-panico.mp4"
import videoComNarracao from "./assets/video-panico.mp4"

import foto1 from "./assets/story1.jpg"
import capa from "./assets/story2.jpg"
import foto3 from "./assets/story3.jpg"
import foto4 from "./assets/story4.jpg"
import foto6 from "./assets/story6.jpg"
import foto7 from "./assets/story7.jpg"
import foto8 from "./assets/story8.jpg"
import foto9 from "./assets/story9.jpg"
import fotofim from "./assets/storyfim.jpg"
import fotostory from "./assets/storytime.jpg"

export function App() {
  const [abaAtiva, setAbaAtiva] = useState("fase1")

  return (
    <div className="mx-4 min-h-svh font-serif">
      {/* Título */}
      <div className="flex justify-center pt-10 text-4xl font-bold">
        <h1>Telenovela Pânico no Benfica</h1>
      </div>

      {/* Abas Fase 1 e Fase 2 */}
      <div className="flex justify-center mt-10 space-x-4">
        <button
          onClick={() => setAbaAtiva("fase1")}
          className={`px-4 py-2 rounded-md font-medium ${abaAtiva === "fase1" ? "bg-black text-white" : "bg-gray-300 text-black"
            }`}
        >
          Fase 1 – Sem Narração
        </button>
        <button
          onClick={() => setAbaAtiva("fase2")}
          className={`px-4 py-2 rounded-md font-medium ${abaAtiva === "fase2" ? "bg-black text-white" : "bg-gray-300 text-black"
            }`}
        >
          Fase 2 – Com Narração
        </button>
      </div>

      {/* Vídeo conforme aba ativa */}
      <div className="px-4 py-6">
        <div className="max-w-[800px] mx-auto">
          {abaAtiva === "fase1" && (
            <>
              <h2 className="text-2xl text-center font-semibold mb-2">Assista à versão sem narração</h2>
              <video
                className="w-full h-[590px] object-cover rounded-md"
                controls
                src={videoSemNarracao}
                poster={capa}
              />
              <p className="text-sm text-center mt-2">História contada apenas com vídeos e imagens.</p>
            </>
          )}

          {abaAtiva === "fase2" && (
            <>
              <h2 className="text-2xl text-center font-semibold mb-2">Assista à versão narrada</h2>
              <video
                className="w-full h-[590px] object-cover rounded-md"
                controls
                src={videoComNarracao}
              />
              <p className="text-sm text-center mt-2">Versão narrada da mesma história, com áudio embutido.</p>
            </>
          )}
        </div>
      </div>

      {/* Storyboard */}
      <div className="text-center  px-10">
        <h2 className="text-3xl mb-10">Storyboards</h2>
        <div className="pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

            <div>
              <img className="w-[500px] h-[200px] object-cover rounded-md shadow-md" src={foto1} alt="Storyboard cena 1" />
              <p className="text-sm pt-2">1 - Um momento carinhoso entre os donos da casa.</p>
            </div>

            <div>
              <img className="w-[500px] h-[200px] object-cover rounded-md shadow-md" src={foto3} alt="Storyboard cena 2" />
              <p className="text-sm pt-2">2 - Júlia troca contacto com Eduardo. Carlos observa discretamente.</p>
            </div>

            <div>
              <img className="w-[500px] h-[200px] object-cover rounded-md shadow-md" src={foto4} alt="Storyboard cena 3" />
              <p className="text-sm pt-2">3 - Carlos percebe algo estranho e talvez vá contar para Teresa.</p>
            </div>

            <div>
              <img className="w-[500px] h-[200px] object-cover rounded-md shadow-md" src={foto6} alt="Storyboard cena 4" />
              <p className="text-sm pt-2">4 - A relação paralela está clara. Eles parecem íntimos e felizes.</p>
            </div>

            <div>
              <img className="w-[500px] h-[200px] object-cover rounded-md shadow-md" src={foto7} alt="Storyboard cena 5" />
              <p className="text-sm pt-2">5 - Confronto explosivo. A verdade vem à tona.</p>
            </div>

            <div>
              <img className="w-[500px] h-[200px] object-cover rounded-md shadow-md" src={foto8} alt="Storyboard cena 6" />
              <p className="text-sm pt-2">6 - Júlia e Carlos discutem. A relação se desfaz.</p>
            </div>

            <div>
              <img className="w-[500px] h-[200px] object-cover rounded-md shadow-md" src={foto9} alt="Storyboard cena 7" />
              <p className="text-sm pt-2">7 - Carlos tenta pedir desculpas. Teresa o rejeita.</p>
            </div>

            <div>
              <img className="w-[500px] h-[200px] object-cover rounded-md shadow-md" src={fotofim} alt="Storyboard cena 8" />
              <p className="text-sm pt-2">8 - Carlos tenta reconquistar. Teresa hesita.</p>
            </div>

            <div>
              <img className="w-[500px] h-[200px] object-cover rounded-md shadow-md" src={fotostory} alt="Storyboard cena 9" />
              <p className="text-sm pt-2">9 - Reviravolta! Ela decide perdoar.</p>
            </div>

          </div>
        </div>
      </div>


      {/* Rodapé */}
      <footer className="bg-white border-t border-gray-300 mt-20 py-10 px-4 text-gray-700 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Equipa Técnica */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-900">Equipa Técnica</h3>
            <p><span className="font-medium">Produção:</span> Ana Gourgel, Gracieth Manuel, Aureo Pedro</p>
            <p><span className="font-medium">Direção e Edição:</span> Ana Gourgel</p>
            <p><span className="font-medium">Roteiro e Design:</span> Gracieth Manuel</p>
            <p><span className="font-medium">Som:</span> Aurio Pedro</p>
          </div>

          {/* Elenco */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-900">Elenco</h3>
            <p><span className="font-medium">Fábio:</span> Eduardo (marido)</p>
            <p><span className="font-medium">Evania:</span> Teresa (esposa)</p>
            <p><span className="font-medium">Juliana:</span> Júlia (empregada)</p>
            <p><span className="font-medium">Manilson:</span> Carlos (jardineiro)</p>
          </div>

          {/* Produção */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-900">Cenário e Produção</h3>
            <p>As gravações aconteceram na casa da estudante Ana Gourgel.</p>
            <p>Todos os conteúdos foram filmados com um iPhone 15 Pro Max.</p>
            <p>Ambiente real, adaptado para representar os espaços da história.</p>
          </div>
        </div>

        {/* Aviso final */}
        <div className="mt-8 text-center space-y-2">
          <p>Todas as imagens e vídeos são autorais e produzidos exclusivamente pelo grupo.</p>
          <p>Músicas utilizadas foram retiradas do YouTube e são de autoria de cantores angolanos, com fins educacionais.</p>
          <p className="italic text-gray-500">Este projeto foi desenvolvido para a disciplina de Multimídia com finalidade exclusivamente académica.</p>
        </div>
      </footer>
    </div>
  )
}

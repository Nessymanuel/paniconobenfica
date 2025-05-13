import video from "./assets/video-panico.mp4"
import foto1 from "./assets/story1.jpg"
import capa from "./assets/story2.jpg"
import foto3 from "./assets/story3.jpg"
import foto4 from "./assets/story4.jpg"
import foto6 from "./assets/story6.jpg"
import foto7 from "./assets/story7.jpg"
import foto8 from "./assets/story8.jpg"
import foto9 from "./assets/story9.jpg"
import fotofim from "./assets/storyfim.jpg"


export function App() {
  return (
    <div className="mx-4  min-h-svh font-serif">
      <div className="flex  justify-center pt-10 text-4xl font-bold ">
        <h1>Telenovela Pânico no Benfica</h1>
      </div>
      <div className=" justify-center  text-center p-10">
        <h2 className=" text-3xl ">Assista a sua história visual completa</h2>

        <div className=" px-4 py-6">
          <div className="max-w-[800px] mx-auto">
            <video className="w-full max-w-[600px] h-[640px] mx-auto object-cover rounded-md" 
            controls 
            src={video}
            poster={capa}
            ></video>
            <p className="text-sm text-center mt-2">História contada apenas com vídeos e imagens</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-3xl mb-10">Storyboards</h2>
        <div className="pb-10">
          <div className="flex space-x-4 justify-center ">
            <div>
              <img className="max-w-[370px] mx-auto w-470 h-90" src={foto1} alt="" />
              <p className="text-sm py-t">1 - Um momento carinhoso entre os donos da casa. </p>

            </div>
            <div>
              <img className="max-w-[370px] mx-auto w-470 h-90" src={foto3} alt="" />
              <p className="text-sm py-1">2 - Júlia troca contacto com Eduardo. Carlos observa  </p>
              <p className="text-sm "> discretamente.</p>
            </div>
            <div>
              <img className="max-w-[370px] mx-auto w-470 h-90" src={foto4} alt="" />
              <p className="text-sm py-2">3 -Ele percebe algo estranho e talvez vá contar para  Teresa </p>
            </div>
          </div>
          <div className="flex space-x-4 justify-center mt-10">
            <div>
              <img className="max-w-[370px] mx-auto w-470 h-90" src={foto6} alt="" />
              <p className="text-sm py-1">4 -  A relação paralela está clara. Eles parecem íntimos</p>
              <p className="text-sm ">e felizes  </p>
            </div>
            <div>
              <img className="max-w-[370px] mx-auto w-470  h-90" src={foto7} alt="" />
              <p className="text-sm pt-2">5 - Confronto explosivo. A verdade vem à tona. A tensão</p>
              <p className="text-sm ">entre os personagens aumenta. </p>
            </div>
            <div>
              <img className="max-w-[370px] mx-auto w-470  h-90" src={foto8} alt="" />
              <p className="text-sm py-1">6 -  A relação paralela se desfaz. Discussão e fim do</p>
              <p className="text-sm ">caso oculto.  </p>
            </div>
          </div>
          <div className="flex space-x-4 justify-center mt-10">
            <div>
              <img className="max-w-[370px] mx-auto w-470  h-90" src={foto9} alt="" />
              <p className="text-sm py-2">7 - Ele tenta pedir desculpas. Ela o rejeita. </p>
            </div>
            <div>
              <img className="max-w-[370px] mx-auto w-470  h-90" src={fotofim} alt="" />
              <p className="text-sm pt-2">8 - Ele tenta reconquistar. Há tensão no ar.</p>
              <p className="text-sm ">Será que ela vai aceitar? </p>
            </div>
            <div>
              <img className="max-w-[370px] mx-auto w-470  h-90" src={foto8} alt="" />
              <p className="text-sm py-2">9 - Reviravolta! Apesar de tudo, ela decide perdoar. </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white border-t border-gray-300 mt-20 py-10 px-4 text-gray-700 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Coluna 1: Equipa Técnica */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-900">Equipa Técnica</h3>
            <p><span className="font-medium">Produção:</span> Ana Gourgel, Gracieth Manuel, Aureo Pedro</p>
            <p><span className="font-medium">Direção e Edição:</span> Ana Gourgel</p>
            <p><span className="font-medium">Roteiro e Design:</span> Gracieth Manuel</p>
            <p><span className="font-medium">Som:</span> Aureo Pedro</p>
          </div>

          {/* Coluna 2: Elenco */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-900">Elenco</h3>
            <p><span className="font-medium">Fábio:</span> Eduardo (marido)</p>
            <p><span className="font-medium">Evania:</span> Teresa (esposa)</p>
            <p><span className="font-medium">Juliana:</span> Júlia (empregada)</p>
            <p><span className="font-medium">Manilson:</span> Carlos (jardineiro)</p>
          </div>

          {/* Coluna 3: Cenário e Produção */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-900">Cenário e Produção</h3>
            <p>As gravações aconteceram na casa da estudante Ana Gourgel.</p>
            <p>Todos os conteúdos foram filmados com um iPhone 15 Pro Max.</p>
            <p>Ambiente real, adaptado para representar os espaços da história.</p>
          </div>
        </div>

        {/* Observações finais */}
        <div className="mt-8 text-center space-y-2">
          <p>Todas as imagens e vídeos são autorais e produzidos exclusivamente pelo grupo.</p>
          <p>Músicas utilizadas foram retiradas do YouTube e são de autoria de cantores angolanos, com fins educacionais.</p>
          <p className="italic text-gray-500">Este projeto foi desenvolvido para a disciplina de Multimídia com finalidade exclusivamente académica.</p>
        </div>
      </footer>

    </div>
  )
}

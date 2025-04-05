import "../styles/animations.css";
import Container from "../components/Container";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col pt-10 space-y-8">
      {/* Container Superior (Esquerda) */}
      <div className="flex justify-start w-full animate-fadeIn">
        <Container
          imageSrc="/Fotoperfil.jpeg"
          altText="Foto de perfil"
        >
          <p className="break-words text-left">
            "Não acredite nas mentiras dele"
            -Cellbit 2018.
          </p>
        </Container>
      </div>

      {/* Container Central (Direita) */}
      <div className="flex justify-end w-full animate-fadeIn">
        <div className="bg-red-900 text-white p-6 rounded-lg w-1/4 h-auto mr-8">
          {/* Caixa de Texto */}
          <div className="col-span-2 bg-red-800 text-white p-4 rounded-lg flex items-center justify-center mb-4">
            <p className="text-center font-semibold">
              Colegas de projeto Case 01
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Container Interno 1 */}
            <div className="bg-red-800 text-white p-4 rounded-lg flex flex-col items-center">
              <img
                src="/thomas.jpeg"
                alt="Imagem 1"
                className="w-20 h-20 object-cover rounded-full mb-2"
              />
              <p className="text-center font-semibold">Thomas Barbosa</p>
            </div>
            {/* Container Interno 2 */}
            <div className="bg-red-800 text-white p-4 rounded-lg flex flex-col items-center">
              <img
                src="/vinicius.jpeg"
                alt="Imagem 2"
                className="w-20 h-20 object-cover rounded-full mb-2"
              />
              <p className="text-center font-semibold">Vinícius Santana</p>
            </div>
            {/* Caixa de Texto */}
            <div className="col-span-2 bg-red-800 text-white p-4 rounded-lg flex items-center justify-center">
              <p className="text-center font-semibold">
                Colegas de projeto Case 02
              </p>
            </div>
            {/* Container Interno 3 */}
            <div className="bg-red-800 text-white p-4 rounded-lg flex flex-col items-center">
              <img
                src="/ana.jpeg"
                alt="Imagem 3"
                className="w-20 h-20 object-cover rounded-full mb-2"
              />
              <p className="text-center font-semibold">Ana Julia Palmisciano</p>
            </div>
            {/* Container Interno 4 */}
            <div className="bg-red-800 text-white p-4 rounded-lg flex flex-col items-center">
              <img
                src="/hashimoto.jpeg"
                alt="Imagem 4"
                className="w-20 h-20 object-cover rounded-full mb-2"
              />
              <p className="text-center font-semibold">Vitor Hashimoto</p>
            </div>
          </div>
        </div>
      </div>

      {/* Container Inferior (Esquerda) */}
      <div className="flex justify-start w-full mb-8 animate-fadeIn">
        <Container
          imageSrc="/images/right-image.jpeg"
          altText="Imagem inferior"
        >
          <p className="break-words text-left">
            Este é o container inferior.
          </p>
        </Container>
      </div>
    </div>
  );
}

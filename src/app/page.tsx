import '../styles/animations.css';
import Container from '../components/Container';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col space-y-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-10'>
      {/* Container Superior (Esquerda) */}
      <div className='animate-fadeIn flex w-full justify-start'>
        <Container imageSrc='/Fotoperfil.jpeg' altText='Foto de perfil'>
          <p className='text-left break-words'>
            "Não acredite nas mentiras dele" -Cellbit 2018.
          </p>
        </Container>
      </div>

      {/* Container Central (Direita) */}
      <div className='animate-fadeIn flex w-full justify-end'>
        <div className='mr-8 h-auto w-1/4 rounded-lg bg-red-900 p-6 text-white'>
          {/* Caixa de Texto */}
          <div className='col-span-2 mb-4 flex items-center justify-center rounded-lg bg-red-800 p-4 text-white'>
            <p className='text-center font-semibold'>
              Colegas de projeto Case 01
            </p>
          </div>
          <div className='grid grid-cols-2 items-center gap-4'>
            {/* Container Interno 1 */}
            <div className='flex flex-col items-center rounded-lg bg-red-800 p-4 text-white'>
              <img
                src='/thomas.jpeg'
                alt='Imagem 1'
                className='mb-2 h-20 w-20 rounded-full object-cover'
              />
              <p className='text-center font-semibold'>Thomas Barbosa</p>
            </div>
            {/* Container Interno 2 */}
            <div className='flex flex-col items-center rounded-lg bg-red-800 p-4 text-white'>
              <img
                src='/vinicius.jpeg'
                alt='Imagem 2'
                className='mb-2 h-20 w-20 rounded-full object-cover'
              />
              <p className='text-center font-semibold'>Vinícius Santana</p>
            </div>
            {/* Caixa de Texto */}
            <div className='col-span-2 flex items-center justify-center rounded-lg bg-red-800 p-4 text-white'>
              <p className='text-center font-semibold'>
                Colegas de projeto Case 02
              </p>
            </div>
            {/* Container Interno 3 */}
            <div className='flex flex-col items-center rounded-lg bg-red-800 p-4 text-white'>
              <img
                src='/ana.jpeg'
                alt='Imagem 3'
                className='mb-2 h-20 w-20 rounded-full object-cover'
              />
              <p className='text-center font-semibold'>Ana Julia Palmisciano</p>
            </div>
            {/* Container Interno 4 */}
            <div className='flex flex-col items-center rounded-lg bg-red-800 p-4 text-white'>
              <img
                src='/hashimoto.jpeg'
                alt='Imagem 4'
                className='mb-2 h-20 w-20 rounded-full object-cover'
              />
              <p className='text-center font-semibold'>Vitor Hashimoto</p>
            </div>
          </div>
        </div>
      </div>

      {/* Container Inferior (Esquerda) */}
      <div className='animate-fadeIn mb-8 flex w-full justify-start'>
        <Container
          imageSrc='/images/right-image.jpeg'
          altText='Imagem inferior'
        >
          <p className='text-left break-words'>Este é o container inferior.</p>
        </Container>
      </div>
    </div>
  );
}

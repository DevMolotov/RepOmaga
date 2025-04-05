import Navbar from "@/components/navBar";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div>
      <Navbar />
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
  );
}

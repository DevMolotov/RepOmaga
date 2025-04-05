import React from "react";

const Container = ({ imageSrc, altText, children, className = "" }) => {
  return (
    <div className={`bg-red-900 text-white py-8 px-6 max-w-4xl ml-8 rounded-lg ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="image-circle">
          <img
            src={imageSrc}
            alt={altText}
            className="w-auto h-20 rounded-full"
          />
        </div>
        <div className="textbox bg-red-800 text-white p-4 rounded-lg max-w-lg">
          <p className="break-words whitespace-pre-wrap">
            Olá meu nome é Matheus Pasquevitz Souza tenho 18 anos e faço parte
            do programa de Trainee da EJEM, este é meu portifólio onde poderá
            encontrar alguns projetos que já fiz ou participei e outras
            curiosidades sobre minha pessoa.
          </p>
        </div>
      </div>
      <div className="content text-center">{children}</div>
    </div>
  );
};

export default Container;
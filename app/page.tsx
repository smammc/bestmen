"use client";

import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const bestMen = [
  {
    names: ["Francisco", "Kiko"],
    title: "irmão de sangue",
    quote:
      "Lawyers can steal more money with a briefcase than a thousand men with guns and masks.",
    text: "Podemos nem sempre concordar, mas sei que posso contar sempre contigo.\n Espero que a nossa cumplicidade não pare de crescer.",
  },
  {
    names: ["Frederico", "Ico"],
    title: "irmão de coração",
    quote:
      "A man who doesn't spend time with his family can never be a real man.",
    text: "Tenho aprendido muito contigo, e espero poder continuar a aprender.\nPodemos não ser irmãos de sangue, mas para mim és família.",
  },
  {
    names: ["Filipe", "Pipão"],
    title: "aliado leal",
    quote:
      "We are all honorable men here, we do not have to give each other assurances as if we were lawyers.",
    text: "A tua amizade é um bem precioso que estimo muito.\nContigo, sei que posso contar sempre.",
  },
  {
    names: ["José", "Zé"],
    title: "companheiro de confiança",
    quote: "Great men are not born great, they grow great . . .",
    text: "A tua amizade, alegria e boa disposição servem de inspiração para a minha vida.\nContigo, sinto-me sempre em casa.",
  },
  {
    names: ["Martim", "Tim"],
    title: "pilar da minha família",
    quote:
      "A friend should always underestimate your virtues and an enemy overestimate your faults.",
    text: "A tua força e determinação são uma inspiração para mim.\nContigo, sinto-me sempre mais forte.",
  },
  {
    names: ["Tiago", "Espinha"],
    title: "amigo de uma vida",
    quote: "Time erodes gratitude more quickly than it does beauty!",
    text: "A tua amizade e preocupação são muito importantes para mim.\nContigo, sinto-me sempre apoiado.",
  },
];

export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const [matchedMan, setMatchedMan] = useState<{
    names: string[];
    title: string;
    quote: string;
    text: string;
  } | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    const matched = bestMen.find((man) =>
      man.names.some((n) => n.toLowerCase() === nameInput.trim().toLowerCase())
    );
    setMatchedMan(matched || null);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-red-900 text-gray-100">
      <Head>
        <title>Uma Proposta Irrecusável</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full max-w-2xl mx-auto mb-8">
        <Image
          src="/corleone.png"
          alt="Corleone Boss"
          width={500}
          height={300}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>

      <header className="text-center mb-12">
        <h1 className="typewriter text-4xl md:text-5xl font-bold text-yellow-500 font-cinzel">
          I'll make you an offer you can't refuse...
        </h1>

        <section className="text-center mt-4">
          <audio ref={audioRef} src="/mafia-theme.mp3" loop />
          <button
            onClick={toggleAudio}
            className="bg-gray-800 hover:bg-gray-700 text-yellow-500 font-bold py-2 px-4 rounded flex items-center justify-center mx-auto"
            aria-label={isPlaying ? "Pausar Música" : "Tocar Música"}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-7 h-7"
              >
                <path d="M9.25 4.25A.75.75 0 0 1 10 5v10a.75.75 0 0 1-1.28.53L5.81 13H3.5A1.5 1.5 0 0 1 2 11.5v-3A1.5 1.5 0 0 1 3.5 7h2.31l2.91-2.53a.75.75 0 0 1 1.03.08zM14.53 7.47a.75.75 0 0 1 1.06 1.06A4.5 4.5 0 0 1 16.5 10a4.5 4.5 0 0 1-1.06 2.47.75.75 0 1 1-1.06-1.06A3 3 0 0 0 15 10a3 3 0 0 0-.53-1.47.75.75 0 0 1 0-1.06zM17.03 4.97a.75.75 0 0 1 1.06 1.06A8.25 8.25 0 0 1 18.5 10a8.25 8.25 0 0 1-0.41 3.97.75.75 0 1 1-1.38-.53A6.75 6.75 0 0 0 17 10a6.75 6.75 0 0 0-0.29-1.97.75.75 0 0 1 .32-.81z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-7 h-7"
              >
                <path d="M9.25 4.25A.75.75 0 0 1 10 5v10a.75.75 0 0 1-1.28.53L5.81 13H3.5A1.5 1.5 0 0 1 2 11.5v-3A1.5 1.5 0 0 1 3.5 7h2.31l2.91-2.53a.75.75 0 0 1 1.03.08z" />
                <path d="M14.53 14.53a.75.75 0 0 1-1.06-1.06L15.44 11l-1.97-1.97a.75.75 0 1 1 1.06-1.06L16.5 9.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L17.56 11l1.97 1.97a.75.75 0 1 1-1.06 1.06L16.5 12.06l-1.97 1.97z" />
              </svg>
            )}
          </button>
        </section>
      </header>

      <section className="text-center mb-12">
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Insere o teu nome/alcunha"
          className="mb-4 bg-gray-800 text-gray-100 border border-yellow-500 p-2 rounded w-full max-w-xs"
        />
        <button
          onClick={handleSubmit}
          className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Aceitar a Proposta
        </button>
      </section>

      {matchedMan && (
        <section className="grid grid-cols-1">
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-cinzel text-yellow-500 mb-4">
              {nameInput}
            </h2>
            <p className="italic mb-4">"{matchedMan.quote}"</p>
            <p className="text-gray-200 mb-4">
              {matchedMan.text &&
                matchedMan.text.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
            <p className="text-gray-200">
              {nameInput}, {matchedMan.title}.
            </p>
            <p className="text-gray-200">
              Queres ser meu padrinho de casamento?
            </p>
            <Popup
              trigger={
                <button className="mt-4 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
                  Junta-te ao Grupo
                </button>
              }
              modal
              nested
            >
              {(close: () => void) => (
                <>
                  <div className="modal bg-gray-800 p-6 rounded-lg text-gray-100 font-playfair">
                    <h3 className="text-xl font-cinzel text-yellow-500 mb-4">
                      Bem-vindo à Família!
                    </h3>
                    <p className="mb-4">
                      Clica no link abaixo para te juntares ao grupo de WhatsApp
                      dos padrinhos:
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                      <button
                        onClick={() =>
                          window.open(
                            "https://chat.whatsapp.com/G1w9R3ZU3qi9oWkx34n0jB",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center bg-green-600 hover:bg-green-500 p-2 rounded"
                      >
                        <Image
                          src="/whatsapp.png"
                          alt="WhatsApp"
                          width={32}
                          height={32}
                        />
                      </button>
                      <button
                        onClick={close}
                        className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </>
              )}
            </Popup>
          </div>
        </section>
      )}

      {!matchedMan && nameInput && submitted && (
        <section className="text-center text-red-500">
          Nome não reconhecido. Por favor, insere um nome válido.
        </section>
      )}

      <footer className="mt-12 text-center text-gray-400">
        <p>
          "A amizade é tudo. É mais do que o talento. É mais do que o governo. É
          quase igual à família." — O Noivo
        </p>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Playfair+Display&display=swap");

        body {
          font-family: "Playfair Display", serif;
        }

        .font-cinzel {
          font-family: "Cinzel", serif;
        }

        .typewriter h1 {
          overflow: hidden;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.05em;
          animation: typing 3.5s steps(40, end);
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .modal {
          font-family: "Playfair Display", serif;
          max-width: 500px;
          margin: auto;
          border: 1px solid #yellow-500;
        }

        .reactjs-popup-content {
          background: #1f1f1f !important;
          border-radius: 8px;
          border: 1px solid #yellow-500;
        }
      `}</style>
    </div>
  );
}

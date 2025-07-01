"use client";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Timeline } from "@/components/ui/timeline";
import { Boxes } from "@/components/ui/background-boxes";

const SkillIcon = ({ icon }: { icon: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
    <div className="text-4xl">{icon}</div>
  </div>
);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const projects = [
  {
    title: "Veltro",
    description: "Consolidador de carteiras de investimentos de Renda Variável e Renda Fixa. Aplicação completa para gerenciamento e análise de investimentos com dashboard intuitivo.",
    link: "https://veltro.vercel.app",
  },
  {
    title: "Fidera",
    description: "Sistema de gerenciamento de mensalidades de clientes desenvolvido com Next.js, Prisma ORM e PostgreSQL. Controle completo de pagamentos e cobranças recorrentes.",
    link: "https://fidera.cgmcloud.com.br",
  },
  {
    title: "CGM Sistemas",
    description: "Landing page da empresa da família, especializada em automação comercial, oferecendo soluções inovadoras para otimizar processos empresariais.",
    link: "https://cgmsistemas.cgmcloud.com.br",
  },
  {
    title: "GourmetFlow",
    description: "Aplicação completa para restaurantes, oferecendo sistema de atendimento, gestão de pedidos e dashboard administrativo para análise e controle do estabelecimento.",
    link: "https://gourmet-flow.vercel.app",
  },
  {
    title: "AI Chat",
    description: "Chat simples e minimalista que se conecta à API Gemini AI, permitindo interações rápidas e eficientes com inteligência artificial.",
    link: "https://github.com/coder-muller/ai-chat-project",
  },
  {
    title: "Code Trackr",
    description: "Sistema de controle de projetos e tarefas, desenvolvido com Next.js, Prisma ORM e PostgreSQL. Controle completo de projetos e tarefas, com dashboard administrativo para análise e controle do projeto.",
    link: "https://github.com/coder-muller/codeTrackr",
  },
];

const skills = [
  {
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, TailwindCSS",
    header: <SkillIcon icon="⚛️" />,
    className: "md:col-span-2",
  },
  {
    title: "Backend Development",
    description: "Node.js, Express, PostgreSQL, Prisma",
    header: <SkillIcon icon="🔧" />,
    className: "md:col-span-1",
  },
  {
    title: "DevOps & Cloud",
    description: "Docker, Traefik, Computação em Nuvem",
    header: <SkillIcon icon="☁️" />,
    className: "md:col-span-1",
  },
  {
    title: "Design & UX",
    description: "Figma, ShadCN UI, Design Systems",
    header: <SkillIcon icon="🎨" />,
    className: "md:col-span-2",
  },

];

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Estudante de Análise e Desenvolvimento de Sistemas na Unisenac, Pelotas-RS.
          Desenvolvendo projetos full stack com foco em aplicações modernas e escaláveis.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 h-20 md:h-44 lg:h-60 w-full shadow border flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Screenshot do Projeto</span>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 h-20 md:h-44 lg:h-60 w-full shadow border flex items-center justify-center">
            <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">Stack Tecnológica</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Início da jornada no desenvolvimento Full Stack. Criação dos primeiros projetos
          pessoais e aprofundamento em tecnologias web modernas.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 h-20 md:h-44 lg:h-60 w-full shadow border flex items-center justify-center">
            <span className="text-green-600 dark:text-green-400 text-sm font-medium">Primeiros Projetos</span>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 h-20 md:h-44 lg:h-60 w-full shadow border flex items-center justify-center">
            <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">Aprendizado</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Portfolio() {
  const words = [
    {
      text: "Olá,",
    },
    {
      text: "eu",
    },
    {
      text: "sou",
    },
    {
      text: "Guilherme",
      className: "text-blue-500 dark:text-blue-400",
    },
    {
      text: "Müller",
      className: "text-blue-500 dark:text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative">
      {/* Hero Section */}
      <section id="home" className="h-screen relative w-full overflow-hidden bg-white dark:bg-black flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <Boxes />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <TypewriterEffectSmooth words={words} />

          <TextGenerateEffect
            words="Desenvolvedor Full Stack apaixonado por criar aplicações modernas e escaláveis. Especializado em React, Next.js, Node.js e tecnologias de ponta."
            className="text-center text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
          />

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-neutral-800 transition-colors"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm hover:bg-neutral-100 transition-colors"
            >
              Contato
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white">
            Sobre Mim
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                Sou estudante de Análise e Desenvolvimento de Sistemas na Unisenac, em Pelotas-RS.
                Tenho uma paixão por desenvolvimento de software, especialmente na construção de
                aplicações modernas e escaláveis.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                Meu foco é no desenvolvimento Full Stack, criando aplicações eficientes e de alto
                desempenho. Tenho um forte interesse em arquitetura de backend, computação em nuvem
                e práticas de DevOps.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Adoro otimizar fluxos de trabalho e automatizar processos para melhorar a produtividade.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white">
            Tecnologias & Ferramentas
          </h2>
          <BentoGrid className="max-w-4xl mx-auto">
            {skills.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white">
            Meus Projetos
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades
            em diferentes tecnologias e áreas.
          </p>
          <HoverEffect items={projects} />
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <Timeline data={timelineData} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black dark:text-white">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações.
            Entre em contato comigo!
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:guilhermemullerxx@gmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              📧 guilhermemullerxx@gmail.com
            </a>
            <a
              href="https://github.com/coder-muller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              🐙 coder-muller
            </a>
            <a
              href="https://x.com/codermuller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              🐦 @codermuller
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Guilherme Müller.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            Desenvolvido com ❤️ usando Next.js e Aceternity UI.
          </p>
        </div>
      </footer>
    </div>
  );
}

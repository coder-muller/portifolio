"use client";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Timeline } from "@/components/ui/timeline";
import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";

const TechIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
    <div className="text-4xl">{children}</div>
  </div>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-cyan-400" fill="currentColor">
    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85-1.87-.82-1.87-1.85.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51zm6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95zM17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 17.97 9.74c-.25.76-.55 1.51-.89 2.26zM6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26z" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-green-500" fill="currentColor">
    <path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.32,6.61 3.06,7.11 3.06,7.65V16.35C3.06,16.89 3.32,17.39 3.78,17.65L11.22,21.95C11.45,22.08 11.73,22.15 12,22.15C12.27,22.15 12.55,22.08 12.78,21.95L20.22,17.65C20.68,17.39 20.94,16.89 20.94,16.35V7.65C20.94,7.11 20.68,6.61 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85M12,3.05L18.94,7V17L12,20.95L5.06,17V7L12,3.05M12,6.15C10.2,6.15 8.75,7.6 8.75,9.4C8.75,11.2 10.2,12.65 12,12.65C13.8,12.65 15.25,11.2 15.25,9.4C15.25,7.6 13.8,6.15 12,6.15Z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" fill="currentColor">
    <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-sky-400" fill="currentColor">
    <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z" />
  </svg>
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
    status: "Beta"
  },
  {
    title: "Fidera",
    description: "Sistema de gerenciamento de mensalidades de clientes desenvolvido com Next.js, Prisma ORM e PostgreSQL. Controle completo de pagamentos e cobranças recorrentes.",
    link: "https://fidera.cgmcloud.com.br",
    status: "Beta"
  },
  {
    title: "CGM Sistemas",
    description: "Landing page da empresa da família, especializada em automação comercial, oferecendo soluções inovadoras para otimizar processos empresariais.",
    link: "https://cgmsistemas.cgmcloud.com.br",
    status: "Production"
  },
  {
    title: "GourmetFlow",
    description: "Aplicação completa para restaurantes, oferecendo sistema de atendimento, gestão de pedidos e dashboard administrativo para análise e controle do estabelecimento.",
    link: "https://gourmet-flow.vercel.app",
    status: "Production"
  },
  {
    title: "AI Chat",
    description: "Chat simples e minimalista que se conecta à API Gemini AI, permitindo interações rápidas e eficientes com inteligência artificial.",
    link: "https://github.com/coder-muller/ai-chat-project",
    status: "Learning"
  },
  {
    title: "Code Trackr",
    description: "Sistema de controle de projetos e tarefas, desenvolvido com Next.js, Prisma ORM e PostgreSQL. Controle completo de projetos e tarefas, com dashboard administrativo para análise e controle do projeto.",
    link: "https://github.com/coder-muller/codeTrackr",
    status: "Development"
  },
];

const skills = [
  {
    title: "Frontend",
    description: "React, Next.js, TypeScript, TailwindCSS",
    header: <TechIcon><ReactIcon /></TechIcon>,
    className: "md:col-span-2",
  },
  {
    title: "Backend",
    description: "Node.js, Express, Java, Spring Boot",
    header: <TechIcon><NodeIcon /></TechIcon>,
    className: "md:col-span-1",
  },
  {
    title: "DevOps",
    description: "Docker, Cloud Computing, CI/CD",
    header: <TechIcon><CloudIcon /></TechIcon>,
    className: "md:col-span-1",
  },
  {
    title: "Database",
    description: "PostgreSQL, Prisma ORM, MongoDB",
    header: <TechIcon><DatabaseIcon /></TechIcon>,
    className: "md:col-span-2",
  },
];

const timelineData = [
  {
    title: "Futuro",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          Visão de Futuro: O Próximo Capítulo
        </h3>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          Com a experiência acumulada e o conhecimento consolidado,
          planejo expandir significativamente meu portfólio de projetos, focando em soluções escaláveis que possam impactar
          um número maior de usuários.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          O objetivo principal é desenvolver meu primeiro SaaS (Software as a Service), uma plataforma que não apenas
          demonstre minhas habilidades técnicas, mas que também gere receita recorrente e estabeleça as bases para um
          crescimento sustentável e independência financeira através da tecnologia.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Esta meta representa não apenas crescimento profissional, mas também a materialização de anos de aprendizado
          e dedicação, transformando conhecimento em valor real para o mercado.
        </p>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          Primeiro Retorno Financeiro: Validação do Conhecimento
        </h3>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          Este foi um ano transformador, marcando a transição de estudante para desenvolvedor profissional.
          Pela primeira vez, meus conhecimentos técnicos começaram a gerar receita tangível, validando anos de estudo
          e dedicação ao desenvolvimento de software.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          O momento mais significativo foi o desenvolvimento de um sistema completo de gestão para uma rádio local,
          incluindo controle de contratos, faturas e operações diárias. Este projeto me desafiou a pensar em soluções
          empresariais reais, considerando não apenas a funcionalidade, mas também usabilidade, segurança e escalabilidade.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Paralelamente, criei um aplicativo de controle de agendamentos para uma clínica de fisioterapia,
          experiência que me ensinou sobre gestão de dados sensíveis, interface intuitiva para profissionais da saúde
          e a importância de sistemas confiáveis em ambientes críticos.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          Formação Acadêmica Superior: Estruturando o Conhecimento
        </h3>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          O ingresso no curso de Análise e Desenvolvimento de Sistemas na Unisenac Pelotas representou um momento
          crucial de estruturação do conhecimento que vinha desenvolvendo de forma autodidata. Pela primeira vez,
          pude conectar teoria acadêmica com a experiência prática que já possuía.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          Este período foi marcado pela criação de projetos web mais robustos e profissionais. Começei a trabalhar
          com tecnologias modernas como React e Next.js, descobrindo o poder do desenvolvimento full-stack e a
          satisfação de criar aplicações completas do zero.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          A faculdade não apenas expandiu meu conhecimento técnico, mas também me apresentou conceitos fundamentais
          como arquitetura de software, metodologias ágeis e boas práticas de desenvolvimento, estabelecendo uma
          base sólida para minha carreira profissional.
        </p>
      </div>
    ),
  },
  {
    title: "2022-23",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          Especialização e Aplicação Prática
        </h3>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          Este período foi caracterizado pelo aprofundamento técnico e pela aplicação prática dos conhecimentos.
          Dediquei-me intensivamente ao estudo de Java e Spring Boot, tecnologias que se tornaram fundamentais
          no meu arsenal de desenvolvimento.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          A motivação principal era contribuir significativamente para a empresa familiar de desenvolvimento de software.
          Criei várias aplicações Android que não apenas demonstravam minhas habilidades, mas também agregavam
          valor real ao negócio, unindo aprendizado teórico e aplicação comercial.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Este foi também um período de grande crescimento pessoal, aprendendo sobre responsabilidade profissional,
          deadlines, e a importância de código limpo e bem documentado. Cada projeto me ensinou algo novo sobre
          desenvolvimento mobile e arquitetura de aplicações.
        </p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          O Primeiro Contato com a Programação
        </h3>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          Este ano marcou o início oficial da minha jornada no desenvolvimento de software. A decisão de estudar Java
          foi estratégica, motivada pelo desejo de contribuir para o negócio familiar de tecnologia e pela
          popularidade da linguagem no desenvolvimento Android.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          Os primeiros meses foram desafiadores - aprender conceitos como orientação a objetos, estruturas de dados
          e lógica de programação exigiu dedicação e persistência. Cada pequena vitória, como conseguir fazer um
          &quot;Hello World&quot; ou criar minha primeira interface, trazia uma satisfação imensa.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          O foco no desenvolvimento Android abriu um mundo de possibilidades. Ver um aplicativo funcionando no
          celular, criado com minhas próprias mãos, foi um momento transformador que confirmou minha paixão pela
          programação e definiu o rumo da minha carreira.
        </p>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          Aprofundamento Técnico: O IF-Sul e a Programação Formal
        </h3>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          O ingresso no curso técnico de Eletrônica no IF-Sul Campus Pelotas foi motivado pela experiência
          anterior com o sistema da oficina do meu tio. Busquei formalizar e expandir os conhecimentos
          de programação que já havia experimentado com xHarbour.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          As aulas de lógica de programação e os primeiros códigos em linguagens como C aprofundaram conceitos
          que eu já havia experimentado na prática. A educação técnica me proporcionou uma base sólida em
          pensamento lógico e resolução de problemas de forma estruturada.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Infelizmente, não consegui concluir o curso devido às paralisações causadas pela pandemia mundial
          e outros fatores institucionais. Após 2 anos de estudos, precisei repensar minha trajetória,
          mas o conhecimento adquirido foi fundamental para os próximos passos.
        </p>
      </div>
    ),
  },
  {
    title: "2012",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          Primeiro Sistema Real: A Oficina do Tio
        </h3>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          Aos 12 anos, tive minha primeira experiência real com desenvolvimento de software. Meu tio,
          que possuía uma oficina mecânica, precisava de um sistema para controlar vendas e recebimentos.
          Com a orientação do meu pai, desenvolvi meu primeiro sistema em xHarbour (evolução do xBase).
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          Esta experiência foi transformadora. Ver um sistema que eu ajudei a criar sendo usado diariamente
          em um negócio real, resolvendo problemas concretos e facilitando a vida do meu tio, foi uma
          revelação sobre o poder da programação. Era mais que código - era uma solução tangível.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          O sucesso deste projeto plantou a semente do que se tornaria minha paixão pela programação.
          Foi aqui que descobri que não apenas gostava de tecnologia, mas que podia usar ela para
          criar soluções que realmente impactam a vida das pessoas e negócios.
        </p>
      </div>
    ),
  },
  {
    title: "2010",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          O Despertar da Curiosidade Tecnológica
        </h3>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          Mesmo aos 7-8 anos de idade, já demonstrava uma fascinação única por tecnologia. Enquanto outras crianças
          brincavam com brinquedos convencionais, eu encontrava alegria em desmontar e remontar computadores,
          tentando entender como aquelas peças se conectavam para criar algo tão poderoso.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          Essa curiosidade natural me levava a passar horas explorando hardware, conectando cabos, observando
          componentes e fazendo perguntas que muitas vezes os adultos ao redor não sabiam responder.
          Era como se houvesse uma conexão instintiva com a tecnologia.
        </p>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Olhando em retrospectiva, percebo que essa experiência precoce com hardware foi fundamental para
          desenvolver a base do pensamento lógico e sistemático que seria essencial na minha jornada como
          desenvolvedor. Foi aqui que plantaram-se as sementes da paixão que me guiaria por toda a vida.
        </p>
      </div>
    ),
  },
];

// Custom component for project cards with status badges
const ProjectCard = ({ items }: { items: typeof projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <a
          href={item.link}
          key={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block p-6 h-full w-full bg-black border border-neutral-800 rounded-2xl hover:border-neutral-600 transition-all duration-300 hover:shadow-xl"
        >
          <div className="relative z-50">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-zinc-100 font-bold tracking-wide text-lg">{item.title}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Alpha' ? 'bg-red-500/20 text-red-400' :
                item.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                  item.status === 'Production' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'Learning' ? 'bg-blue-500/20 text-blue-400' :
                      item.status === 'Development' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'
                }`}>
                {item.status}
              </span>
            </div>
            <p className="text-zinc-400 tracking-wide leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

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
      <section id="home" className="min-h-screen relative w-full overflow-hidden bg-white dark:bg-black flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 w-full h-full z-0">
          <Boxes />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-screen">
          <TypewriterEffectSmooth words={words} />

          <TextGenerateEffect
            words="Desenvolvedor Full Stack focado em criar soluções web modernas e eficientes. Combino criatividade com código para transformar ideias em aplicações funcionais."
            className="text-center text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8"
          />

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-neutral-800 transition-colors"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-xl bg-white text-black border border-black text-sm hover:bg-neutral-100 transition-colors"
            >
              Entrar em Contato
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
                Minha jornada na tecnologia começou na infância e evoluiu para uma carreira focada em desenvolvimento Full Stack.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                Especializo-me em criar aplicações web que resolvem problemas reais. Tenho experiência
                em desenvolvimento tanto para startups quanto para empresas locais, sempre buscando
                entregar soluções que agregam valor.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Atualmente, trabalho com tecnologias modernas como React, Next.js e Node.js,
                sempre explorando novas ferramentas para criar experiências excepcionais.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                <Image
                  src="/me.jpeg"
                  alt="Guilherme Müller"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white">
            Stack Tecnológico
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
            Projetos em Destaque
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, desde protótipos em desenvolvimento
            até aplicações em produção.
          </p>
          <ProjectCard items={projects} />
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="pt-20 pb-4 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white">
            Clientes Reais, Resultados Reais
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
            Empresas e profissionais que confiam nas minhas soluções para otimizar seus processos
            e impulsionar seus negócios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Radio Client */}
            <div className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                  📻
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg text-black dark:text-white">Rádio Cultura</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Comunicação</p>
                </div>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
                &quot;O sistema revolucionou nossa gestão administrativa. A interface intuitiva e os recursos
                automatizados nos permitem focar no que realmente importa: criar conteúdo de qualidade
                para nossos ouvintes.&quot; - Diretora Administrativa
              </p>
              <div className="flex items-center text-green-500 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Ativo desde 2025
              </div>
            </div>

            {/* Clinic Client */}
            <div className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                  🏥
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg text-black dark:text-white">Schadule Pro</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Agendamento</p>
                </div>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
                &quot;Desde que implementamos o sistema, nossa produtividade aumentou significativamente.
                A facilidade de uso e o agendamento automatizado reduziram o tempo gasto em tarefas
                administrativas significativamente, permitindo focar mais no atendimento.&quot; - Gerente de Operações
              </p>
              <div className="flex items-center text-green-500 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Ativo desde 2025
              </div>
            </div>

            {/* Restaurant Client */}
            <div className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-xl font-bold">
                  🍽️
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg text-black dark:text-white">GourmetFlow</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Gastronomia</p>
                </div>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
                &quot;Com o GourmetFlow, revolucionamos nossa operação diária. O sistema simplificou nosso
                processo de pedidos e o dashboard com métricas de vendas nos permite tomar decisões mais
                estratégicas, melhorando nossa eficiência operacional.&quot; - Gerente de Marketing
              </p>
              <div className="flex items-center text-green-500 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Ativo desde 2024
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">6+</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 dark:text-green-400 mb-2">350+</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Usuários Finais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-500 dark:text-purple-400 mb-2">100%</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Suporte ao Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <Timeline data={timelineData} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Sempre aberto para discutir novas oportunidades, projetos interessantes ou simplesmente trocar ideias sobre tecnologia.
          </p>

          <div className="space-y-4 max-w-md mx-auto">
            <a
              href="mailto:guilhermemullerxx@gmail.com"
              className="group flex items-center justify-between w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-200 bg-white dark:bg-neutral-900"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">Email</span>
              </div>
              <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href="https://github.com/coder-muller"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-200 bg-white dark:bg-neutral-900"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">GitHub</span>
              </div>
              <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href="https://x.com/codermuller"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-200 bg-white dark:bg-neutral-900"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">Twitter</span>
              </div>
              <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
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

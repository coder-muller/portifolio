# Portfólio Guilherme Müller 🚀

Portfólio pessoal desenvolvido com Next.js 15, TypeScript e componentes da Aceternity UI, apresentando meus projetos e habilidades como desenvolvedor Full Stack.

## ✨ Características

- **Design Moderno**: Interface minimalista inspirada no Cursor e Aceternity UI
- **Animações Suaves**: Efeitos de typewriter, text generation e animações de hover
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Dark Theme**: Tema escuro elegante por padrão
- **Performance**: Construído com Next.js 15 e otimizações modernas
- **Componentes Reutilizáveis**: Biblioteca de componentes da Aceternity UI

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilização**: TailwindCSS
- **Animações**: Framer Motion
- **Componentes**: Aceternity UI
- **Tipografia**: Geist Sans & Geist Mono

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/coder-muller/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📂 Estrutura do Projeto

```
├── app/
│   ├── globals.css      # Estilos globais e variáveis CSS
│   ├── layout.tsx       # Layout raiz da aplicação
│   └── page.tsx         # Página principal do portfólio
├── components/
│   └── ui/              # Componentes da Aceternity UI
├── hooks/               # Custom hooks React
├── lib/
│   └── utils.ts         # Utilitários e helpers
└── public/              # Assets estáticos
```

## 🎨 Seções do Portfólio

### 🏠 Hero Section
- Efeito typewriter com nome e título
- Animação de texto suave para descrição
- Background animado com boxes
- Botões de navegação interativos

### 👨‍💻 Sobre Mim
- Descrição detalhada do perfil profissional
- Informações sobre formação e objetivos
- Visual moderno com gradientes

### 🛠️ Tecnologias & Ferramentas
- Layout Bento Grid para apresentar skills
- Categorizado em Frontend, Backend, DevOps e Design
- Ícones representativos para cada área

### 📁 Projetos
- Cards interativos com hover effects
- Descrição detalhada de cada projeto
- Links diretos para repositórios

### 📅 Timeline
- Linha do tempo da jornada profissional
- Placeholders para screenshots dos projetos
- Animação suave no scroll

### 📞 Contato
- Links diretos para email, GitHub e Instagram
- Botões estilizados com hover effects

## 🎯 Personalização

Para personalizar o portfólio:

1. **Informações Pessoais**: Edite os dados em `app/page.tsx`
2. **Projetos**: Atualize o array `projects` com seus próprios projetos
3. **Skills**: Modifique o array `skills` com suas tecnologias
4. **Timeline**: Customize o array `timelineData` com sua experiência
5. **Imagens**: Substitua os placeholders por screenshots reais dos projetos

### Adicionando Screenshots dos Projetos

Para adicionar imagens reais dos seus projetos:

1. Coloque as imagens na pasta `public/`
2. Substitua os placeholders no timeline:
```tsx
// Em vez de:
<div className="rounded-lg bg-gradient-to-br...">
  <span>Screenshot do Projeto</span>
</div>

// Use:
<img
  src="/caminho-para-sua-imagem.png"
  alt="Descrição da imagem"
  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow border"
/>
```

## 🎨 Temas e Cores

O projeto usa um sistema de cores baseado em CSS custom properties que suporta tema escuro por padrão. As cores principais podem ser customizadas em `app/globals.css`.

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push na branch main

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 📄 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Linting do código
```

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Contato

**Guilherme Müller** - [@coder-muller](https://github.com/coder-muller)

- Email: guilhermemullerxx@gmail.com
- Instagram: [@guilherme.cmuller](https://instagram.com/guilherme.cmuller)
- GitHub: [coder-muller](https://github.com/coder-muller)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!

**Desenvolvido com ❤️ por [Guilherme Müller](https://github.com/coder-muller)**

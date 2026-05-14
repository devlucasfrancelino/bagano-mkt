import './App.css'

const drivePhotos = [
  'https://drive.google.com/thumbnail?id=1gvMXE_GBGqrI4wB5nCBac_yfGM6cpDCR&sz=w1400',
  'https://drive.google.com/thumbnail?id=1Hc9M4-ag8ITPhY-qu7syRk4xg0RkToQR&sz=w1400',
  'https://drive.google.com/thumbnail?id=1mqxfl7fKdR4zE04mH4fmgsCZJJjX9pPq&sz=w1400',
  'https://drive.google.com/thumbnail?id=1TLuvCRXuSLlNmUWmBRj-z6Aw2j5jx8NW&sz=w1400',
  'https://drive.google.com/thumbnail?id=1vu_bZHn_fEufRN2d6LfEsx2SgmD7KB58&sz=w1400',
  'https://drive.google.com/thumbnail?id=15ulf31ruGa9Te0mML16bMEvBJ_GSckDC&sz=w1400',
]

const services = [
  {
    title: 'Posicionamento de marca',
    text: 'Ajustamos voz, promessa e identidade para restaurantes que querem ser lembrados antes mesmo da primeira garfada.',
  },
  {
    title: 'Social media gastronômico',
    text: 'Criamos conteúdos com ritmo, apetite e estratégia para transformar seguidores em reservas, pedidos e fila na porta.',
  },
  {
    title: 'Fotos, vídeos e direção',
    text: 'Pensamos luz, textura, ângulo e narrativa para mostrar o prato como experiência, não apenas como produto.',
  },
  {
    title: 'Campanhas e lançamentos',
    text: 'Planejamos cardápios sazonais, aberturas, eventos e ativações com uma comunicação que chega quente no público certo.',
  },
]

const processSteps = [
  ['01', 'Mergulhar', 'Entramos na essência da casa, do público e da experiência que a marca quer servir.'],
  ['02', 'Temperar', 'Damos forma para mensagem, visual, calendário, ofertas e narrativa sensorial.'],
  ['03', 'Servir', 'Produzimos campanhas, criativos e conteúdos prontos para circular com consistência.'],
  ['04', 'Converter', 'Medimos respostas, refinamos rotas e deixamos cada ação mais saborosa para o negócio.'],
]

const marqueeItems = [
  'Social media',
  'Branding',
  'Fotografia',
  'Vídeo',
  'Campanhas',
  'Restaurantes',
  'Bares',
  'Delivery',
]

const galleryCards = [
  {
    label: 'Conteúdo autoral',
    title: 'Texturas, cortes e cenas que fazem o público sentir antes de provar.',
    photo: drivePhotos[0],
  },
  {
    label: 'Branding',
    title: 'Marcas com memória visual, voz própria e apetite de crescimento.',
    photo: drivePhotos[2],
  },
  {
    label: 'Campanhas',
    title: 'Lançamentos, combos e experiências embaladas como desejo.',
    photo: drivePhotos[4],
  },
]

function PlateSketch() {
  return (
    <svg className="plate-sketch" viewBox="0 0 360 220" aria-hidden="true">
      <path d="M110 120c24-58 111-73 167-28" />
      <path d="M98 128c55 50 146 50 201 3" />
      <path d="M135 116c21-16 59-23 94-10 29 11 46 32 48 49" />
      <path d="M142 120c22 12 51 15 81 9" />
      <path d="M144 135c29 8 61 8 94-2" />
      <path d="M59 71c8 43 8 77 0 119" />
      <path d="M44 72c5 39 5 79 0 118" />
      <path d="M76 74c-6 37-6 76 0 116" />
      <path d="M317 66c14 42 14 84 0 126" />
      <path d="M252 156c18-1 32 8 35 22-21 4-39-3-48-17 4-3 8-5 13-5Z" />
      <path d="M260 170l18 9" />
    </svg>
  )
}

function BottleSketch() {
  return (
    <svg className="bottle-sketch" viewBox="0 0 180 240" aria-hidden="true">
      <path d="M80 14c18-5 37-1 45 10-5 10-12 18-12 38v110c0 25 13 34 13 45 0 14-18 20-44 20s-45-6-45-20c0-11 13-20 13-45V62c0-20-7-28-12-38 7-5 21-7 42-10Z" />
      <path d="M54 75c18 9 40 11 61 2" />
      <path d="M52 176c22 9 46 10 67 0" />
      <path d="M62 205c17 9 36 9 53 1" />
    </svg>
  )
}

function App() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Bagano - início">
          <span>BGN</span>
          <strong>Bagano</strong>
        </a>
        <nav className="nav-links" aria-label="Menu principal">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#metodo">Método</a>
          <a href="#portfolio">Portfólio</a>
        </nav>
        <a className="nav-cta" href="#contato">
          Fale com a gente
        </a>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Agência especializada em marketing gastronômico</p>
          <h1>
            Marketing
            <span>que dá água</span>
            <em>na boca.</em>
          </h1>
          <p className="hero-lead">
            A Bagano mergulha na essência da sua marca para incorporar cada aroma,
            textura e sabor em uma comunicação irresistível.
          </p>
          <div className="hero-actions">
            <a href="#contato" className="button primary">
              Quero temperar minha marca
            </a>
            <a href="#servicos" className="button secondary">
              Ver serviços
            </a>
          </div>
        </div>

        <div className="hero-board" aria-label="Colagem visual Bagano">
          <div
            className="photo-frame photo-frame-large"
            style={{ '--photo': `url(${drivePhotos[2]})` } as React.CSSProperties}
          >
            <span>social que abre o apetite</span>
          </div>
          <div
            className="photo-frame photo-frame-small"
            style={{ '--photo': `url(${drivePhotos[1]})` } as React.CSSProperties}
          />
          <div className="monogram-orb">
            <span>BGN</span>
          </div>
          <div className="hero-note">
            <strong>Branding / conteúdo / desejo</strong>
            <p>Da identidade ao post que faz alguém reservar uma mesa.</p>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Especialidades Bagano">
        <div>
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="about-section" id="sobre">
        <div className="about-copy">
          <p className="eyebrow">Sobre a Bagano</p>
          <h2>
            Nós mergulhamos na essência da sua marca para transformar sabor em
            presença, memória e venda.
          </h2>
          <p>
            A Bagano nasceu da paixão por criar experiências únicas que
            transcendem o simples ato de comer. Para nós, comida e marca dividem a
            mesma mesa: precisam de ponto, cuidado, personalidade e desejo.
          </p>
          <p className="script-line">Que tal sentir o gostinho do sucesso?</p>
        </div>

        <div className="meaning-card">
          <div className="lips-mark" aria-hidden="true" />
          <p className="meaning-title">Bagano</p>
          <p>
            O nome conversa com o processo de marinar: embeber alimentos em
            líquidos saborosos para realçar sabor e textura. Fazemos isso com
            marcas gastronômicas.
          </p>
          <PlateSketch />
        </div>
      </section>

      <section className="services-section" id="servicos">
        <div className="section-heading">
          <p className="eyebrow">O que servimos</p>
          <h2>Uma cozinha estratégica para marcas com fome de crescimento.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="method-section" id="metodo">
        <div className="method-panel">
          <p className="eyebrow">Metodo Bagano</p>
          <h2>Da marinada ao prato servido.</h2>
          <p>
            Organizamos estratégia, estética e produção para cada marca aparecer
            com consistência e vontade de ser provada.
          </p>
          <BottleSketch />
        </div>
        <div className="step-list">
          {processSteps.map(([number, title, text]) => (
            <article className="step-card" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-heading centered">
          <p className="eyebrow">Visual de dar fome</p>
          <h2>Conteúdos com cara de restaurante cheio.</h2>
        </div>
        <div className="gallery-grid">
          {galleryCards.map((card) => (
            <article
              className="gallery-card"
              key={card.label}
              style={{ '--photo': `url(${card.photo})` } as React.CSSProperties}
            >
              <div className="gallery-image" />
              <div>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contato">
        <div>
          <p className="eyebrow">Vamos conversar?</p>
          <h2>Reserve uma mesa para a sua marca crescer.</h2>
          <p>
            Conte para a Bagano qual é o sabor do seu negócio. A gente ajuda a
            transformar isso em presença digital, desejo e resultado.
          </p>
        </div>
        <a
          className="button primary cta-button"
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
        >
          Fale com a gente
        </a>
      </section>

      <footer className="footer">
        <span>Bagano Marketing Gastronômico</span>
        <span>Branding / Social / Conteúdo / Campanhas</span>
      </footer>
    </main>
  )
}

export default App

'use client';

import { useEffect } from 'react';
import {
  ArrowRight, Check,
  Star, Zap, Target, BarChart3, Users, Shield,
  Phone, Mail, MapPin, Clock,
  Image as ImageIcon, Camera, Building2, Package,
  MessageSquare, Handshake,
} from 'lucide-react';

/* ── Scroll reveal ──────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Carousel cards para o hero ─────────────────────────── */

interface HeroCardData {
  gradient: string;
  accent: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
}

const heroCards: HeroCardData[] = [
  {
    gradient: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
    accent: '#52B788',
    icon: <Building2 size={56} color="#52B788" strokeWidth={1.4} />,
    label: 'Foto da Sua Empresa',
    sub: 'Mostre o ambiente, a fachada ou o escritório da sua marca',
  },
  {
    gradient: 'linear-gradient(135deg, #1B2A5E 0%, #2A4090 100%)',
    accent: '#7EB9FF',
    icon: <Package size={56} color="#7EB9FF" strokeWidth={1.4} />,
    label: 'Foto do Seu Produto',
    sub: 'Destaque o produto principal que transforma a vida do cliente',
  },
  {
    gradient: 'linear-gradient(135deg, #4A1942 0%, #7B2D8B 100%)',
    accent: '#DA77F2',
    icon: <Handshake size={56} color="#DA77F2" strokeWidth={1.4} />,
    label: 'Foto do Seu Serviço',
    sub: 'Registre sua equipe em ação ou o serviço sendo prestado',
  },
  {
    gradient: 'linear-gradient(135deg, #7A2200 0%, #C1440E 100%)',
    accent: '#FFB86C',
    icon: <MessageSquare size={56} color="#FFB86C" strokeWidth={1.4} />,
    label: 'Foto do Seu Cliente',
    sub: 'Mostre clientes felizes com o resultado que você entregou',
  },
];

function HeroCard({ card }: { card: HeroCardData }) {
  return (
    <div style={{
      width: 300,
      background: card.gradient,
      borderRadius: 20,
      padding: '36px 28px 28px',
      boxShadow: '0 24px 64px rgba(0,0,0,0.30)',
      border: '1px solid rgba(255,255,255,0.10)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 0,
    }}>
      {/* Ícone central */}
      <div style={{
        width: 110, height: 110, borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 22,
        border: `2px solid ${card.accent}30`,
      }}>
        {card.icon}
      </div>

      {/* Barra decorativa */}
      <div style={{ width: 40, height: 3, borderRadius: 2, background: card.accent, marginBottom: 14 }} />

      <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 16, marginBottom: 10, lineHeight: 1.3 }}>
        {card.label}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.65, maxWidth: 220 }}>
        {card.sub}
      </p>

      {/* Tag inferior */}
      <div style={{
        marginTop: 24,
        background: 'rgba(255,255,255,0.1)',
        borderRadius: 8, padding: '7px 16px',
        fontSize: 11, fontWeight: 700, color: card.accent,
        letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        Aqui vai sua imagem
      </div>
    </div>
  );
}

/* ── Image placeholder com Lucide ───────────────────────── */
function ImgPlaceholder({ label, icon, height = 420 }: {
  label: string;
  icon?: React.ReactNode;
  height?: number;
}) {
  return (
    <div style={{
      width: '100%', minHeight: height, borderRadius: 18,
      background: 'linear-gradient(135deg, #D4E6CC 0%, #BFD9B5 100%)',
      border: '2px dashed #27844A',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', gap: 14, padding: 28, textAlign: 'center',
    }}>
      <div style={{ color: '#1B6638', opacity: 0.6 }}>
        {icon ?? <ImageIcon size={52} strokeWidth={1.2} />}
      </div>
      <span style={{ color: '#1B6638', fontWeight: 700, fontSize: 14, maxWidth: 240, lineHeight: 1.6 }}>
        {label}
      </span>
    </div>
  );
}

/* ── Página principal ───────────────────────────────────── */
export default function LandingPage() {
  useReveal();

  const navy    = '#0C1A2B';
  const navyMid = '#152333';
  const text    = '#1A1D21';
  const muted   = '#5A6472';
  const bg      = '#F0EAE1';
  const bgAlt   = '#E6DFDA';
  const bgCard  = '#F7F3EE';
  const primary = '#1B6638';
  const primMid = '#27844A';
  const primGlow= '#3CAF6A';
  const border  = '#D8D1C8';

  return (
    <>
      {/* ══ 1. HEADER ═══════════════════════════════════════ */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: bgCard,
        borderBottom: `1px solid ${border}`,
        boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 28px',
          height: 66, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 24,
        }}>
          <div className="logo-placeholder">✦ &nbsp;Sua Logo Aqui</div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {[
              { label: 'Sobre',          href: '#sobre' },
              { label: 'O Que Oferecemos', href: '#servicos' },
              { label: 'Diferenciais',   href: '#diferenciais' },
              { label: 'Serviços',       href: '#projetos' },
              { label: 'Contato',        href: '#contato' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>

          <a href="#contato" className="btn-primary" style={{ fontSize: 14, padding: '10px 22px' }}>
            Fale Conosco <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main>
        {/* ══ 2. HERO ═════════════════════════════════════════ */}
        <section id="sobre" style={{
          background: 'linear-gradient(140deg, #E8F0E4 0%, #DDE8D8 50%, #E4EDE0 100%)',
          padding: '72px 28px 64px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* blobs decorativos */}
          <div style={{ position:'absolute', width:400, height:400, background:primary, top:-100, left:-80, borderRadius:'50%', filter:'blur(90px)', opacity:0.09, pointerEvents:'none' }} />
          <div style={{ position:'absolute', width:280, height:280, background:navy, bottom:-60, right:-40, borderRadius:'50%', filter:'blur(80px)', opacity:0.07, pointerEvents:'none' }} />

          <div style={{
            maxWidth: 1200, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 64, alignItems: 'center',
          }}>

            {/* ── ESQUERDA: texto ── */}
            <div>
              <span className="section-tag reveal">Apresentação da Empresa</span>

              <h1 className="reveal delay-1" style={{
                fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 900,
                lineHeight: 1.15, color: navy,
                marginTop: 14, marginBottom: 20, letterSpacing: '-0.02em',
              }}>
                Aqui Começa a História da
                <span style={{ color: primary }}> Sua Marca</span> no Mundo Digital
              </h1>

              <p className="reveal delay-2" style={{
                fontSize: 17, lineHeight: 1.8,
                color: '#3A4A3A', marginBottom: 36, maxWidth: 500,
              }}>
                Este é o espaço da sua proposta de valor — a mensagem que apresenta sua empresa, define seu propósito e faz o visitante pensar:{' '}
                <em style={{ color: primary, fontWeight: 600 }}>"é exatamente isso que eu precisava."</em>
              </p>

              <div className="reveal delay-3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="#contato" className="btn-primary" style={{ fontSize: 15 }}>
                  Quero Saber Mais <ArrowRight size={16} />
                </a>
                <a href="#servicos" className="btn-outline" style={{ fontSize: 15 }}>
                  Nossos Serviços
                </a>
              </div>

              {/* Stats */}
              <div className="reveal delay-4" style={{
                display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
                gap: 12, marginTop: 48,
              }}>
                {[
                  { v: '10k+',   l: 'Clientes' },
                  { v: '500+',   l: 'Projetos' },
                  { v: '15 anos',l: 'Experiência' },
                  { v: '98%',    l: 'Satisfação' },
                ].map((s) => (
                  <div key={s.l} className="stat-card">
                    <div style={{ fontSize: 26, fontWeight: 900, color: primary, lineHeight: 1, marginBottom: 5 }}>
                      {s.v}
                    </div>
                    <div style={{ fontSize: 12, color: muted, fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── DIREITA: carrossel de imagens ── */}
            <div className="reveal-right">
              {/* Palco da animação */}
              <div className="hero-stage">
                {heroCards.map((card, i) => (
                  <div key={i} className="flow-item">
                    <HeroCard card={card} />
                  </div>
                ))}

                {/* Gradiente fade nas bordas laterais */}
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: 24, pointerEvents: 'none',
                  background: 'linear-gradient(90deg, rgba(224,232,218,0.65) 0%, transparent 16%, transparent 84%, rgba(224,232,218,0.65) 100%)',
                }} />
              </div>

              {/* Indicadores de progresso */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 18 }}>
                {['dot-1','dot-2','dot-3','dot-4'].map((cls) => (
                  <div key={cls} className={cls} style={{
                    width: 8, height: 8, borderRadius: 4,
                    background: 'rgba(27,102,56,0.3)',
                    transformOrigin: 'center',
                    transition: 'transform 0.4s, background 0.4s',
                  }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. O QUE OFERECEMOS ═════════════════════════════ */}
        <section id="servicos" style={{ background: bg, padding: '88px 28px' }}>
          <div style={{
            maxWidth: 1200, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 72, alignItems: 'center',
          }}>
            <div>
              <span className="section-tag reveal">O Que Oferecemos</span>
              <h2 className="reveal delay-1" style={{
                fontSize: 'clamp(24px,3.2vw,38px)', fontWeight: 800,
                color: navy, margin: '12px 0 14px', lineHeight: 1.2,
              }}>
                Tudo que Sua Empresa Precisa Para Crescer
              </h2>
              <p className="reveal delay-2" style={{ color: muted, lineHeight: 1.8, marginBottom: 36, fontSize: 16 }}>
                Nesta seção ficam os principais benefícios e diferenciais do seu produto ou serviço — os motivos concretos pelos quais o cliente escolhe você, e não o concorrente.
              </p>

              {[
                { icon: <Star size={21} color="white" strokeWidth={1.8} />,   title: 'Benefício Principal 01 — Escreva aqui', desc: 'O primeiro e mais importante diferencial da sua oferta. O que muda na vida do cliente ao escolher você?' },
                { icon: <Target size={21} color="white" strokeWidth={1.8} />, title: 'Benefício Principal 02 — Escreva aqui', desc: 'O segundo grande diferencial que faz sua solução se destacar no mercado e gerar valor real e mensurável.' },
                { icon: <Zap size={21} color="white" strokeWidth={1.8} />,    title: 'Benefício Principal 03 — Escreva aqui', desc: 'O terceiro ponto que consolida a decisão do visitante e o convida a dar o próximo passo com confiança.' },
              ].map((item, i) => (
                <div key={item.title} className={`reveal delay-${i + 3}`} style={{ display: 'flex', gap: 16, marginBottom: 26 }}>
                  <div className="icon-box" style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: navy, marginBottom: 4, fontSize: 15 }}>{item.title}</h3>
                    <p style={{ color: muted, fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal-right">
              <ImgPlaceholder
                label="Aqui vai uma foto do seu produto, serviço ou equipe em ação"
                icon={<Camera size={52} strokeWidth={1.2} />}
              />
            </div>
          </div>
        </section>

        {/* ══ 4. POR QUE NOS ESCOLHER ═════════════════════════ */}
        <section id="diferenciais" style={{ background: bgAlt, padding: '88px 28px' }}>
          <div style={{
            maxWidth: 1200, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 72, alignItems: 'center',
          }}>
            <div className="reveal-left">
              <ImgPlaceholder
                label="Foto que transmita a essência da sua empresa — equipe, ambiente ou resultado entregue"
                icon={<ImageIcon size={52} strokeWidth={1.2} />}
              />
            </div>

            <div>
              <span className="section-tag reveal">Por Que Nos Escolher</span>
              <h2 className="reveal delay-1" style={{
                fontSize: 'clamp(24px,3.2vw,38px)', fontWeight: 800,
                color: navy, margin: '12px 0 14px', lineHeight: 1.2,
              }}>
                Razões que Fazem a Diferença no Longo Prazo
              </h2>
              <p className="reveal delay-2" style={{ color: muted, lineHeight: 1.8, marginBottom: 32, fontSize: 16 }}>
                Aqui ficam os argumentos que constroem confiança — os pontos que transformam interesse em decisão, e visita em cliente.
              </p>

              {[
                { t: 'Razão 01 — Argumento forte e relevante',          d: 'Detalhe como esse ponto impacta positivamente a vida ou o negócio do seu cliente de forma concreta.' },
                { t: 'Razão 02 — Um diferencial que o mercado reconhece', d: 'Explore o que torna sua empresa única e por que isso importa para quem está considerando contratar.' },
                { t: 'Razão 03 — Resultado tangível e comprovado',      d: 'Conecte sua proposta a um resultado concreto: mais tempo, mais receita, mais tranquilidade.' },
                { t: 'Razão 04 — Suporte e acompanhamento contínuo',    d: 'Mostre que a relação não termina na venda — você está presente em cada etapa da jornada.' },
              ].map((item, i) => (
                <div key={item.t} className={`reveal delay-${i + 3}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 20 }}>
                  <div style={{
                    flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                    background: primary, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2,
                  }}>
                    <Check size={12} color="white" strokeWidth={3} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: navy, marginBottom: 3, fontSize: 15 }}>{item.t}</p>
                    <p style={{ color: muted, fontSize: 14, lineHeight: 1.7 }}>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. SERVIÇOS ═════════════════════════════════════ */}
        <section id="projetos" style={{ background: bg, padding: '88px 28px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="section-tag reveal">Serviços &amp; Projetos</span>
              <h2 className="reveal delay-1" style={{
                fontSize: 'clamp(24px,3.2vw,38px)', fontWeight: 800,
                color: navy, margin: '12px 0 14px', lineHeight: 1.2,
              }}>
                O Que Fazemos por Você
              </h2>
              <p className="reveal delay-2" style={{ color: muted, maxWidth: 520, margin: '0 auto', lineHeight: 1.8, fontSize: 16 }}>
                Aqui ficam os cards com as categorias de serviço, as áreas de atuação ou os projetos de destaque da sua empresa.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
              {[
                { icon: <BarChart3 size={21} color="white" strokeWidth={1.8} />, title: 'Serviço ou Categoria 01', tag: 'Mais Procurado' },
                { icon: <Users    size={21} color="white" strokeWidth={1.8} />, title: 'Serviço ou Categoria 02', tag: null },
                { icon: <Shield   size={21} color="white" strokeWidth={1.8} />, title: 'Serviço ou Categoria 03', tag: null },
                { icon: <Target   size={21} color="white" strokeWidth={1.8} />, title: 'Serviço ou Categoria 04', tag: 'Novidade' },
                { icon: <Star     size={21} color="white" strokeWidth={1.8} />, title: 'Serviço ou Categoria 05', tag: null },
                { icon: <Zap      size={21} color="white" strokeWidth={1.8} />, title: 'Serviço ou Categoria 06', tag: null },
              ].map((c, i) => (
                <div key={c.title} className={`service-card card-hover reveal delay-${(i % 3) + 1}`}>
                  {c.tag && (
                    <span style={{
                      position: 'absolute', top: 14, right: 14,
                      background: primary, color: '#fff',
                      fontSize: 10.5, fontWeight: 700, padding: '3px 10px', borderRadius: 100,
                    }}>
                      {c.tag}
                    </span>
                  )}
                  <div className="icon-box" style={{ marginBottom: 14 }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, color: navy, marginBottom: 10, fontSize: 15 }}>{c.title}</h3>
                  <p style={{ color: muted, fontSize: 14, lineHeight: 1.7 }}>
                    Descrição objetiva do serviço e qual resultado o cliente pode esperar ao contratá-lo.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 6. DEPOIMENTOS ══════════════════════════════════ */}
        <section style={{ background: bgAlt, padding: '88px 28px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 50 }}>
              <span className="section-tag reveal">Depoimentos</span>
              <h2 className="reveal delay-1" style={{
                fontSize: 'clamp(24px,3.2vw,38px)', fontWeight: 800,
                color: navy, margin: '12px 0 14px', lineHeight: 1.2,
              }}>
                O Que Dizem Quem Já Viveu Esta Experiência
              </h2>
              <p className="reveal delay-2" style={{ color: muted, maxWidth: 500, margin: '0 auto', lineHeight: 1.8, fontSize: 16 }}>
                Aqui ficam as avaliações reais dos seus clientes — os depoimentos que constroem prova social e aumentam a confiança de quem ainda não te conhece.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
              {[
                { name: 'Nome do Cliente 01', role: 'Cargo · Empresa' },
                { name: 'Nome do Cliente 02', role: 'Cargo · Empresa' },
                { name: 'Nome do Cliente 03', role: 'Cargo · Empresa' },
              ].map((t, i) => (
                <div key={t.name} className={`card-hover reveal delay-${i + 1}`} style={{
                  background: bgCard, borderRadius: 16, padding: '30px 26px',
                  boxShadow: '0 4px 22px rgba(0,0,0,0.07)', border: `1px solid ${border}`,
                }}>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} fill={primary} color={primary} />
                    ))}
                  </div>
                  <p style={{ color: '#3A4A3A', lineHeight: 1.8, marginBottom: 22, fontSize: 15, fontStyle: 'italic' }}>
                    "Aqui fica o depoimento real do cliente — uma frase poderosa sobre como seu produto ou serviço transformou os resultados dele."
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${primary}, ${primGlow})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 800, fontSize: 16, flexShrink: 0,
                    }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: navy, fontSize: 14 }}>{t.name}</p>
                      <p style={{ color: muted, fontSize: 12 }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. CTA FINAL ════════════════════════════════════ */}
        <section id="contato" style={{
          background: `linear-gradient(135deg, ${navy} 0%, ${navyMid} 60%, #152A20 100%)`,
          padding: '96px 28px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position:'absolute', width:480, height:480, background:primary, top:-150, right:-90, borderRadius:'50%', filter:'blur(100px)', opacity:0.09, pointerEvents:'none' }} />
          <div style={{ position:'absolute', width:320, height:320, background:primGlow, bottom:-100, left:40, borderRadius:'50%', filter:'blur(80px)', opacity:0.07, pointerEvents:'none' }} />

          <div style={{ maxWidth: 740, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <span className="section-tag reveal" style={{ background: 'rgba(60,175,106,0.18)', color: '#5DD68A' }}>
              Próximo Passo
            </span>

            <h2 className="reveal delay-1" style={{
              fontSize: 'clamp(26px,3.8vw,44px)', fontWeight: 900, color: '#fff',
              margin: '14px 0 18px', lineHeight: 1.2, letterSpacing: '-0.02em',
            }}>
              Pronto para Transformar Sua Presença Digital?
            </h2>

            <p className="reveal delay-2" style={{ color: 'rgba(255,255,255,0.68)', fontSize: 17, lineHeight: 1.8, marginBottom: 44 }}>
              Este é o momento em que você convida o visitante a agir. Uma frase direta, um benefício claro e um botão irresistível — aqui ficam o formulário de contato, o número de WhatsApp ou o link de agendamento da sua empresa.
            </p>

            <div className="reveal delay-3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" className="btn-primary" style={{ background: primary, fontSize: 16, padding: '16px 40px' }}>
                Fale com Nossa Equipe <ArrowRight size={17} />
              </a>
              <a
                href="#"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: 15,
                  textDecoration: 'none', padding: '16px 28px',
                  border: '1px solid rgba(255,255,255,0.22)', borderRadius: 8,
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color='#fff'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background='transparent'; (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.75)'; }}
              >
                Solicitar Orçamento
              </a>
            </div>

            <div className="reveal delay-4" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 50, flexWrap: 'wrap' }}>
              {[
                { icon: <Phone  size={14} />, label: '(00) 00000-0000 — Aqui fica seu telefone' },
                { icon: <Mail   size={14} />, label: 'contato@suaempresa.com.br' },
                { icon: <MapPin size={14} />, label: 'Cidade, Estado — Brasil' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                  <span style={{ color: '#5DD68A' }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ══ FOOTER ══════════════════════════════════════════ */}
      <footer style={{ background: '#080F1A', padding: '52px 28px 28px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 44 }}>

            {/* Logo col */}
            <div>
              <div className="logo-placeholder" style={{ marginBottom: 16 }}>✦ &nbsp;Sua Logo Aqui</div>
              <p style={{ fontSize: 13, lineHeight: 1.8, maxWidth: 260, color: 'rgba(255,255,255,0.42)' }}>
                Aqui fica a descrição curta da empresa — propósito, missão ou tagline. Uma ou duas linhas que resumem quem vocês são.
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                {['LN','FB','IG','YT'].map((s) => (
                  <a key={s} href="#" style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.38)',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background=primary; (e.currentTarget as HTMLElement).style.color='#fff'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.38)'; }}
                  >{s}</a>
                ))}
              </div>
            </div>

            {/* Colunas */}
            {[
              { title: 'Empresa',  links: ['Sobre Nós','Nossa Equipe','Valores & Missão','Carreiras','Blog'] },
              { title: 'Serviços', links: ['Serviço 01','Serviço 02','Serviço 03','Serviço 04','Ver Todos'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 18 }}>{col.title}</h4>
                {col.links.map((l) => (
                  <a key={l} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: 11, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color='#5DD68A')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.4)')}
                  >{l}</a>
                ))}
              </div>
            ))}

            {/* Contato */}
            <div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 18 }}>Contato</h4>
              {[
                { icon: <Phone   size={13} />, text: 'Aqui fica seu telefone' },
                { icon: <Mail    size={13} />, text: 'Seu e-mail de contato' },
                { icon: <MapPin  size={13} />, text: 'Endereço completo' },
                { icon: <Clock   size={13} />, text: 'Horário de atendimento' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 13, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                  <span style={{ color: '#5DD68A', flexShrink: 0 }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 22,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 12, fontSize: 12, color: 'rgba(255,255,255,0.28)',
          }}>
            <span>© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</span>
            <div style={{ display: 'flex', gap: 22 }}>
              {['Política de Privacidade','Termos de Uso','Cookies'].map((l) => (
                <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color='#5DD68A')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.28)')}
                >{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import {
  Hexagon,
  Diamond,
  CircleDot,
  Pyramid,
  Shield,
  Cone
} from "lucide-react";

export const services = [
  {
    icon: Hexagon,
    name: "Arquitetura de Software",
    desc: "Estruturas escaláveis, decisões técnicas fundamentadas e sistemas que crescem com o seu negócio.",
    tag: "DESIGN SYSTEMS",
  },
  {
    icon: Diamond,
    name: "Desenvolvimento Full-Stack",
    desc: "Aplicações end-to-end com foco em performance, manutenibilidade e experiência do desenvolvedor.",
    tag: "WEB & API",
  },
  {
    icon: CircleDot,
    name: "Code Review & Mentoria",
    desc: "Eleve a qualidade do seu time com revisões profundas, padrões claros e cultura de engenharia.",
    tag: "TEAM GROWTH",
  },
  {
    icon: Pyramid,
    name: "Consultoria Técnica",
    desc: "Diagnóstico de projetos, roadmaps estratégicos e decisões tecnológicas alinhadas ao negócio.",
    tag: "STRATEGY",
  },
  {
    icon: Shield,
    name: "Otimização de Performance",
    desc: "Auditorias profundas, profiling e refatoração para sistemas que precisam de velocidade real.",
    tag: "PERFORMANCE",
  },
  {
    icon: Cone,
    name: "DevOps & Infraestrutura",
    desc: "Pipelines CI/CD, containerização, observabilidade e deploy confiável em qualquer escala.",
    tag: "INFRA & OPS",
  },
];

export const process = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Mapeamos o estado atual, identificamos gargalos e definimos objetivos claros para o engajamento.",
  },
  {
    num: "02",
    title: "Estratégia",
    desc: "Construímos um plano técnico detalhado, priorizando entregas de maior impacto.",
  },
  {
    num: "03",
    title: "Execução",
    desc: "Implementação com acompanhamento próximo, code reviews e comunicação transparente.",
  },
  {
    num: "04",
    title: "Entrega",
    desc: "Documentação, handoff cuidadoso e suporte pós-entrega para garantir autonomia do seu time.",
  },
];

export const testimonials = [
  {
    quote:
      "A consultoria transformou completamente a forma como nosso time pensa sobre arquitetura. Em 3 meses saímos de um sistema legado caótico para uma base sólida e escalável. Não é exagero dizer que salvou nosso produto.",
    name: "Rafael Souza",
    role: "CTO · Fintech Series B",
    initials: "RS",
  },
  {
    quote:
      "Profissionalismo técnico raro. Cada decisão bem justificada, nada de hype desnecessário.",
    name: "Camila Torres",
    role: "Lead Engineer · SaaS",
    initials: "CT",
  },
  {
    quote:
      "ROI claro desde a primeira semana. Nosso deploy ficou 4x mais rápido.",
    name: "Lucas Menezes",
    role: "Founder · EdTech",
    initials: "LM",
  },
];

export const plans = [
  {
    name: "Diagnóstico",
    desc: "Ideal para projetos que precisam de clareza técnica rápida",
    price: "2.400",
    period: "/ projeto",
    features: [
      "Auditoria de código (até 30h)",
      "Relatório técnico detalhado",
      "Sessão de 2h com o time",
      "Roadmap priorizado",
      "30 dias de suporte por email",
    ],
    featured: false,
  },
  {
    name: "Aceleração",
    desc: "Para times que precisam de acompanhamento contínuo",
    price: "5.800",
    period: "/ mês",
    features: [
      "Até 40h de consultoria/mês",
      "Code reviews ilimitados",
      "Weekly 1:1 com tech lead",
      "Pair programming sessions",
      "Acesso prioritário em urgências",
      "Documentação técnica",
    ],
    featured: true,
  },
  {
    name: "Imersão",
    desc: "Transformação técnica completa com dedicação exclusiva",
    price: "18.000",
    period: "/ trimestre",
    features: [
      "Dedicação parcial exclusiva",
      "Arquitetura do zero",
      "Treinamento do time",
      "Implementação hands-on",
      "SLA de resposta 2h",
    ],
    featured: false,
  },
];

export const items = [
    "React", "Node.js", "TypeScript", "PostgreSQL", "Redis",
    "Kubernetes", "AWS", "GraphQL", "Next.js", "Rust",
    "React", "Node.js", "TypeScript", "PostgreSQL", "Redis",
    "Kubernetes", "AWS", "GraphQL", "Next.js", "Rust",
  ];
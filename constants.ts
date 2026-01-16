
import { Course, Project, Testimonial } from './types';

export const STATS = [
  { label: 'Anos de Atuação', value: '17+' },
  { label: 'Projetos Assinados', value: '450+' },
  { label: 'Alunos Impactados', value: '2.500+' },
  { label: 'Projetos Autorais', value: '120+' }
];

export const SCIENCE_PILARS = [
  {
    id: 1,
    title: 'Ciclo Circadiano',
    text: 'Como a luz regula seu sono, humor e produtividade.',
    tooltip: "O 'relógio biológico' interno que regula os processos fisiológicos em ciclos de 24 horas, influenciado diretamente pela luz."
  },
  {
    id: 2,
    title: 'IRC (Índice de Reprodução de Cor)',
    text: 'A ciência de revelar as cores reais do seu ambiente.',
    tooltip: "Mede a capacidade de uma fonte de luz de mostrar as cores dos objetos de forma fiel em comparação com a luz natural do sol."
  },
  {
    id: 3,
    title: 'Temperatura de Cor',
    text: 'O equilíbrio entre o foco do trabalho e o relaxamento do lar.',
    tooltip: "Refere-se à tonalidade da luz (quente ou fria) medida em Kelvin. Essencial para criar atmosferas de relaxamento ou atenção."
  },
  {
    id: 4,
    title: 'Luz Azul e Bem-estar',
    text: 'O impacto da tecnologia na nossa saúde moderna.',
    tooltip: "Parte do espectro de luz que suprime a melatonina. Seu controle é vital para a higiene do sono e saúde ocular."
  }
];

export const COURSES: Course[] = [
  {
    id: 'mestres-da-luz',
    title: 'Mestres da Luz (Combo Vitalício)',
    description: 'A sua última formação em iluminação. Tenha acesso a todo o ecossistema Iluminando (1.0 e 2.0), suporte VIP e acesso vitalício. Para quem decidiu ser autoridade máxima no mercado.',
    ctaText: 'Garantir minha Vaga',
    highlighted: true
  },
  {
    id: 'iluminando-express',
    title: 'Iluminando Express (Anual)',
    description: 'Para quem precisa de agilidade e foco no essencial. O Express entrega a base sólida que você precisa para começar a projetar com segurança.',
    ctaText: 'Começar Agora'
  },
  {
    id: 'especialista-dialux',
    title: 'Especialista em Dialux (Vitalício)',
    description: 'Domine o software que separa os amadores dos profissionais. Aprenda a calcular, simular e apresentar projetos com precisão técnica inquestionável.',
    ctaText: 'Dominar o Software'
  },
  {
    id: 'laboratorio-prisma',
    title: 'Laboratório PRISMA (Anual)',
    description: 'Entre nos meus bastidores. Acompanhe a vida real de um escritório de iluminação, a resolução de problemas em projetos reais e o dia a dia da profissão.',
    ctaText: 'Entrar no Laboratório'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Residência High-End',
    category: 'Residencial',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1470&auto=format&fit=crop',
    description: 'Integração de luz quente e sombras dramáticas para criar uma atmosfera de boutique residencial.'
  },
  {
    id: '2',
    title: 'Corporativo Premium',
    category: 'Comercial',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop',
    description: 'Projeto focado em produtividade e ciclo circadiano para ambientes de alta performance.'
  },
  {
    id: '3',
    title: 'Fachada Institucional',
    category: 'Público',
    imageUrl: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=1470&auto=format&fit=crop',
    description: 'Revitalização através da iluminação urbana com foco em segurança e estética noturna.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carolina Mendes',
    role: 'Arquiteta de Luxo',
    content: 'A Lu me ensinou que iluminação não é apenas colocar lâmpada, é criar emoção e autoridade técnica. Meus projetos de alto padrão mudaram de patamar depois da consultoria.'
  },
  {
    id: 't2',
    name: 'Henrique Vaz',
    role: 'Designer de Interiores',
    content: 'O curso de Dialux mudou completamente minha segurança na hora de apresentar projetos para grandes marcas. Hoje não tenho medo de defender minhas escolhas técnicas.'
  },
  {
    id: 't3',
    name: 'Sofia Albuquerque',
    role: 'Aluna Mestres da Luz',
    content: 'Ter acesso ao ecossistema vitalício foi o melhor investimento da minha carreira. O suporte VIP da Lu é um diferencial que não encontrei em nenhum outro lugar.'
  }
];

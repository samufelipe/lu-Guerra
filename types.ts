
export interface Course {
  id: string;
  title: string;
  description: string;
  price?: string;
  ctaText: string;
  highlighted?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residencial' | 'Comercial' | 'Público';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

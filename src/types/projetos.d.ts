export interface Projeto {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  images: string[];
}

export type Projetos = Projeto[];

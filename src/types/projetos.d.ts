export interface Projeto {
  id: number;
  title: string;
  date: string;
  client: string;
  status: string;
  description: string;
  detailedDescription: string;
  slug: string;
  images: string[];
}

export type Projetos = Projeto[];

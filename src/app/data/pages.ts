import {
  faChartBar,
  faBoxOpen,
  faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';

export interface PageLink {
  link: string;
  content: string;
  icon: any;
}

export const pages: PageLink[] = [
  {
    link: 'dashboard',
    content: 'Dashboard',
    icon: faChartBar,
  },
  {
    link: 'produtos',
    content: 'Products',
    icon: faBoxOpen,
  },
  {
    link: 'fornecedores',
    content: 'Providers',
    icon: faPeopleCarry,
  },
  {
    link: 'vendas',
    content: 'Sales',
    icon: faPeopleCarry,
  },
];

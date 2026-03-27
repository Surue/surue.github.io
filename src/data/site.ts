export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export type SocialLink = {
  href: string;
  label: string;
};

export const site = {
  title: 'Nicolas Schneider',
  role: 'Associate Lead Programmer',
  company: 'Old Skull Games',
  description:
    'Portfolio, technical articles, and game development notes focused on Unity, tools, AI, procedural generation, and production practices.',
  tagline:
    'A static site in migration from Jekyll to Astro, designed to become easier to navigate, easier to maintain, and easier to publish.',
};

export const navigation: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    description: 'Overview, featured topics, and migration progress.',
  },
  {
    href: '/projects/',
    label: 'Projects',
    description: 'Game, tools, and engine projects grouped for easier scanning.',
  },
  {
    href: '/blog/',
    label: 'Blog',
    description: 'Articles, tutorials, and technical write-ups.',
  },
  {
    href: '/about/',
    label: 'About',
    description: 'Career summary, teaching, and focus areas.',
  },
];

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/surue',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/nicolas-schneider-14135a170',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:nicolas06062000@gmail.com',
    label: 'Email',
  },
];

export const featuredTopics = [
  'Unity tooling',
  'Procedural generation',
  'Game AI',
  'Engine programming',
  'Production workflows',
  'Technical teaching',
];

export const migrationSteps = [
  'Root Astro project and tooling scaffold',
  'Core layout, navigation, and style system',
  'Content collections for posts, projects, and language pages',
  'Jekyll content migration and link cleanup',
  'GitHub Pages deployment through GitHub Actions',
];
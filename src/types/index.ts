// ========== 导航相关 ==========
export interface NavItem {
  label: string;
  href: string;
}

// ========== 项目相关 ==========
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
}

// ========== 博客相关 ==========
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  slug: string;
  coverUrl?: string;
}

// ========== 技能相关 ==========
export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

// ========== 联系表单 ==========
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// src/data/servicesData.ts

export interface Service {
  id: number;
  icon: string;
  title: string;
  shortDescription: string;
  categories: string[];
  price: string;
  whatsappLink: string;
  galleryImages: string[];
}

export const servicesData: Service[] = [
  {
    id: 1,
    icon: '🌐',
    title: 'Custom Websites',
    shortDescription: 'Modern, responsive websites built for optimal performance and user experience.',
    categories: ['Front-End', 'UI/UX Design', 'SEO Optimization', 'CMS Integration'],
    price: 'Starting at $1,500',
    whatsappLink: 'https://wa.me/your-number?text=I%27m%20interested%20in%20a%20Custom%20Website',
    // --- MODIFIED: Changed image dimensions to 1600x900 for a widescreen look ---
    galleryImages: [
      'https://placehold.co/1600x900/1a1a1a/00ff88?text=Homepage+Design',
      'https://placehold.co/1600x900/1a1a1a/ffffff?text=Admin+Dashboard',
      'https://placehold.co/1600x900/1a1a1a/00d4ff?text=Mobile+Responsive+View'
    ]
  },
  {
    id: 2,
    icon: '🛒',
    title: 'E-commerce Solutions',
    shortDescription: 'Complete e-commerce solutions with secure payment integration and management.',
    categories: ['Shopify', 'WooCommerce', 'Custom Platforms', 'Payment Gateways'],
    price: 'Starting at $3,000',
    whatsappLink: 'https://wa.me/your-number?text=I%27m%20interested%20in%20an%20E-commerce%20Solution',
    galleryImages: [
      'https://placehold.co/1600x900/1a1a1a/ffffff?text=Product+Listing+Page',
      'https://placehold.co/1600x900/1a1a1a/00ff88?text=Secure+Checkout',
      'https://placehold.co/1600x900/1a1a1a/00d4ff?text=Order+Management'
    ]
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Backend & APIs',
    shortDescription: 'Robust backend systems and APIs for data processing and automation.',
    categories: ['REST APIs', 'Database Design', 'Cloud Deployment', 'Process Automation'],
    price: 'Project-based Quote',
    whatsappLink: 'https://wa.me/your-number?text=I%27m%20interested%20in%20Backend%20Development',
    galleryImages: [
      'https://placehold.co/1600x900/1a1a1a/00d4ff?text=API+Endpoint+Structure',
      'https://placehold.co/1600x900/1a1a1a/ffffff?text=Database+Schema',
      'https://placehold.co/1600x900/1a1a1a/8b5cf6?text=Server+Architecture'
    ]
  }
];
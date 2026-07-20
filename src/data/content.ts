export const siteConfig = {
  name: 'GPU WorX',
  tagline: 'Professional GPU Repairs',
  description: 'GPU repairs you can trust. We diagnose and repair graphics cards with genuine parts, professional work, and a 12-month warranty.',
  phone: '+27 (0)67 485 9875',
  email: 'admin@gpuworx.co.za',
  hours: 'By appointment only',
  address: 'South Africa',
}

export const stats = [
  { value: '48-72hr', label: 'Average Turnaround' },
  { value: '12 months', label: 'Warranty on All Repairs' },
  { value: '100%', label: 'Genuine Parts' },
]

export const services = [
  {
    slug: 'gpu-repair',
    title: 'GPU Repairs',
    shortDesc: 'Full diagnostic and repair for all graphics card issues.',
    description: 'We diagnose and repair graphics card faults — power issues, memory failures, core problems. Our BGA rework station handles component-level repairs that most shops cannot.',
    process: ['Initial diagnostic and assessment', 'Component-level fault identification', 'Professional repair using BGA rework', 'Full stress testing and quality check'],
    symptoms: ['System crashes under load', 'Visual artifacts on screen', 'GPU not detected by system', 'Overheating and thermal throttling'],
    priceRange: 'R800 – R3,500',
  },
  {
    slug: 'gpu-service-maintenance',
    title: 'Service & Maintenance',
    shortDesc: 'Cleaning, thermal paste replacement, and preventive care.',
    description: 'Regular maintenance keeps your GPU running at optimal temperatures. We provide thorough cleaning, fresh thermal paste application, fan service, and a full health check.',
    process: ['Complete disassembly', 'Professional cleaning and dust removal', 'Thermal paste and pad replacement', 'Reassembly and thermal testing'],
    symptoms: ['Rising temperatures over time', 'Fan noise increasing', 'Performance degradation', 'Dust buildup visible'],
    priceRange: 'R500 – R1,200',
  },
  {
    slug: 'vram-replacement',
    title: 'VRAM Replacements',
    shortDesc: 'Professional memory chip replacement and testing.',
    description: 'Faulty VRAM causes artifacts, crashes, and system instability. Our BGA rework station enables precise memory chip replacement with full post-repair testing.',
    process: ['Memory diagnostic and fault isolation', 'BGA rework for chip removal', 'New memory chip installation', 'Post-repair stability testing'],
    symptoms: ['Visual artifacts and glitching', 'Texture corruption in games', 'System instability', 'Memory-related error codes'],
    priceRange: 'R1,200 – R3,000',
  },
  {
    slug: 'core-replacement',
    title: 'Core Replacements',
    shortDesc: 'GPU die replacement and advanced rework services.',
    description: 'When the GPU core itself fails, our BGA rework capabilities allow us to perform die-level repairs. We source genuine replacement cores for your specific card model.',
    process: ['Core failure diagnosis', 'Genuine replacement core sourcing', 'Precision BGA rework installation', 'Full benchmark and stress testing'],
    symptoms: ['Complete GPU failure', 'No display output', 'System POST failures', 'Core-related error codes'],
    priceRange: 'R2,000 – R5,000',
  },
  {
    slug: 'cooling-solutions',
    title: 'Cooling Solutions',
    shortDesc: 'Aftermarket cooling upgrades and custom solutions.',
    description: 'We work with leading cooling brands to provide thermal solutions for your GPU. From repadding to aftermarket cooler installations, we help manage temperatures.',
    process: ['Thermal performance assessment', 'Cooler and pad selection', 'Professional installation', 'Temperature benchmark testing'],
    symptoms: ['Thermal throttling under load', 'Excessive fan noise', 'Heat damage to components', 'Overclocking stability issues'],
    priceRange: 'R600 – R2,500',
  },
  {
    slug: 'diagnostics',
    title: 'Diagnostics',
    shortDesc: 'Comprehensive GPU health assessment and reporting.',
    description: 'Not sure what is wrong with your GPU? Our diagnostic service provides a detailed report on your card\'s condition, identifying current issues and potential future problems.',
    process: ['Visual inspection and documentation', 'Electronic component testing', 'Thermal and performance benchmarking', 'Detailed written report with findings'],
    symptoms: ['Unsure what is wrong', 'Intermittent issues', 'Pre-purchase assessment', 'Second opinion needed'],
    priceRange: 'R350 – R500',
  },
]

export const problems = [
  {
    title: 'Visual Artifacts',
    description: 'Odd shapes, strange colours, or frozen areas on your screen. Artifacts usually point to memory or core problems that need professional attention.',
    image: '/images/problems/artifacts.jpg',
  },
  {
    title: 'Crashes & BSOD',
    description: 'Your computer crashes or shows a blue screen during graphics-intensive tasks. This can be caused by power delivery, thermal, or component failures.',
    image: '/images/problems/crash.jpg',
  },
  {
    title: 'Overheating',
    description: 'Your GPU runs hot, fans run loud, or performance drops during use. Over time, heat damages components and reduces your card\'s lifespan.',
    image: '/images/problems/overheat.jpg',
  },
]

export const howItWorks = [
  { step: 1, title: 'Contact Us', description: 'Get in touch with your GPU details and describe the problem you are experiencing.' },
  { step: 2, title: 'Free Diagnosis', description: 'We assess your GPU and provide a detailed report with a repair quote — no obligation.' },
  { step: 3, title: 'Professional Repair', description: 'Our technicians repair your card using genuine parts and professional-grade equipment.' },
  { step: 4, title: 'Tested & Returned', description: 'Your GPU is fully tested, quality-checked, and returned with a 12-month warranty.' },
]

export const testimonials = [
  {
    quote: 'My RTX 3080 was showing artifacts and two other shops told me it was beyond repair. GPU WorX fixed it in 48 hours. Professional service from start to finish.',
    author: 'Ryan M.',
    role: 'Content Creator',
    turnaround: '48 hours',
    fix: 'VRAM replacement',
  },
  {
    quote: 'Sent my RX 6800 XT in for a full service. They replaced the thermal paste, cleaned everything, and it is running 15 degrees cooler now. Fair price, quick turnaround.',
    author: 'Sarah K.',
    role: 'Video Editor',
    turnaround: '3 days',
    fix: 'Full service and maintenance',
  },
  {
    quote: 'My GPU was completely dead — no display output at all. GPU WorX diagnosed a core issue and had it repaired within a week. 12-month warranty gives me peace of mind.',
    author: 'James L.',
    role: 'IT Professional',
    turnaround: '5 days',
    fix: 'Core replacement',
  },
]

export const faq = [
  {
    question: 'How much does a GPU repair cost?',
    answer: 'It depends on the issue. Diagnostics start at R350. Common repairs range from R800 to R3,500. We provide a detailed quote after diagnosis — no obligation to proceed.',
  },
  {
    question: 'How long does a repair take?',
    answer: 'Most repairs are completed within 48-72 hours. More complex jobs like core replacements may take up to a week. We will give you a timeline when you book.',
  },
  {
    question: 'Do you use genuine parts?',
    answer: 'Yes. We only use genuine, brand-new components. We never use recycled or counterfeit parts. This is part of our quality guarantee.',
  },
  {
    question: 'What warranty do you offer?',
    answer: 'All repairs come with a 12-month warranty covering the work performed and parts used. If the same issue recurs within the warranty period, we fix it at no extra charge.',
  },
  {
    question: 'How do I send my GPU?',
    answer: 'Contact us to arrange collection or drop-off. If shipping, pack the card in an anti-static bag, use adequate padding, and ship via a tracked service. We will confirm receipt.',
  },
  {
    question: 'What GPU brands do you service?',
    answer: 'We service all major brands — NVIDIA GeForce, NVIDIA Quadro, AMD Radeon, and workstation cards. If it is a graphics card, we can work on it.',
  },
  {
    question: 'Do I need to diagnose the problem first?',
    answer: 'No. If you are unsure what is wrong, bring it in. Our diagnostic service will identify the issue and provide a repair recommendation with a cost estimate.',
  },
  {
    question: 'Can you fix GPUs that other shops have rejected?',
    answer: 'Yes. We regularly take on repairs that other shops have deemed uneconomical or impossible. Our BGA rework equipment handles component-level repairs that most shops cannot perform.',
  },
]

export const partnerBrands = [
  { name: 'Teutonick', url: 'https://teutonick.co.za/' },
  { name: 'Arctic', url: 'https://www.arctic.ac/' },
  { name: 'Thermal Grizzly', url: 'https://www.thermal-grizzly.com/' },
]

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const teamMembers = [
  {
    name: 'Technician 1',
    role: 'Lead Technician',
    experience: '10+ years in GPU repair',
    image: '/images/team/tech-1.jpg',
  },
  {
    name: 'Technician 2',
    role: 'BGA Specialist',
    experience: '8+ years in component-level repair',
    image: '/images/team/tech-2.jpg',
  },
  {
    name: 'Technician 3',
    role: 'Diagnostics Expert',
    experience: '6+ years in hardware diagnostics',
    image: '/images/team/tech-3.jpg',
  },
]

export const shippingInfo = {
  title: 'How to Send Your GPU',
  steps: [
    'Remove the GPU from your system carefully',
    'Place it in an anti-static bag (we can provide one if needed)',
    'Wrap in bubble wrap or foam padding — at least 5cm on all sides',
    'Place in a sturdy box with no empty space',
    'Ship via a tracked courier service to our address',
  ],
  note: 'We are not responsible for damage caused by improper packaging. If you are unsure, contact us for guidance before shipping.',
}

export const warrantyInfo = {
  title: 'Our Warranty',
  duration: '12 months',
  coverage: [
    'All repair work performed',
    'Replacement parts installed',
    'Labour costs',
  ],
  process: [
    'Contact us with your repair reference number',
    'Describe the issue you are experiencing',
    'We will arrange a return or collection',
    'Issue resolved at no extra charge',
  ],
}

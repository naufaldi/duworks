export type ServiceListProps = {
  title: string
  description: string
  list: string[]
}

export const ServiceList: ServiceListProps[] = [
  {
    title: 'User Experience',
    description:
      'Our UX services help you create digital experiences that are intuitive, engaging, and enjoyable for your users.',
    list: [
      'Website Design',
      'Mobile Apps Design',
      'Product Research',
      'A/B Testing',
      'User Testing',
      'UX Audit',
      'Design System',
    ],
  },
  {
    title: 'Visual Design',
    description:
      'Our Visual Design services include creating visually appealing and leaving a lasting impression on your target audience.',
    list: [
      'Visual Identity',
      'Illustration',
      'Brand Strategy',
      'Social Media Design',
      'Mockup Design',
      'Motion Graphic',
      'Video Editing',
    ],
  },
  {
    title: 'Developement',
    description:
      'Our Development services encompass a wide range of technical solutions that are tailored to your business needs.',
    list: [
      'Slicing/ HTML, CSS',
      'API Integration',
      'Frontend Development',
      'Backend Development',
      'Mobile Development',
      'Quality Assurance',
      'Web & App maintenance',
    ],
  },
]

import { BotMessageSquare } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { ShieldHalf } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { GlobeLock } from 'lucide-react';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  // { label: 'Workflow', to: '/workflow' },
  // { label: 'Pricing', to: 'pricing' },
  // { label: 'Testimonials', to: 'testimonials' },
];

export const authLink = [
  { label: 'Sign In', to: '/signin' },
  { label: 'Sign Up', to: '/signup' },
];

export const testimonials = [
  {
    user: 'John Doe',
    company: 'Stellar Solutions',
    image: user1,
    text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon Technologies',
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!',
  },
  {
    user: 'Michael Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.',
  },
  {
    user: 'Emily Davis',
    company: 'Synergy Systems',
    image: user6,
    text: 'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.',
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: '편리한 사용자 인터페이스',
    description:
      'Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.',
  },
  {
    icon: <Fingerprint />,
    text: '멀티 플랫폼 확장성',
    description:
      'Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.',
  },
  {
    icon: <ShieldHalf />,
    text: '깔맞춤 탬플릿',
    description:
      'Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.',
  },
  {
    icon: <BatteryCharging />,
    text: '실시간 리뷰',
    description:
      'Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.',
  },
  {
    icon: <PlugZap />,
    text: '견고한 협업 툴',
    description:
      'Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.',
  },
  {
    icon: <GlobeLock />,
    text: '분석을 위한 대시보드',
    description:
      'Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.',
  },
];

export const checklistItems = [
  {
    title: '쉬운 코드 병합작업',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'Review code without worry',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'AI Assistance to reduce time',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'Share work in minutes',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
];

export const pricingOptions = [
  {
    title: 'Free',
    price: '$0',
    features: [
      'Private board sharing',
      '5 Gb Storage',
      'Web Analytics',
      'Private Mode',
    ],
    link: 'free',
  },
  {
    title: 'Pro',
    price: '$10',
    features: [
      'Private board sharing',
      '10 Gb Storage',
      'Web Analytics (Advance)',
      'Private Mode',
    ],
    link: 'Pro',
  },
  {
    title: 'Enterprise',
    price: '$200',
    features: [
      'Private board sharing',
      'Unlimited Storage',
      'High Performance Network',
      'Private Mode',
    ],
    link: 'enterprise',
  },
];

export const resourcesLinks = [
  { to: '/Getting-Started', text: 'Getting Started' },
  { to: '/Documentation', text: 'Documentation' },
  { to: '/Tutorials', text: 'Tutorials' },
  { to: '/API-Reference', text: 'API Reference' },
  { to: '/Community-Forums', text: 'Community Forums' },
];

export const platformLinks = [
  { to: 'Features', text: 'Features' },
  { to: 'Supported-Devices', text: 'Supported Devices' },
  { to: 'System-Requirements', text: 'System Requirements' },
  { to: 'Downloads', text: 'Downloads' },
  { to: 'Release-Notes', text: 'Release Notes' },
];

export const communityLinks = [
  { to: 'Events', text: 'Events' },
  { to: 'Meetups', text: 'Meetups' },
  { to: 'Conferences', text: 'Conferences' },
  { to: 'Hackathons', text: 'Hackathons' },
  { to: 'Jobs', text: 'Jobs' },
];

export const heroLinks = [
  { to: 'start-for-free', text: 'start for free' },
  { to: 'documentation', text: 'documentation' },
];

//feature Section 임의의 추가 작업

export const featuresLinks = [
  {
    main: 'High speed Internet',
    text: '모든 국민은 종교의 자유를 가진다. 국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다. 일반사면을 명하려면 국회의 동의를 얻어야 한다.',
  },
  {
    main: 'Fully equipped kitchen',
    text: '공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 대한민국의 국민이 되는 요건은 법률로 정한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.',
  },
  {
    main: 'Huge parking space',
    text: '대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다.',
  },
  {
    main: 'documentation',
    text: '교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 감사위원은 원장의 제청으로 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
  },
  {
    main: 'documentation',
    text: '대한민국은 민주공화국이다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.',
  },
  {
    main: 'documentation',
    text: '대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다. 헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다.',
  },
];

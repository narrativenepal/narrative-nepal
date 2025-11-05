import { FileText, Briefcase, Building2, Users } from "lucide-react";

export const collaborators = [
  {
    name: "Kali Gandaki GaunPalika",
    logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761823678/kaligandaki_logo-modified-removebg-preview_xqqh9c.png",
    colorLogo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587783/kaligandaki_logo_kfbjft.webp",
  },
  {
    name: "IGB Business Holding",
    logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761823677/igc_business__holding-modified-removebg-preview_xbuwrl.png",
    colorLogo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587578/igc_business_holding_iufllh.png",
  },
  {
    name: "Everest Hand Car Wash",
    logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761823671/everest_hand_car_wash-modified-removebg-preview_aifhwk.png",
    colorLogo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587593/everest_hand_car_wash_uqk8ic.png",
  },
  {
    name: "Advik Creative Studio",
    logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761823671/Advik_main_logo__1_-modified-removebg-preview_lb9jgn.png",
    colorLogo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587592/Advik_main_logo_1_ltrb4j.png",
  },
  {
    name: "FAO Nepal",
    logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761823670/fao_nepal-modified-removebg-preview_aplbzy.png",
    colorLogo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587591/fao_nepal_yynu6w.png",
  },
  {
    name: "IDE Nepal",
    logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761823670/ide_nepal-modified-removebg-preview_hxkfka.png",
    colorLogo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587791/ide_nepal_jll3bx.png",
  },
  {
    name: "Election Commission Nepal",
    logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1762155882/grayscale_election_commision_cftng8.png",
    colorLogo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1762155875/election_commission-removebg-preview_ntc5y4.png",
  },
  {
    name: "Kings College",
    logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1762155982/download_om6fip.png",
    colorLogo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1762155988/Kings-college-thumbnail-200x200_ictpum.png",
  },
];

export const documentaries = [
  {
    id: 1,
    title: "Kaligandaki Gaunpalika",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670565/kaligandaki_thumanil_2_e28bc7.png",
    duration: "5 min",
    category: "WILDLIFE"
  },
  {
    id: 2,
    title: "Anti Human Traffiking",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670565/anti_human_traffiking_-_thumnail_ip7tfy.png",
    duration: "52 min",
    category: "AWARENESS"
  },
  {
    id: 3,
    title: "Volcanic Wonders",
    image: "https://images.pexels.com/photos/14458166/pexels-photo-14458166.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "48 min",
    category: "SCIENCE"
  },
  {
    id: 4,
    title: "Sahara: Life in Extremes",
    image: "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "50 min",
    category: "EXPLORATION"
  },
  {
    id: 5,
    title: "Mountain Kingdoms",
    image: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "55 min",
    category: "CULTURE"
  },
  {
    id: 6,
    title: "Coral Reefs in Crisis",
    image: "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "42 min",
    category: "ENVIRONMENT"
  }
];


export const navLinks = [
  { label: "HOME", href: "#" },
  // { label: "ABOUT US", href: "#about-us" },
  { label: "SERVICES", href: "#services" },
  { label: "DOCUMENTARIES", href: "#documentaries" },
  { label: "ARCHIVE", href: "#archive" },
  { label: "CONTACT US", href: "#contact" },
];


export const stories = [
  {
    id: 1,
    title: "PSA – Safe Migration and Anti-Human Trafficking",
    category: "Women Skill Creation Center Nepal (WoSCC) ",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670565/kaligandaki_thumanil_2_e28bc7.png",
    description: "A public awareness video on safe migration and anti-human trafficking in Makwanpur."
  },
  {
    id: 2,
    title: "Election Commission Nepal – PSA Campaign",
    category: "Election Commission Nepal",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670566/Untitled_design_9_kkljut.png",
    description: "Two public service videos featuring Dayahang Rai and Nepali youths promoting fair, inclusive elections."
  },
  {
    id: 3,
    title: "Ancient Civilizations",
    category: "HISTORY",
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Uncovering secrets of lost worlds"
  }
];


export const entities = [
  {
    icon: Users,
    label: "individuals",
    description: "Personal journeys of change"
  },
  {
    icon: Building2,
    label: "organizations",
    description: "Impactful projects and achievements"
  },
  {
    icon: Briefcase,
    label: "agencies",
    description: "Purposeful public initiatives"
  },
  {
    icon: FileText,
    label: "companies",
    description: "Innovation and social impact"
  },
];
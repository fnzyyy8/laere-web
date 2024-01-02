import Image from 'next/image'
import LanguageIcon from '@mui/icons-material/Language';
import HeroSection from './homeSection/heroSection';
import AboutSection from './homeSection/aboutSection';
import FeaturesAndPortoSection from './homeSection/featuresAndPorto';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesAndPortoSection />
    </main>
  )
}

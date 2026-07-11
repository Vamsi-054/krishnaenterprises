import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Services } from '@/app/components/Services';
import { OngoingProjects } from '@/app/components/OngoingProjects';
import { ProjectGallery } from '@/app/components/ProjectGallery';
import { PipelineStatistics } from '@/app/components/PipelineStatistics';
import { OurClients } from '@/app/components/OurClients';
import { BrandScroll } from '@/app/components/BrandScroll';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

// Krishna Enterprises Website - Main App Component
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <OngoingProjects />
      <ProjectGallery />
      <PipelineStatistics />
      <OurClients />
      <Contact />
      <BrandScroll />
      <Footer />
    </div>
  );
}

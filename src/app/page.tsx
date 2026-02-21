import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { LandingPage } from '@/components/landing/landing-page';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { PublicationsSection } from "../components/PublicationsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import {ContactSection} from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/* Theme Toggle */}
    <ThemeToggle />
    
    {/* Background Effects */}
    <StarBackground />
    
    {/* Navbar */}
    <Navbar />
    
    {/* Main Content */}
    <main>
        <HomeSection />
        <ExperienceSection />
        <PublicationsSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </main>

    {/* Footer */}
    <Footer />

    </div>;
};
import {Mail} from "lucide-react";
import { FaLinkedin } from 'react-icons/fa';

export const ContactSection = () => {

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <h4 className="font-medium mb-4"> Connect With Me</h4>
        <div className="flex space-x-4 justify-center">
          <a
            href="https://www.linkedin.com/in/mahmud-ashiq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:opacity-80 transition-opacity"
          >
            <FaLinkedin className="w-10 h-10" />
          </a>
          <a
            href="mailto:m.ashiqfida@gmail.com"
            className="text-[#D14836] hover:opacity-80 transition-opacity"
          >
            <Mail className="w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

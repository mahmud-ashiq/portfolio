import {
  Building,
  Calendar,
  MapPin,
} from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-6 sm:space-y-8 text-left">
          
          <div className="gradient-border p-4 sm:p-6 card-hover">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-full bg-primary/10">
                <Building className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0 ">
                <h4 className="font-semibold text-lg sm:text-xl mb-1">
                  IT Infra Operations & Security Apprentice
                </h4>
                <p className="text-primary font-semibold mb-2">
                  GIGA Tech Ltd.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    Jul 2025 - Present
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    Dhaka, Bangladesh
                  </span>
                </div>
                <ul className="text-muted-foreground leading-relaxed space-y-1 text-sm sm:text-base test-justify">
                  <li>• Assisting in IT infrastructure management and security operations.</li>
                  <li>• Supporting network administration and system maintenance tasks.</li>
                  <li>• Collaborating with senior engineers on IT projects and initiatives.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gradient-border p-4 sm:p-6 card-hover">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-full bg-primary/10 ">
                <Building className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-lg sm:text-xl mb-1">
                  Researcher
                </h4>
                <p className="text-primary font-semibold mb-2">
                  Advanced Machine Intelligence Research (AMIR) Lab
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    Mar 2025 - Present
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    Remote
                  </span>
                </div>
                <div className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {/* Add research description here */}
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-border p-4 sm:p-6 card-hover">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-full bg-primary/10 ">
                <Building className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-lg sm:text-xl mb-1">
                  Researcher
                </h4>
                <p className="text-primary font-semibold mb-2">
                  SafeNet AI
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    Jan 2025 - Present
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    Remote
                  </span>
                </div>
                <div className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {/* Add research description here */}
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-border p-4 sm:p-6 card-hover">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-full bg-primary/10 ">
                <Building className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-lg sm:text-xl mb-1">
                  IT Intern
                </h4>
                <p className="text-primary font-semibold mb-2">
                  Daraz
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    Oct 2024 - Jan 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    Dhaka, Bangladesh
                  </span>
                </div>
                <ul className="text-muted-foreground leading-relaxed space-y-1 text-sm sm:text-base text-justify">
                  <li>• Provided technical help to employees (remote and on-site), debugging hardware and software issues.</li>
                  <li>• Supported IT asset management, including maintenance of computers, printers, barcode scanners.</li>
                  <li>• Managed IT tickets and resolved support requests, maintaining service-level agreements (SLAs).</li>
                  <li>• Monitored and managed network infrastructure including Wi-Fi, ISP links, LANs.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
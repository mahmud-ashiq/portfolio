import {
  Building,
  Calendar,
  MapPin,
} from "lucide-react";

export const ExperienceSection = () => {
  return (
      <section id="experience" className="py-20 px-1 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional <span className="text-primary"> Experience</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            
            <div className="grid grid-cols-1 gap-6">
              
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">IT Infra Operations & Security Apprentice</h4>
                    <p className="text-primary font-semibold">
                      GIGA Tech Ltd.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-8 w-4" />
                          Jul 2025 - Present
                    </span>
                    <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Dhaka, Bangladesh
                        </span>
                        </div>
                    <p className="text-muted-foreground leading-relaxed text-left ">
                            <li> Assisting in IT infrastructure management and security operations.</li>
                            <li> Supporting network administration and system maintenance tasks.</li>
                            <li> Collaborating with senior engineers on IT projects and initiatives.</li>
                          </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Researcher</h4>
                    <p className="text-primary font-semibold">
                      Advanced Machine Intelligence Research (AMIR) Lab
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-8 w-4" />
                          Mar 2025 - Present
                    </span>
                    <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Remote
                        </span>
                        </div>
                    <p className="text-muted-foreground leading-relaxed text-justify ">
                            
                          </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Researcher</h4>
                    <p className="text-primary font-semibold">
                      SafeNet AI
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-8 w-4" />
                          Jan 2025 - Present
                    </span>
                    <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Remote
                        </span>
                        </div>
                    <p className="text-muted-foreground leading-relaxed text-justify ">
                            
                          </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">IT Intern</h4>
                    <p className="text-primary font-semibold">
                      Daraz
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-8 w-4" />
                          Oct 2024 - Jan 2025
                    </span>
                    <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Dhaka, Bangladesh
                        </span>
                        </div>
                    <p className="text-muted-foreground leading-relaxed text-justify ">
                      <li>Provided technical help to employees (remote and on-site), debugging hardware and software issues.</li>
                      <li>Supported IT asset management, including maintenance of computers, printers, barcode scanners.</li>
                      <li>Managed IT tickets and resolved support requests, maintaining service-level agreements (SLAs).</li>
                      <li>Monitored and managed network infrastructure (Wi-Fi, ISP links, LAN).</li>
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
  );
};

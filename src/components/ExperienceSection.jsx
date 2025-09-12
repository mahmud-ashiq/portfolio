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
                  <li>• Configure and manage HPE ProLiant DL380 servers with iLO integration for monitoring and administration.</li>
                  <li>• Deploy and maintain VMware ESXi with Windows Server 2025 & Linux VMs.</li>
                  <li>• Configure Linux NTP servers for time synchronization.</li>
                  <li>• Administer DNS & DHCP on Windows Server 2025.</li>
                  <li>• Perform SAN switch zoning to enhance storage performance, availability, and security.</li>
                  <li>• Automate VM failover and recovery by integrating Commvault APIs with custom Python monitoring scripts.</li>
                  <li>• Assist in creating and maintaining system documentation to support operations.</li>
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
                  <li>• Participated in IT projects, offering logistical and technical support to meet project goals and deadlines.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
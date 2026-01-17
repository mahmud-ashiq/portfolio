const skills = [
  // Language



  // Servers & Virtualization
  { name: "HPE", level: 80, category: "servers & virtualization" },
  { name: "Dell", level: 75, category: "servers & virtualization" },
  { name: "Lenovo", level: 70, category: "servers & virtualization" },
  { name: "Supermicro", level: 70, category: "servers & virtualization" },
  { name: "VMware vSphere (vCenter,  ESXi)", level: 85, category: "servers & virtualization" },

    // Networking & Security
  { name: "DNS", level: 80, category: "networking & security" },
  { name: "DHCP", level: 75, category: "networking & security" },
  { name: "NTP", level: 70, category: "networking & security" },
  { name: "SAN Zoning", level: 65, category: "networking & security" },
  { name: "ISP Link Monitoring", level: 85, category: "networking & security" },

  // Backup & Recovery
  { name: "HPE Alletra", level: 85, category: "storage & backup" },
  { name: "HPE GreenLake", level: 80, category: "storage & backup" },
  { name: "Commvault", level: 90, category: "storage & backup" },

  // System Administration
  { name: "Active Directory", level: 90, category: "system administration" },
  { name: "DNS", level: 80, category: "system administration" },
  { name: "DHCP", level: 85, category: "system administration" },
  { name: "Windows Server", level: 90, category: "system administration" },
  { name: "Linux (RHEL/CentOS, Ubuntu)", level: 80, category: "system administration" },

  // Languages & Database
  { name: "Python", level: 95, category: "languages & database" },
  { name: "PHP", level: 90, category: "languages & database" },
  { name: "MySQL", level: 70, category: "languages & database" },
  { name: "MongoDB", level: 75, category: "languages & database" },

  // Tools & Technologies
  { name: "Git", level: 90, category: "tools & technologies" },
  { name: "Winbox", level: 85, category: "tools & technologies" },
  { name: "ServiceNow", level: 95, category: "tools & technologies" },
  { name: "ManageEngine", level: 85, category: "tools & technologies" },
];



// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {});

// Manually assign category order
const leftColumnCategories = ["servers & virtualization", "system administration"];
const rightColumnCategories = ["storage & backup", "languages & database", "tools & technologies"];


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary"> Skills</span>
        </h2>

<div className="space-y-8">
          {/* Servers & Virtualization */}
          <div>
            <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
              servers & virtualization
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {groupedSkills["servers & virtualization"]?.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card px-6 py-3 rounded-lg shadow-sm text-center border 
                             transition-all duration-300 ease-in-out
                             hover:shadow-lg hover:shadow-primary/20
                             hover:scale-105 hover:bg-primary/5
                             hover:border-primary/30 hover:-translate-y-1
                             cursor-pointer group"
                >
                  <span className="text-sm font-medium 
                                 transition-colors duration-300
                                 group-hover:text-primary">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Storage & Backup */}
          <div>
            <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
              storage & backup
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {groupedSkills["storage & backup"]?.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card px-6 py-3 rounded-lg shadow-sm text-center border 
                             transition-all duration-300 ease-in-out
                             hover:shadow-lg hover:shadow-primary/20
                             hover:scale-105 hover:bg-primary/5
                             hover:border-primary/30 hover:-translate-y-1
                             cursor-pointer group"
                >
                  <span className="text-sm font-medium 
                                 transition-colors duration-300
                                 group-hover:text-primary">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* System Administration */}
          <div>
            <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
              system administration
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {groupedSkills["system administration"]?.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card px-6 py-3 rounded-lg shadow-sm text-center border 
                             transition-all duration-300 ease-in-out
                             hover:shadow-lg hover:shadow-primary/20
                             hover:scale-105 hover:bg-primary/5
                             hover:border-primary/30 hover:-translate-y-1
                             cursor-pointer group"
                >
                  <span className="text-sm font-medium 
                                 transition-colors duration-300
                                 group-hover:text-primary">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Database */}
          <div>
            <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
              languages & database
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {groupedSkills["languages & database"]?.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card px-6 py-3 rounded-lg shadow-sm text-center border 
                             transition-all duration-300 ease-in-out
                             hover:shadow-lg hover:shadow-primary/20
                             hover:scale-105 hover:bg-primary/5
                             hover:border-primary/30 hover:-translate-y-1
                             cursor-pointer group"
                >
                  <span className="text-sm font-medium 
                                 transition-colors duration-300
                                 group-hover:text-primary">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
              tools & technologies
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {groupedSkills["tools & technologies"]?.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card px-6 py-3 rounded-lg shadow-sm text-center border 
                             transition-all duration-300 ease-in-out
                             hover:shadow-lg hover:shadow-primary/20
                             hover:scale-105 hover:bg-primary/5
                             hover:border-primary/30 hover:-translate-y-1
                             cursor-pointer group"
                >
                  <span className="text-sm font-medium 
                                 transition-colors duration-300
                                 group-hover:text-primary">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
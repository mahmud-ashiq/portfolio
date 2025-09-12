const skills = [
  // Language
  { name: "Python", level: 95, category: "language" },
  { name: "PHP", level: 90, category: "language" },


  // Servers & Virtualization
  { name: "HPE ProLiant DL380", level: 80, category: "servers & virtualization" },
  { name: "VMware ESXi", level: 75, category: "servers & virtualization" },
  { name: "Windows Server 2025", level: 70, category: "servers & virtualization" },
  { name: "Linux (CentOS)", level: 70, category: "servers & virtualization" },

    // Networking & Security
  { name: "DNS", level: 80, category: "networking & security" },
  { name: "DHCP", level: 75, category: "networking & security" },
  { name: "NTP", level: 70, category: "networking & security" },
  { name: "SAN Zoning", level: 65, category: "networking & security" },
  { name: "ISP Link Monitoring", level: 85, category: "networking & security" },

  // Backup & Recovery
  { name: "Commvault APIs", level: 85, category: "backup & recovery" },
  { name: "VM Failover Automation", level: 80, category: "backup & recovery" },

  // Database Management
  { name: "MySQL", level: 70, category: "database management" },
  { name: "MongoDB", level: 75, category: "database management" },

  // Tools & Technologies
  { name: "Git", level: 90, category: "tools & technologies" },
  { name: "Linux", level: 70, category: "tools & technologies" },
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
const leftColumnCategories = ["language", "servers & virtualization", "networking & security"];
const rightColumnCategories = ["backup & recovery", "database management", "tools & technologies"];


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            {leftColumnCategories.map((category) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
                  {category}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {groupedSkills[category]?.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-card p-4 rounded-lg shadow-sm text-center border 
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
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {rightColumnCategories.map((category) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {groupedSkills[category]?.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-card p-4 rounded-lg shadow-sm text-center border 
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
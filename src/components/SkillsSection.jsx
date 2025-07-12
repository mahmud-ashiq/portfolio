const skills = [
  // Language
  { name: "Python", level: 95, category: "language" },
  { name: "PHP", level: 90, category: "language" },


  // sw development
  { name: "Laravel", level: 80, category: "software development" },
  { name: "REST API", level: 75, category: "software development" },
  { name: "PL/SQL", level: 70, category: "software development" },

    // db management
  { name: "MySQL", level: 80, category: "database management" },
  { name: "MongoDB", level: 75, category: "database management" },

  // Deep Learning Frameworks
  { name: "TensorFlow", level: 85, category: "deep learning frameworks" },
  { name: "PyTorch", level: 80, category: "deep learning frameworks" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Linux", level: 70, category: "tools" },
  { name: "Winbox", level: 85, category: "tools" },
  { name: "ServiceNow", level: 95, category: "tools" },
  { name: "ManageEngine", level: 85, category: "tools" },
  { name: "Cisco Packet Tracer", level: 95, category: "tools" },
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
const leftColumnCategories = ["language", "software development", "database management"];
const rightColumnCategories = ["deep learning frameworks", "tools"];


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
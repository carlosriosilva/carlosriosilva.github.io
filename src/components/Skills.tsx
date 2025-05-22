
const skillCategories = [
  {
    title: "Configuration Management & Cloud",
    skills: ["Ansible", "Layer5", "Kanvas", "AWS", "GCP", "Azure"],
  },
  {
    title: "Infrastructure & Containers",
    skills: ["Terraform", "Docker", "Kubernetes", "Helm", "CloudFormation", "Meshery"],
  },
  {
    title: "CI/CD & Version Control",
    skills: ["Jenkins", "GitLab CI", "CircleCI", "Git", "GitHub"],
  },
  {
    title: "Monitoring & Logging",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Splunk"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#D3E4FD] text-[#1A1F2C] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

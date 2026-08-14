
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
  {
    title: "AI-Assisted Operations",
    skills: ["LLMOps", "Prompt Engineering", "AI-Driven Drift Detection", "IaC Review Copilots"],
  },
  {
    title: "Languages",
    skills: ["Portuguese (native)", "English (fluent)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm transition-transform hover:scale-105"
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

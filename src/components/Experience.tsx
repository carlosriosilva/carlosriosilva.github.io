
const experiences = [
  {
    title: "Software Engineer",
    company: "Tech Solutions Brasil",
    location: "São Paulo, Brazil",
    period: "January 2022 – Present",
    achievements: [
      "Led the rollout of a robust infrastructure-as-code (IaC) strategy using Layer5 Kanvas, Terraform, and AWS, cutting manual intervention and deployment time by 40%.",
      "Designed and maintained scalable Kubernetes clusters to run microservices, achieving 99.9% uptime for production systems.",
      "Managed CI/CD pipelines using Jenkins and GitLab CI, optimizing build times and improving developer productivity.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "GlobalTech Solutions",
    location: "Remote (Brazil)",
    period: "August 2018 – December 2021",
    achievements: [
      "Spearheaded the migration from on-premises infrastructure to AWS, improving system performance by 30% and cutting operational costs by 25%.",
      "Managed multi-region, multi-account AWS infrastructure, including VPCs, EC2 instances, RDS databases, and S3 storage.",
      "Built automated deployment pipelines using Jenkins, enabling faster software delivery and reducing deployment errors.",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Undergraduate Computer Science Program",
    location: "Brazil",
    period: "During undergraduate studies",
    achievements: [
      "Led weekly lab sections and office hours, helping students debug code and work through core computer science concepts.",
      "Graded assignments and exams, giving feedback that helped students strengthen their understanding of the material.",
      "Mentored first-year students transitioning into programming, an early foothold for what became a DevOps and infrastructure career.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.period}
              className="relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
              <p className="text-foreground font-semibold">{exp.company}</p>
              <p className="text-muted-foreground mb-4">
                {exp.location} | {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

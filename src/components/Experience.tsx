
const experiences = [
  {
    title: "Ingeniero de Software",
    company: "Tech Solutions Brasil",
    location: "São Paulo, Brasil",
    period: "Enero 2022 – Actualidad",
    achievements: [
      "Lideré la implementación de una estrategia robusta de infraestructura como código (IaC) utilizando Layer5 Kanvas https://layer5.io/kanvas, Terraform y AWS, reduciendo la intervención manual y el tiempo de implementación en un 40%.",
      "Diseñé y mantuve clústeres de Kubernetes escalables para ejecutar microservicios, logrando un tiempo de actividad del 99.9% para sistemas de producción.",
      "Gestioné tuberías de CI/CD utilizando Jenkins y GitLab CI, optimizando los tiempos de compilación y mejorando la productividad de los desarrolladores.",
    ],
  },
  {
    title: "Ingeniero DevOps",
    company: "GlobalTech Solutions",
    location: "Remoto (Brasil)",
    period: "Agosto 2018 – Diciembre 2021",
    achievements: [
      "Abanderé la migración de infraestructura local a AWS, mejorando el rendimiento del sistema en un 30% y reduciendo los costos operativos en un 25%.",
      "Gestioné infraestructura de AWS con múltiples regiones y múltiples cuentas, incluyendo VPCs, instancias EC2, bases de datos RDS y almacenamiento S3.",
      "Desarrollé tuberías de implementación automatizadas utilizando Jenkins, permitiendo una entrega de software más rápida y reduciendo los errores de implementación.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.period}
              className="relative pl-8 border-l-2 border-[#0f172a]"
            >
              <div className="absolute w-4 h-4 bg-[#0f172a] rounded-full -left-[9px] top-0" />
              <h3 className="text-xl font-bold text-[#1A1F2C]">{exp.title}</h3>
              <p className="text-[#0f172a] font-semibold">{exp.company}</p>
              <p className="text-gray-600 mb-4">
                {exp.location} | {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
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

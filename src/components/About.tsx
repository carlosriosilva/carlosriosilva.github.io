
import { Mountain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Mountain className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-center text-foreground">
            About Me
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-muted-foreground space-y-6">
          <p>
            Passionate about technology, automation, and building scalable,
            efficient systems, I am a Software Engineer with extensive experience in
            configuration management and infrastructure operations.
          </p>
          <p>
            With a strong background in DevOps practices and cloud-native
            technologies, I have successfully helped companies automate workflows,
            streamline processes, and reduce deployment times. I am proficient in a
            variety of tools such as Ansible, Docker, Kubernetes, Terraform, and
            AWS, and have worked extensively with CI/CD pipelines, container
            orchestration, and system monitoring.
          </p>
          <p>
            I'm a maintainer of{" "}
            <a
              href="https://meshery.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Meshery
            </a>
            , the CNCF cloud native management plane, and I couldn't be more
            excited about where the project is headed. Lately I've been
            experimenting with how AI can sharpen configuration management and
            infrastructure operations - from drift detection to writing and
            reviewing IaC - and folding what I learn back into my day-to-day work.
          </p>
          <p>
            I work remotely more often than not, I'm bilingual in Portuguese and
            English, and I'm Catholic by upbringing - it's become genuinely my own
            faith, and I keep my rosary close and stay faithful to daily prayer.
            Outside of work you'll find me watching football (futebol, if we're
            being correct about it) - more on that further down the page.
          </p>
          <p>
            My goal is to continue evolving in the field of software engineering,
            bringing innovation to every challenge and delivering high-impact
            solutions that drive business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

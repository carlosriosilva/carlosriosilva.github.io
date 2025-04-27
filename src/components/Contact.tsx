
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
          Get in Touch
        </h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new opportunities and exciting
            projects. Feel free to reach out!
          </p>
          <Button
            variant="default"
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white inline-flex items-center gap-2"
            onClick={() => window.location.href = 'mailto:carlos.silvario41@email.com'}
          >
            <Mail className="w-5 h-5" />
            Send me an email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { Goal } from "lucide-react";

const quips = [
  {
    setup: "Americans call it “soccer.”",
    punchline:
      "We call it “football,” because — radical idea — the foot touches the ball. Their “football” is mostly a guy carrying an egg.",
  },
  {
    setup: "Why don’t Brazilian football matches need a halftime commercial empire?",
    punchline:
      "Ninety minutes, one running clock, zero timeouts. We don’t pause the beautiful game to sell you a pickup truck.",
  },
];

const Fandom = () => {
  const [revealed, setRevealed] = useState<number[]>([]);

  const toggle = (index: number) => {
    setRevealed((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="fandom" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Goal className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-center text-foreground">
            Beyond the Code
          </h2>
        </div>
        <p className="max-w-2xl mx-auto text-muted-foreground text-center mb-10">
          When I'm not automating infrastructure, I'm watching football -
          Brazilian football, to be specific. Sundays are for the badge on the
          shirt, not the Sunday standup. A couple of jokes at my American
          friends' expense, just to be fair about it:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {quips.map((quip, index) => {
            const isRevealed = revealed.includes(index);
            return (
              <button
                key={quip.setup}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isRevealed}
                className="w-full text-left bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <p className="font-semibold text-foreground mb-2">{quip.setup}</p>
                {isRevealed ? (
                  <p className="text-muted-foreground">{quip.punchline}</p>
                ) : (
                  <span className="text-sm text-primary">Tap to reveal &rarr;</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fandom;

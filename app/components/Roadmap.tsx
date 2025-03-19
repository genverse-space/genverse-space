import React from "react";

interface FutureCardProps {
  emoji: string;
  title: string;
  description: string;
}

const FutureCard: React.FC<FutureCardProps> = ({
  emoji,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-950 bg-opacity-10 backdrop-blur rounded-xl p-8 shadow-lg border-l-4 border-white">
      <h3 className="text-lg sm:text-xl md:text-sm lg:text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">{emoji}</span> {title}
      </h3>
      <p className="text-sm md:text-xs lg:text-base">{description}</p>
    </div>
  );
};

const RoadmapSection: React.FC = () => {
  const futureItems = [
    {
      emoji: "🌟",
      title: "Community-Driven Open-Source",
      description:
        "Encourages GitHub contributions for custom AI agents, allowing developers to expand the platform's capabilities with their own automation ideas.",
    },
    {
      emoji: "💼",
      title: "Enterprise Features",
      description:
        "Premium automation packs for businesses with advanced AI capabilities, team collaboration tools, and enterprise-grade security.",
    },
    {
      emoji: "🛒",
      title: "AI Workflows Marketplace",
      description:
        "A platform where users can share and sell their AI-powered automation scripts, creating a vibrant ecosystem of solutions.",
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-6 sm:py-16 lg:py-20 px-3 sm:px-6 text-white"
    >
      <div className="@container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Future Expansion
          </h2>
          <p className="lg:text-lg max-w-2xl mx-auto text-sm md:text-base">
            Our roadmap for making Genverse Space even more powerful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {futureItems.map((item, index) => (
            <FutureCard
              key={index}
              emoji={item.emoji}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

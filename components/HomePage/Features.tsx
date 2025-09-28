import { Card } from "@/components/ui/card";
import { Brain, Mic, Clock, Palette, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Personalized AI Tutors",
    description: "Each companion adapts to your unique learning style and pace, ensuring optimal knowledge retention."
  },
  {
    icon: Mic,
    title: "Voice Interaction",
    description: "Choose between male and female voices, engage in natural conversations with your AI teacher."
  },
  {
    icon: Clock,
    title: "Flexible Duration",
    description: "Set your own learning schedule from quick 15-minute sessions to comprehensive multi-hour deep dives."
  },
  {
    icon: Palette,
    title: "Teaching Styles",
    description: "Select formal academic approach or casual conversational style based on your comfort and preferences."
  },
  {
    icon: Globe,
    title: "Unlimited Subjects",
    description: "From quantum physics to creative writing, your AI companion can teach virtually any subject matter."
  },
  {
    icon: Zap,
    title: "Instant Learning",
    description: "No waiting for scheduling or availability. Start learning immediately whenever inspiration strikes."
  }
];

export const Features = () => {
  return (
    <section className=" bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Our AI Companions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the future of personalized education with AI teachers designed to make learning engaging, effective, and enjoyable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-to-b border-0 shadow-md hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 bg-[#ec622b] rounded-xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <feature.icon color="white"/>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
    )}
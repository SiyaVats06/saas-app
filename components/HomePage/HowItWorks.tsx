import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormInput, UserCheck, Play } from "lucide-react";

const steps = [
  {
    icon: FormInput,
    title: "Create Your Companion",
    description: "Fill out a simple form with your subject, topic preferences, voice choice, teaching style, and session duration.",
    details: ["Choose your subject", "Select voice & style", "Set duration"]
  },
  {
    icon: UserCheck,
    title: "Get Matched",
    description: "Our AI instantly creates a personalized teacher companion tailored to your specific learning requirements.",
    details: ["AI analyzes preferences", "Companion is created", "Teaching plan generated"]
  },
  {
    icon: Play,
    title: "Start Learning",
    description: "Begin your interactive learning session where you can ask questions, get explanations, and engage naturally.",
    details: ["Interactive teaching", "Ask questions freely", "Real-time feedback"]
  }
];

export const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with your personalized AI learning companion in just three simple steps.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center gradient-card border-0 shadow-md hover:shadow-elegant transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#ec622b] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <step.icon className=" text-white" />
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>
        
        {/* <div className="text-center">
          <Button size="lg" className="group">
            Start Your Learning Journey
            <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};
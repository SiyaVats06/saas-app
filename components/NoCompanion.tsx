import { Sparkles } from "lucide-react";
import React from "react";
import { Card, CardContent,CardDescription,CardHeader,CardTitle,} from "@/components/ui/card";
import Link from "next/link";

const NoCompanion = ({title}:{title:string}) => {
  return (
    <div className="min-h-screen bg-background ">
      <div className="container mx-auto ">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-dashed border-2 border-border/50">
            <CardHeader>
              <CardTitle className="flex flex-col items-center gap-2 text-2xl justify-center ">
                <Sparkles className="w-6 h-6 text-primary" />
               {title}
              </CardTitle>
              <CardDescription>
                Get started by creating your first AI companion. Customize their
                personality, appearance, and conversation style to match your
                preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href={"/companions/new"} className="w-full">
                <div className="rounded px-6 py-2 bg-[#fe5933] hover:bg-none   text-white font-semibold w-full text-center ">
                  Create Your Companion
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NoCompanion;

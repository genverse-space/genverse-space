import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function StandOut() {
  return (
    <section className="py-6 sm:py-16 lg:py-20 text-white">
      <div className="@container mx-auto max-w-5xl px-3 sm:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl sm:text-4xl font-semibold lg:text-5xl">
            Why Genverse Space Stands Out
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base">
            Not just another automation tool — a comprehensive AI-powered space
            for seamless human-AI collaboration
          </p>
        </div>
        <Card className="@min-3xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16 divide-gray-900 border-gray-900">
          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Not Cloud-Specific</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Works across browsers, apps, and APIs for universal automation
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">No Blockchain</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Focused on practical AI automation without Web3 dependencies
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">High Market Demand</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                AI-powered automation is trending, with tools like AutoGPT
                gaining traction
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);

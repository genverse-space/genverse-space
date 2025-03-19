// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Settings2, Sparkles, Zap } from "lucide-react";
// import { ReactNode } from "react";

// export default function Features() {
//   return (
//     <section className="py-16 md:py-32">
//       <div className="@container mx-auto max-w-5xl px-6">
//         <div className="text-center">
//           <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
//             Built to cover your needs
//           </h2>
//           <p className="mt-4">
//             Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
//             repellendus.
//           </p>
//         </div>
//         <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
//           <Card className="group shadow-zinc-950/5">
//             <CardHeader className="pb-3">
//               <CardDecorator>
//                 <Zap className="size-6" aria-hidden />
//               </CardDecorator>

//               <h3 className="mt-6 font-medium">Customizable</h3>
//             </CardHeader>

//             <CardContent>
//               <p className="text-sm">
//                 Extensive customization options, allowing you to tailor every
//                 aspect to meet your specific needs.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="group shadow-zinc-950/5">
//             <CardHeader className="pb-3">
//               <CardDecorator>
//                 <Settings2 className="size-6" aria-hidden />
//               </CardDecorator>

//               <h3 className="mt-6 font-medium">You have full control</h3>
//             </CardHeader>

//             <CardContent>
//               <p className="mt-3 text-sm">
//                 From design elements to functionality, you have complete control
//                 to create a unique and personalized experience.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="group shadow-zinc-950/5">
//             <CardHeader className="pb-3">
//               <CardDecorator>
//                 <Sparkles className="size-6" aria-hidden />
//               </CardDecorator>

//               <h3 className="mt-6 font-medium">Powered By AI</h3>
//             </CardHeader>

//             <CardContent>
//               <p className="mt-3 text-sm">
//                 Elements to functionality, you have complete control to create a
//                 unique experience.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

// const CardDecorator = ({ children }: { children: ReactNode }) => (
//   <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
//     <div
//       aria-hidden
//       className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
//     />
//     <div
//       aria-hidden
//       className="bg-radial to-background absolute inset-0 from-transparent to-75%"
//     />
//     <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
//       {children}
//     </div>
//   </div>
// );
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="py-6 sm:py-16 lg:py-20" id="features">
      <div className="@container mx-auto max-w-5xl px-3 sm:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl sm:text-4xl font-semibold lg:text-5xl">
            Next-Gen AI Automation
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base">
            Genverse Space is an AI-powered automation hub that streamlines your
            digital workflows and boosts productivity
          </p>
        </div>
        <div className="@min-3xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5 !border-gray-800">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap className="size-6 text-zinc-200" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium text-zinc-200">
                {" "}
                AI-Powered Automation{" "}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-400">
                Automates tasks, analyzes data, and streamlines operations with
                minimal manual effort.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5 !border-gray-800">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6 text-zinc-200" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium text-zinc-200">
                Seamless Integrations
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mt-3 text-sm text-zinc-400">
                Effortlessly connects with tools like Google Docs, Notion,
                Slack, and GitHub.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5 !border-gray-800">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6 text-zinc-200" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium text-zinc-200">
                {" "}
                Real-Time Insights{" "}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mt-3 text-sm text-zinc-400">
                AI extracts and summarizes data, providing actionable insights
                instantly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-zinc-900 absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t border-zinc-800">
      {children}
    </div>
  </div>
);

import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function WhatItDoes() {
  return (
    <section className="py-6 sm:py-12 lg:py-20" id="whatitdoes">
      <div className="mx-auto max-w-5xl space-y-8 px-3 sm:px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-3xl sm:text-4xl font-medium lg:text-5xl lg:whitespace-nowrap">
            What Genverse Space Offers
          </h2>
          <p className="text-xs sm:text-sm md:text-base">
            Genverse Space empowers businesses with AI-driven automation,
            seamless integrations, and innovative tools for enhanced
            productivity.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y divide-gray-900 border border-gray-900 *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium"> AI-Powered Automation </h3>
            </div>
            <p className="text-sm">
              Automates tasks, analyzes data, and streamlines operations with
              minimal manual effort.{" "}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium"> Seamless Integrations </h3>
            </div>
            <p className="text-sm">
              Effortlessly connects with tools like Google Docs, Notion, Slack,
              and GitHub.{" "}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />

              <h3 className="text-sm font-medium">
                {" "}
                Enterprise-Grade Security{" "}
              </h3>
            </div>
            <p className="text-sm">
              Implements encryption, multi-factor authentication, and
              compliance-driven security. .
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />

              <h3 className="text-sm font-medium"> Real-Time Insights </h3>
            </div>
            <p className="text-sm">
              AI extracts and summarizes data, providing actionable insights
              instantly. .
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />

              <h3 className="text-sm font-medium">Customizable Workflows </h3>
            </div>
            <p className="text-sm">
              Adapts to business needs, enabling automation flows for any
              process.{" "}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium"> Built for AI Innovation </h3>
            </div>
            <p className="text-sm">
              Continuously learns, evolves, and enhances automation efficiency
              at scale{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

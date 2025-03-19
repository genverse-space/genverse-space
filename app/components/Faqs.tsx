export default function FAQs() {
  return (
    <section
      className="scroll-py-16 md:scroll-py-32 py-6 sm:py-16 lg:py-20"
      id="faqs"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-2xl sm:text-3xl font-semibold md:text-4xl">
              Frequently <br className="hidden lg:block" /> Asked{" "}
              <br className="hidden lg:block" />
              Questions(FAQ&apos;s)
            </h2>
            <p>Genverse.Space</p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto md:max-w-lg lg:mx-0">
            <div className="pb-6">
              <h3 className="font-medium text-base lg:text-lg">
                What is Genverse.Space?{" "}
              </h3>
              <p className="text-muted-foreground mt-4 text-xs sm:text-sm md:text-base">
                Genverse.Space is an AI-powered automation platform that helps
                users streamline workflows, automate repetitive tasks, and
                enhance productivity through intelligent AI agents.{" "}
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium text-base lg:text-lg">
                Do I need coding skills to use Genverse.Space?{" "}
              </h3>
              <p className="text-muted-foreground mt-4 text-xs sm:text-sm md:text-base">
                Genverse.Space supports both cloud-based automation and local
                execution, ensuring flexibility for different user needs without
                relying on a single infrastructure.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium text-base lg:text-lg">
                When will the Pro plan be available?{" "}
              </h3>
              <p className="text-muted-foreground my-4 text-xs sm:text-sm md:text-base">
                The Pro plan is in development and will be launching soon with
                advanced AI models, multiagent automation, and premium
                integrations. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

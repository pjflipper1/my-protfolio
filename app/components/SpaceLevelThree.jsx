export default function SpaceLevelThree({ children }) {
  return (
    <section
      aria-label="Space level three"
      className="box-border flex min-h-0 w-full min-w-0 max-w-full flex-col items-start justify-start border-zinc-200 border-b p-6 last:border-b-0 md:h-full md:min-h-0 md:flex-1 md:overflow-y-auto md:overscroll-y-contain md:border-b-0 md:border-l md:border-r-0 md:pl-6 md:pr-0"
    >
      {children ?? (
        <div className="w-full min-w-0 max-w-full space-y-8">
          <h1 className="text-lg font-bold text-zinc-900">Experience</h1>

          <article className="space-y-2">
            <div className="flex w-full min-w-0 flex-col gap-1">
              <h2 className="text-base font-bold text-zinc-900">
                Web Design and Development Intern — Catania Silk
              </h2>
              <p className="text-sm text-zinc-600">Paramount, CA</p>
            </div>
            <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-zinc-700">
              <li>
                Designed and vibe coded a fully functional website using Next.js
                to showcase the variety of fabrics Catania Silk sells to their
                customers.
              </li>
              <li>
                Communicated with the Catania Silk team to build a simple, yet
                automated system for managing customer communication on the
                website.
              </li>
              <li>
                Indexed the Catania Silk website using Google Search Console and
                optimized it for search engine rankings.
              </li>
            </ul>
          </article>

          <article className="space-y-2">
            <div className="flex w-full min-w-0 flex-col gap-1">
              <h2 className="text-base font-bold text-zinc-900">
                Product Research Training — UCR INNOVAR Entrepreneurship
                Program
              </h2>
              <p className="text-sm text-zinc-600">Riverside, CA</p>
            </div>
            <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-zinc-700">
              <li>
                Used Instagram and Discord to cold outreach music producers and
                book market research calls.
              </li>
              <li>
                Conducted 18 interviews with industry music producers to search
                for market validation on a music tech product concept.
              </li>
              <li>
                Presented weekly reports of insights gained from interviews and
                how they validated the music tech product concept I had proposed
                earlier.
              </li>
            </ul>
          </article>

          <article className="space-y-2">
            <div className="flex w-full min-w-0 flex-col gap-1">
              <h2 className="text-base font-bold text-zinc-900">
                Front-End Developer Intern — ACM at UCR
              </h2>
              <p className="text-sm text-zinc-600">Riverside, CA</p>
            </div>
            <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-zinc-700">
              <li>
                Developed static components in React.js and Tailwind CSS as deliverables, based on specifications provided in Figma files.
              </li>
              <li>
                Used git version control to submit weekly deliverables and ensured that tests were run on my code before merging into the main branch.
              </li>
            </ul>
          </article>
     

          <article className="space-y-2">
            <div className="flex w-full min-w-0 flex-col gap-1">
              <h2 className="text-base font-bold text-zinc-900">
                Marketing Intern — MyStudyPal
              </h2>
              <p className="text-sm text-zinc-600">Riverside, CA</p>
            </div>
            <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-zinc-700">
              <li>
                Worked on outlining, scripting, and producing short-form
                Instagram Reel videos for high school students looking for a
                tutor to help them with their AP exam tutoring needs.
              </li>
              <li>
                Drafted researched reports on targeting the consumer segment of
                high school students interested in tutoring.
              </li>
            </ul>
          </article>
        </div>
      )}
    </section>
  );
}

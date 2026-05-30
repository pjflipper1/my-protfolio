import Link from "next/link";

export default function SpaceLevelTwo({ children }) {
  return (
    <section
      aria-label="Space level two"
      className="box-border flex min-h-0 w-full min-w-0 max-w-full flex-col items-start justify-start border-zinc-200 border-b p-6 last:border-b-0 md:h-full md:min-h-0 md:flex-1 md:overflow-y-auto md:overscroll-y-contain md:border-b-0 md:pl-0"
    >
      {children ?? (
        <div className="w-full min-w-0 max-w-full">
          <h2 className="mt-2 text-xl font-extrabold text-zinc-900 md:text-2xl">
            Design and Software Development Projects
          </h2>
          
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/design-projects/pacsun-redesign"
                className="font-semibold text-zinc-900 underline-offset-4 hover:underline"
              >
                PacSun Mobile App Redesign
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            The following is a redesign concept case study for the customer experience when browing products on the PacSun mobile app. It is a case study that is built around mockups and a vision board of design inspiration. that I designed using Figma.
          </p>

          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="https://cataniasilk.com/"
                className="font-semibold text-zinc-900 underline-offset-4 hover:underline"
              >
                Catania Silk Website
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            Catania Silk is a company that sells silk fabric and clothing. I designed and vibe coded a fully functional website using Next.js to showcase the variety of fabrics Catania Silk sells to their customers.
          </p>
          
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="https://github.com/pjflipper1/Guess-That-City"
                className="font-semibold text-zinc-900 underline-offset-4 hover:underline"
              >
                Guess That City
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            In my second year of college I took an introductory Python course, while Chat GPT was still in its infancy. I decided to use the knowledge I gained on coding combined with my HTML and CSS knowledge to learn Java Script and create the simple game of Guess That City.
          </p>

          <h2 className="mt-2 text-xl font-extrabold text-zinc-900 md:text-2xl">
            Essays and Class Projects
          </h2>

          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="https://docs.google.com/document/d/e/2PACX-1vR1qIg5ewHFYRaH-O3QHa1MEcmG-UvI8qC0NkznyOPRQ0rab6-n0cRVyKcR14Iz6mxfQdlPj5gtc67p/pub"
                className="font-semibold text-zinc-900 underline-offset-4 hover:underline"
              >
                Headphones Conjoint Analysis Project
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            In my third year of college I took a brand management course when I had to do a conjoint analysis project on the the impact of brand attributes on consumer purchase decisions when comparing JBL, Beats by Dre, and Bose.
          </p>

          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="https://docs.google.com/document/d/e/2PACX-1vTz7S-2knIXe6ZfQH3mOSa2Mu2XzNvMW8iP8toLkI35ekEI2oLO7Uls3yH4j7jFvmCXtK-e0NTA_Dv0/pub"
                className="font-semibold text-zinc-900 underline-offset-4 hover:underline"
              >
                The Lanham Act Needs To Amend Their Trademark Policy Regulate Deep Fake Content
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            In my third year of college I took a business ethics and law course where I wrote a term paper on the regulation of deep fake content under the Lanham Act.
          </p>

          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="https://docs.google.com/document/d/e/2PACX-1vRbqI2lKAfnHtZWby4bNX4_YqU3edTtK4vUqREOzNnCnN1714x0JsC7iFh-Fxc_0euTttbI_8VjRXyL/pub"
                className="font-semibold text-zinc-900 underline-offset-4 hover:underline"
              >
                Youtube Needs To Build A Marketplace 
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
For my second year english course, I wrote a term paper on the impact of the Youtube marketplace on the content creation industry, and how non-advertiser friendly content creators like NELK have high value brands where they can sell their own products, a market that Youtube has failed to capture and coud solve with the interoduction of a creator marketplace, similar to what eventually became Tik Tok shop a year later.
          </p>
        
        </div>
      )}
    </section>
  );
}

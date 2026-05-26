import Image from "next/image";

const TOOL_ICONS = [
  { file: "Figma-logo.svg.png", alt: "Figma" },
  { file: "Adobe_Photoshop_CC_icon.svg.png", alt: "Adobe Photoshop" },
  { file: "Adobe_After_Effects_CC_icon.svg.png", alt: "Adobe After Effects" },
  { file: "Adobe_Premiere_Pro_CC_icon.svg.png", alt: "Adobe Premiere Pro" },
  { file: "cursor.png", alt: "Cursor" },
  { file: "claude-ai-icon.webp", alt: "Claude" },
  { file: "perplexity-ai-icon.webp", alt: "Perplexity" },
  { file: "Python-logo-notext.svg.png", alt: "Python" },
  { file: "Unofficial_JavaScript_logo_2.svg.png", alt: "JavaScript" },
  { file: "React-icon.svg.png", alt: "React" },
  { file: "icon-file-type-excel.png", alt: "Microsoft Excel" },
  { file: "sawtooth_software_logo.jpg", alt: "Sawtooth Software" },
  { file: "fl-studio.png", alt: "FL Studio" },
  { file: "images (1).jpg", alt: "Image" },
];

export default function SpaceLevelOne({ children }) {
  return (
    <section
      aria-label="Space level one"
      className="box-border flex min-h-0 w-full min-w-0 max-w-full flex-col items-start justify-start p-6 md:h-full md:min-h-0 md:flex-1 md:overflow-y-auto md:overscroll-y-contain md:pr-0"
    >
      {children ?? (
        <div className="w-full min-w-0 max-w-full">
          <h1 className="w-full min-w-0 text-3xl font-bold text-zinc-900">
            Sujay Subramanyam
          </h1>
          <div className="flex w-full max-w-prose flex-col items-start">
            <div className="relative mt-4 aspect-square w-full max-w-[min(100%,21.33rem)] overflow-hidden rounded-lg">
              <Image
                src="/profile-pic/1724480379833.jpg"
                alt="Sujay Subramanyam"
                fill
                className="object-cover object-center !-inset-0.5"
                sizes="(max-width: 768px) 57vw, 30vw"
                priority
              />
            </div>
          </div>
          <h2 className="mt-3 w-full min-w-0 text-base font-medium text-zinc-600">
            Hi, my name is Sujay, and I am a 23 year old passionate about design, business, tech, music, and creative direction. 
          </h2>
          <h2 className="mt-3 w-full min-w-0 text-left text-lg text-zinc-600">
            Tools:
          </h2>
          <div className="mt-3 w-full">
            <div className="mt-3 flex w-full flex-wrap gap-x-2 gap-y-3">
              {TOOL_ICONS.map(({ file, alt }) => (
                <div
                  key={file}
                  className="relative size-10 shrink-0 overflow-hidden rounded-md bg-zinc-50"
                >
                  <Image
                    src={`/icon-pics/${encodeURIComponent(file)}`}
                    alt={alt}
                    fill
                    className="object-contain p-1"
                    sizes="44px"
                  />
                </div>
              ))}
            </div>
          </div>
          <h2 className="mt-3 w-full min-w-0 text-left text-lg text-zinc-600">
            Education:
          </h2>
          <h2 className="mt-3 w-full min-w-0 text-left text-lg text-zinc-600">
            B.S. Business Administration - UC Riverside
          </h2>
          <h2 className="mt-3 w-full min-w-0 text-left text-lg text-zinc-600">
            Concentration: Information Systems and Marketing
          </h2>
          <h2 className="mt-3 w-full min-w-0 text-left text-lg text-zinc-600">
            Graduated: December 2025
          </h2>
        </div>
      )}
    </section>
  );
}

import SpaceLevelOne from "./components/SpaceLevelOne";
import SpaceLevelTwo from "./components/SpaceLevelTwo";
import SpaceLevelThree from "./components/SpaceLevelThree";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-0 max-w-full flex-col md:min-h-0 md:h-screen md:max-h-screen md:overflow-hidden">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col md:h-full md:min-h-0 md:flex-row md:items-stretch">
        <div className="flex min-h-0 min-w-0 max-w-full shrink-0 flex-col md:max-w-sm md:overflow-hidden">
          <SpaceLevelOne />
        </div>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col md:min-h-0 md:overflow-hidden">
          <SpaceLevelTwo />
        </div>
        <div className="flex min-h-0 min-w-0 shrink-0 flex-col md:h-full md:w-80 md:max-w-sm md:overflow-hidden">
          <SpaceLevelThree />
        </div>
      </div>
    </main>
  );
}

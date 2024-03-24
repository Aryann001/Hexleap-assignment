import SportSection from "@/components/sport/SportSection";
import SpotlightSection from "@/components/spotlight/SpotlightSection";

export default function Home() {
  return (
    <section className="w-full h-auto overflow-hidden bg-slate-100 dark:bg-[#292B32] flex flex-col gap-10">
      <SportSection />
      <SpotlightSection />
    </section>
  );
}

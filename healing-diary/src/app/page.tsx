import RecentDiaries from "@/components/home/recent-diaries";
import RecentGroup from "@/components/home/recent-group";
import TrendingGroups from "@/components/home/trending-groups";

export default function HomePage() {
  return (
    <main className="flex w-full max-w-limit flex-1 flex-col items-stretch justify-start bg-white">
      <TrendingGroups />
      <RecentGroup />
      <RecentDiaries />
    </main>
  );
}

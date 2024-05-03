import MyGroup from "@/components/group/my-group";
import OtherGroup from "@/components/group/other-group";

export default function GroupPage() {
  return (
    <main className="flex w-full max-w-limit flex-1 flex-col items-stretch justify-start bg-white">
      <MyGroup />
      <OtherGroup />
    </main>
  );
}

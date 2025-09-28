import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Define the Loading UI here
  return (
    <div className="flex flex-col gap-4 p-8 max-w-[1440px] mx-auto w-full">
      <h2>Companion Library</h2>
      <div className="flex gap-4 w-full flex-col lg:flex-row">
        <Skeleton className="h-[220px] w-full rounded-xl" />
        <Skeleton className="h-[220px] w-full rounded-xl" />
        <Skeleton className="h-[220px] w-full rounded-xl" />
      </div>
    </div>
  );
}

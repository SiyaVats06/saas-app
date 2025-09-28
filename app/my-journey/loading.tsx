import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Define the Loading UI here
  return (
    <div className="flex flex-col gap-8 justify-center items-center p-8 min-lg:w-3/4 m-auto">
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center w-full">
      <div className="flex  items-center space-x-4">
        <Skeleton className="h-28 w-28 " />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-28 w-28 " />
        <Skeleton className="h-28 w-28 " />
      </div>
</div>
      <div className="flex gap-4 w-full flex-col lg:flex-row">
        <Skeleton className="h-[220px] w-full rounded-xl" />
        <Skeleton className="h-[220px] w-full rounded-xl" />
        <Skeleton className="h-[220px] w-full rounded-xl" />
      </div>
    </div>
  );
}

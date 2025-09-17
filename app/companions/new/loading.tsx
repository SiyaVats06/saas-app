import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Define the Loading UI here
  return (
    <div className="flex flex-col space-y-6 w-full p-8 justify-center items-center">
        <h2>Comapanion Builder</h2>
      <Skeleton className="h-8 w-1/2 " />

      <Skeleton className="h-8 w-1/2 " />

      <Skeleton className="h-12 w-1/2 " />

      <Skeleton className="h-8 w-1/2 " />

      <Skeleton className="h-8 w-1/2 " />

    </div>
  );
}

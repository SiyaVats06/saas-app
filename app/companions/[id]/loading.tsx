import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Define the Loading UI here
  return   <div className="flex flex-col space-y-3 w-full p-8">
      <Skeleton className="h-[70vh] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/2 text-gray-500" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
}
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingDetailCard() {
  return (
    <div
      className="flex mx-auto items-center 
    justify-items-center min-h-screen p-8 pb-20 gap-3 sm:p-10 w-full max-w-sm"
    >
      <div className="p-8 border border-gray-300 rounded-lg shadow-md bg-white">
        <Skeleton className="h-8 w-70 mb-4 rounded-md" />
        <Skeleton className="h-4 w-44 mb-2 rounded-md" />
        <Skeleton className="h-4 w-52 mb-2 rounded-md" />
        <Skeleton className="h-6 w-36 mb-4 rounded-md" />
        <Skeleton className="h-4 w-36 mb-4 rounded-md" />
        <Skeleton className="h-4 w-46 mb-4 rounded-md" />
        <Skeleton className="h-4 w-44 mb-4 rounded-md" />
        <Skeleton className="h-9 w-70 mb-2 rounded-md" />
        <Skeleton className="h-9 w-70 rounded-md" />
      </div>
    </div>
  );
}

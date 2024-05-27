import { Skeleton } from "@/components/ui/skeleton";

function NavBarSkeleton() {
	return (
		<div className="flex h-14 w-full items-center justify-between border-b px-6 sm:container">
			<div className="flex items-center gap-4">
				<Skeleton className="h-6 w-6 rounded-full" />

				<div className="hidden lg:flex lg:gap-4">
					<Skeleton className="h-7 w-[100px]" />

					<Skeleton className="h-7 w-[100px]" />

					<Skeleton className="h-7 w-[100px]" />
				</div>
			</div>

			<Skeleton className="h-6 w-6 lg:hidden" />

			<Skeleton className="hidden h-8 w-full max-w-xs lg:block" />
		</div>
	);
}

export default function LoadingPage() {
	return (
		<div className="min-h-screen space-y-6">
			<NavBarSkeleton />

			<div className="space-y-6 px-6 sm:container">
				<Skeleton className="h-9 w-full max-w-md" />

				<Skeleton className="h-32 w-full" />
			</div>
		</div>
	);
}

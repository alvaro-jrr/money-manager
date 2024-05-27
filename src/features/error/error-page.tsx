import { Main } from "@/components/main";
import { RootPage } from "@/components/root-page";

export function ErrorPage() {
	return (
		<RootPage>
			<Main className="grid place-content-center space-y-4 p-6">
				<h1 className="text-center text-3xl font-bold">
					Página no encontrada{" "}
				</h1>

				<p className="text-center text-muted-foreground">
					Esta no es la página que estás buscando
				</p>
			</Main>
		</RootPage>
	);
}

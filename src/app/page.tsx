import ThemeChanger from "@/components/ThemeChanger";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-24 space-y-8">
      <ThemeChanger />
      {/* <h1 className="text-4xl text-center font-bold">Design System in Depth</h1> */}
      <div className="flex items-center justify-center space-x-4">
        <Button variant={"primary"} size={"base"}>
          Button
        </Button>
        <Button variant={"outline"} size={"lg"}>
          Button
        </Button>
        <Button variant={"secondary"} size={"sm"}>
          Button
        </Button>
        <Button variant={"destructive"} size={"xs"}>
          Button
        </Button>
      </div>
      <Button fullWidth>Full Width</Button>
    </main>
  );
}

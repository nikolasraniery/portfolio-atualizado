import { Button } from "@/components/ui/button.tsx";

export function Tag({
  children,
  tagName,
}: {
  children: JSX.Element;
  tagName: string;
}) {
  return (
    <Button className="flex gap-2 bg-base-gray-300 rounded-full border border-transparent hover:bg-base-gray-300 hover:border hover:border-base-gray-400">
      {children}
      <span className="font-mavenpro text-text-md text-base-gray-500">
        {tagName}
      </span>
    </Button>
  );
}

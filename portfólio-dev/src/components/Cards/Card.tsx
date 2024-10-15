interface CardProps {
  cardImage: string;
  projectName: string;
  projectDescription: string;
}
export function Card({
  cardImage,
  projectDescription,
  projectName,
}: CardProps) {
  return (
    <div className="flex flex-col gap-3 p-6 w-full">
      <img src={cardImage} />
      <strong className="font-asap text-title-sm text-base-gray-600">
        {projectName}
      </strong>
      <p className="font-mavenpro text-text-sm text-base-gray-500">
        {projectDescription}
      </p>
    </div>
  );
}

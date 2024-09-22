import Link from "next/link";

type CardProps = {
  projectUrl: string;
  img: string;
  title: string;
  description: string;
};

export default function Card({
  projectUrl,
  img,
  description,
  title,
}: CardProps) {
  return (
    <div className="max-h-96 w-11/12 min-w-80">
      <Link
        href={projectUrl}
        target="_blank"
        className="flex flex-col justify-between"
      >
        <img
          className="h-72 w-full rounded-lg object-fill"
          src={img}
          alt="Project"
          loading="lazy"
        />
        <h3 className="mt-1 text-lg font-semibold text-neutral-100">{title}</h3>
        <p className="mt-1 text-sm text-neutral-50">{description}</p>
      </Link>
    </div>
  );
}

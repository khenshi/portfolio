import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

import type { ProjectGalleryImage } from "@/data/projects/types";

type ProjectMediaProps = {
  image?: ProjectGalleryImage;
  title: string;
  placeholderLabel?: string;
  variant: "card" | "hero" | "gallery";
  sizes: string;
};

function isAvailablePublicImage(src: string | undefined) {
  if (!src?.startsWith("/")) return false;

  const publicDirectory = path.resolve(process.cwd(), "public");
  const imagePath = path.resolve(publicDirectory, `.${src}`);
  return imagePath.startsWith(`${publicDirectory}${path.sep}`) && existsSync(imagePath);
}

export function ProjectMedia({ image, title, placeholderLabel, variant, sizes }: ProjectMediaProps) {
  const imageIsAvailable = isAvailablePublicImage(image?.src);
  const placeholderTitle = placeholderLabel ?? (image?.caption || `${title} preview`);
  const variantClass = variant === "card"
    ? "aspect-[16/10] mb-[.8rem]"
    : variant === "hero"
      ? "aspect-[16/10] min-h-[18rem] max-[420px]:min-h-56"
      : "aspect-[4/3]";

  return (
    <div className={`relative overflow-hidden border border-line bg-paper ${variantClass}`}>
      {image && imageIsAvailable ? (
        <Image className="object-cover" src={image.src} alt={image.alt} fill sizes={sizes} />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-[.65rem] p-[1.2rem] text-center text-muted" role="img" aria-label={`${title} preview placeholder`}>
          <ImageIcon size={22} aria-hidden="true" />
          <span className="text-[.82rem] font-[650] text-ink">{placeholderTitle}</span>
          <small className="max-w-[230px] text-[.7rem] leading-[1.5]">Add the image file under public/ to show it here.</small>
        </div>
      )}
    </div>
  );
}

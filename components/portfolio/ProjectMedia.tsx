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
  const placeholderTitle = placeholderLabel ?? image?.caption ?? `${title} preview`;

  return (
    <div className={`project-media project-media-${variant}`}>
      {image && imageIsAvailable ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} />
      ) : (
        <div className="project-media-placeholder" role="img" aria-label={`${title} preview placeholder`}>
          <ImageIcon size={22} aria-hidden="true" />
          <span>{placeholderTitle}</span>
          <small>Add the image file under public/ to show it here.</small>
        </div>
      )}
    </div>
  );
}

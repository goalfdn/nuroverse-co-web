import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { useEffect, useMemo, useState } from 'react';

interface ImageContainerProps {
  src: ImageMetadata;
  alt: string;
  format?: string;
  style?: string;
}

export default function ImageContainer({ src, alt, style, format }: ImageContainerProps) {
  const [optimizedImage, setOptimizedImage] = useState<string>('');
  
  const imageHasLoaded = useMemo<boolean>(() => optimizedImage !== '', [optimizedImage]);

  useEffect(() => {
    const optimizeImage = async () => {
      let opt = '';
      try {
        const optImg = await getImage({
          src,
          format: format ?? 'webp'
        });
        opt = optImg.src;
      } catch {
        opt = src.src;
      } finally {
        setOptimizedImage(opt);
      }
    };

    optimizeImage();
  }, []);
  
  return (
    <div className="flex flex-1">
      <div className='flex relative w-full h-full'>
        <img
          style={{objectFit: "contain", objectPosition: "center middle"}}
          className={`transition ease-in duration-700 ${style ?? ''} ${imageHasLoaded ? 'opacity-1' : 'opacity-0'}`}
          src={optimizedImage}
          alt={alt}
        />
      </div>
    </div>
  );
}
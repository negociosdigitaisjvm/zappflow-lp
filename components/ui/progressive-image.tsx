'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export const ProgressiveImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: ProgressiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn('overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-110 blur-lg grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

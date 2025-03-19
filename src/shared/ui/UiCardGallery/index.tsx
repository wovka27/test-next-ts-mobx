import React, { useState, useRef } from 'react'
import styles from '@/shared/ui/UiCardGallery/ui-card=gallery.module.scss'

interface CardGalleryProps {
  images: string[];
  alt?: string;
}

const CardGallery: React.FC<CardGalleryProps> = ({ images, alt = "картинка" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartX.current) return;
    const touchEndX = event.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }
      touchStartX.current = null; // Сбрасываем после свайпа
    }
  };

  return (
    <div
      className={styles.gallery}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <img src={images[currentIndex]} alt={alt} className={styles.image} />
      <div className={styles.overlay}>
        {images.map((_, index) => (
          <div
            key={index}
            className={styles.hoverZone}
            onMouseEnter={() => handleMouseEnter(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGallery;

import { PropsWithChildren, CSSProperties, useState, useEffect, useRef } from 'react';

import styles from './card.module.scss';

interface CardProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, style, className }) => {
  const [height, setHeight] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      setHeight(cardRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles['rascal-card']} ${className}`}
      style={
        {
          ...style,
          '--card-filter': height ? `blur(calc(${height}px / 5))` : 'none',
        } as React.CSSProperties
      } // Use React.CSSProperties to cast the inline style
    >
      {children}
    </div>
  );
};

export default Card;

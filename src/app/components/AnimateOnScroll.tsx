'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  // アニメーションの種類をpropsで受け取れるようにする (任意)
  // animationType?: 'fadeIn' | 'zoomIn';
}

export default function AnimateOnScroll({ children }: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" }); // 画面に少し入ったらトリガー
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        // 初期状態: 透明で、少し下にずれていて、少し小さい
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        // 表示状態: 不透明で、元の位置、元のサイズ
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
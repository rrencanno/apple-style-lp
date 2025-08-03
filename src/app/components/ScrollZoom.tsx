'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollZoomProps {
  children: ReactNode;
}

export default function ScrollZoom({ children }: ScrollZoomProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  // targetRefの要素がビューポートを通過する際のスクロール進行度を監視
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'], // 要素が画面下部に入ってから、画面上部を抜けるまで
  });

  // scrollYProgress (0から1) の値に応じて、scaleとopacityを変化させる
  // [0, 0.5, 1] -> scrollYProgressの値
  // [0.5, 1, 0.5] -> 対応するscaleの値
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        scale,       // scaleプロパティを適用
        opacity,     // opacityプロパティを適用
        position: 'sticky', // 要素を画面に固定
        top: '10vh', // 画面の上から10%の位置に固定
      }}
    >
      {children}
    </motion.div>
  );
}
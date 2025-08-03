'use client'; // クライアントコンポーネントとしてマーク

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
}

export default function FadeIn({ children }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // 要素が画面に入ったら一度だけtrueになる
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible'); // 画面に入ったら'visible'アニメーションを開始
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="relative overflow-hidden w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 }, // 初期状態: 透明で、下に75pxずれている
          visible: { opacity: 1, y: 0 },   // 表示状態: 不透明で、元の位置
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
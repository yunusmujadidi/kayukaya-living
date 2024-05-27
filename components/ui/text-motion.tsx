"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

export default function TextMotion({
  paragraph,
  className,
}: {
  paragraph: string;
  className?: string;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.5"],
  });

  return (
    <motion.p
      ref={container}
      className={cn(className, styles.paragraph)}
      style={{ opacity: scrollYProgress }}
    >
      {paragraph}
    </motion.p>
  );
}

"use client";
import { Children } from "@/types/Types";
import { motion } from "framer-motion";

function DivMotionWrapper({ children }: Children) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default DivMotionWrapper;

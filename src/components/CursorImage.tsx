import { motion, AnimatePresence } from "framer-motion";
import WaveImage from "@/components/WaveImage";
interface CursorImageProps {
  src: string;
  alt: string;
  visible: boolean;
  x: number;
  y: number;
}
const CursorImage = ({ src, alt, visible, x, y }: CursorImageProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed pointer-events-none z-40 rounded-lg overflow-hidden shadow-2xl"
          style={{
            left: x + 20,
            top: y - 100,
            width: 320,
            height: 220,
          }}
        >
          <WaveImage
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CursorImage;

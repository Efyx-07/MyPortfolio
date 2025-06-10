import Image from 'next/image';
import { motion } from 'framer-motion';
import './HeroImage.scss';

export default function HeroImage() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="hero-image"
    >
      <div className="image-container">
        <Image
          className="img"
          src="/images/decoration/fxsavarydev.jpg"
          width={500}
          height={500}
          alt="fxsavary.com"
          priority
        />
      </div>
    </motion.div>
  );
}

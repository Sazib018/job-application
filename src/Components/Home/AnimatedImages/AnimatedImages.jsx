import { motion } from "framer-motion";

const AnimatedImages = () => {
  return (
    <div className="flex justify-center items-center h-screen relative overflow-hidden">
      <motion.img
        src="https://i.ibb.co/2QhkJTh/images.jpg"
        alt=""
        className="absolute w-2/5 h-2/4 rounded-r-2xl rounded-bl-2xl z-10"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: -100, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity  }}
      />
      <motion.img
        src="https://i.ibb.co.com/XxHYrG0s/images-1.jpg"
        alt=""
        className="absolute w-2/5 h-2/4 rounded-r-2xl rounded-bl-2xl z-0"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 100, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity  }}
      />
    </div>
  );
};

export default AnimatedImages;

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

/**
 * Animate component when it is visible in viewport
 * @param {Component} children component that you want to fade in
 * @param {Object} initial initial animation
 * @param {Object} animate animate from initial propert
 */
export default function FadeInWhenVisible({ children, initial, animate }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    // Start animation if the child component is visible inside viewport
    inView ? controls.start("anim") : controls.stop()
    return () => { controls.stop() }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="init"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.3 }}
      variants={{ init: initial, anim: animate }}
    >
      {children}
    </motion.div>
  )
}

FadeInWhenVisible.defaultProps = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 }
}

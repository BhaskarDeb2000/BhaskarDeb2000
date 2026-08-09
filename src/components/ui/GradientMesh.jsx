import { motion } from 'framer-motion';

export default function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <motion.div
        className="absolute -top-[40%] -left-[20%] w-[70vw] h-[70vw] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.28) 0%, transparent 70%)',
        }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[20%] -right-[15%] w-[55vw] h-[55vw] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.34) 0%, transparent 70%)',
        }}
        animate={{ x: [0, -35, 0], y: [0, 45, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-[30%] left-[25%] w-[60vw] h-[60vw] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.26) 0%, transparent 70%)',
        }}
        animate={{ x: [0, 25, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
        }}
      />
    </div>
  );
}

import { Variants } from "framer-motion";

export const animations = {
  /* ------------------ FADE ------------------ */
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  /* ------------------ FADE V2 ------------------ */
  fadeUpV2: {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  },

  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  fadeDownV2: {
    hidden: { opacity: 0, y: -40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  },

  fadeLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  fadeRight: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },

  floatUpSoft: {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  },

  floatRightSoft: {
    hidden: { opacity: 0, x: -40, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  },

  floatLeftSoft: {
    hidden: { opacity: 0, x: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  },

  scaleIn: {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },

  scaleUp: {
    hidden: { scale: 0.6, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
  },

  rotateIn: {
    hidden: { rotate: -10, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },

  slideUp: {
    hidden: { y: 80 },
    visible: {
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  slideDown: {
    hidden: { y: -80 },
    visible: {
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  slideLeft: {
    hidden: { x: 80 },
    visible: {
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  slideRight: {
    hidden: { x: -80 },
    visible: {
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  bounceIn: {
    hidden: { scale: 0.3, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  },

  pulse: {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: { duration: 0.8, repeat: Infinity },
    },
  },

  imageRevealUp: {
    hidden: { opacity: 0, scale: 1.08, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },

  imageRevealDown: {
    hidden: { opacity: 0, scale: 1.08, y: -40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },

  imageRevealLeft: {
    hidden: { opacity: 0, scale: 1.08, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },

  imageRevealRight: {
    hidden: { opacity: 0, scale: 1.08, x: -40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },

  /* ------------------ STAGGER (PARENT) ------------------ */
  stagger: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
} satisfies Record<string, Variants>;

export type AnimationKey = keyof typeof animations;

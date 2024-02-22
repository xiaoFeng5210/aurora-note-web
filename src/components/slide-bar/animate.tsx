export const variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren"
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

export const itemVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

export const logoVariants = {
  hover: {
    scale: 1.2,
    rotate: 90,
  },
  tap: {
    scale: 1.1,
  }
}

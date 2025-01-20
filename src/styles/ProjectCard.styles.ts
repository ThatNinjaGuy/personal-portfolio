export const styles = {
  card: `
    bg-zinc-900/50 
    rounded-xl 
    h-full 
    flex 
    flex-col 
    backdrop-blur-sm 
    transition-all 
    border 
    border-zinc-800 
    hover:border-zinc-700
    hover:shadow-lg
    hover:shadow-zinc-900/20
    hover:-translate-y-1
    p-6
    relative
    overflow-hidden
  `,
  gradient: `
    absolute 
    inset-0 
    bg-gradient-to-br 
    from-transparent 
    to-black/20 
    pointer-events-none
  `,
  contentWrapper: `relative`,
  titleContainer: `flex items-start justify-between`,
  title: `
    text-xl
    font-bold
    text-zinc-100
    mb-3
  `,
  visitButton: `
    text-sm
    font-medium
    rounded-lg
    px-3 
    py-1 
    mt-1
    transition-all 
    hover:scale-105
    active:scale-95
    bg-indigo-600/90
    text-white
    hover:bg-indigo-500
    text-xs
  `,
  description: `
    text-sm
    text-zinc-400
    mb-6
    flex-grow
    line-height-relaxed
  `,
  linksContainer: `
    flex 
    flex-wrap 
    gap-3 
    mt-auto
  `,
  link: {
    base: `
      text-sm
      font-medium
      rounded-lg
      px-4 
      py-2 
      transition-all 
      hover:scale-105
      active:scale-95
    `,
    github: `
      bg-zinc-800
      text-zinc-100
      hover:bg-zinc-700
    `,
    associated: `
      bg-emerald-600/90
      text-white
      hover:bg-emerald-500
    `,
  },
};

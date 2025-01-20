export const theme = {
  colors: {
    primary: {
      bg: "bg-indigo-600/90",
      hover: "hover:bg-indigo-500",
    },
    secondary: {
      bg: "bg-zinc-800",
      hover: "hover:bg-zinc-700",
    },
    accent: {
      bg: "bg-emerald-600/90",
      hover: "hover:bg-emerald-500",
    },
    card: {
      bg: "bg-zinc-900/50",
      hover: "hover:bg-zinc-900/60",
      border: "border-zinc-800",
      borderHover: "hover:border-zinc-700",
    },
    text: {
      primary: "text-zinc-100",
      secondary: "text-zinc-400",
    },
    gradient: "from-transparent to-black/20",
  },
  spacing: {
    card: "p-6",
    gap: "gap-3",
    marginBottom: {
      sm: "mb-3",
      md: "mb-6",
    },
  },
  borderRadius: {
    card: "rounded-xl",
    button: "rounded-lg",
  },
  typography: {
    title: "text-xl font-bold",
    description: "text-sm leading-relaxed line-clamp-5",
    button: "text-sm font-medium",
    pill: "text-xs",
  },
  effects: {
    hover: "hover:shadow-lg hover:shadow-zinc-900/20 hover:-translate-y-1",
    buttonHover: "hover:scale-105 active:scale-95",
    blur: "backdrop-blur-sm",
  },
  sizing: {
    description: "h-[120px]",
  },
  layout: {
    container: {
      base: "min-h-screen flex flex-col items-center py-16 px-6 md:px-12 lg:px-24",
      main: "w-full max-w-7xl mx-auto flex flex-col items-center gap-16",
    },
    grid: "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    section: {
      title: "w-full text-center max-w-2xl mx-auto px-4",
    },
  },
  headings: {
    h1: "text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600",
    subtitle: "text-xl text-gray-300 leading-relaxed",
  },
};

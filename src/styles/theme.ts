export const theme = {
  colors: {
    primary: {
      bg: "bg-blue-500",
      hover: "hover:bg-blue-600",
    },
    secondary: {
      bg: "bg-gray-700",
      hover: "hover:bg-gray-600",
    },
    accent: {
      bg: "bg-purple-600",
      hover: "hover:bg-purple-700",
    },
    card: {
      bg: "bg-white/10",
      hover: "hover:bg-white/15",
    },
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
    },
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
    title: "text-2xl font-semibold",
    description: "text-sm leading-relaxed",
    button: "text-sm",
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

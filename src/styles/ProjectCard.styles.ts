import { theme } from "./theme";

export const styles = {
  card: `
    ${theme.colors.card.bg}
    ${theme.borderRadius.card}
    h-full 
    flex 
    flex-col 
    ${theme.effects.blur}
    transition-all 
    border 
    ${theme.colors.card.border}
    ${theme.colors.card.borderHover}
    ${theme.effects.hover}
    ${theme.spacing.card}
    relative
    overflow-hidden
  `,
  gradient: `
    absolute 
    inset-0 
    bg-gradient-to-br 
    ${theme.colors.gradient}
    pointer-events-none
  `,
  contentWrapper: `relative`,
  titleContainer: `flex items-start justify-between`,
  title: `
    ${theme.typography.title}
    ${theme.colors.text.primary}
    ${theme.spacing.marginBottom.sm}
  `,
  visitButton: `
    ${theme.typography.button}
    ${theme.typography.pill}
    ${theme.borderRadius.button}
    px-3 
    py-1 
    mt-1
    transition-all 
    ${theme.effects.buttonHover}
    ${theme.colors.primary.bg}
    ${theme.colors.text.primary}
    ${theme.colors.primary.hover}
  `,
  description: `
    ${theme.typography.description}
    ${theme.colors.text.secondary}
    ${theme.spacing.marginBottom.md}
    flex-grow
    ${theme.sizing.description}
    overflow-hidden
  `,
  linksContainer: `
    flex 
    flex-wrap 
    ${theme.spacing.gap}
    mt-auto
  `,
  link: {
    base: `
      ${theme.typography.button}
      ${theme.typography.pill}
      ${theme.borderRadius.button}
      px-3
      py-1
      transition-all 
      ${theme.effects.buttonHover}
      ${theme.colors.text.primary}
    `,
    github: `
      ${theme.colors.secondary.bg}
      ${theme.colors.secondary.hover}
    `,
    associated: `
      ${theme.colors.accent.bg}
      ${theme.colors.accent.hover}
    `,
  },
  price: "text-green-600 font-semibold text-lg mb-2",
  newsInfo: "text-gray-600 text-sm mb-2",
  blogInfo: "text-gray-600 text-sm mb-2",
};

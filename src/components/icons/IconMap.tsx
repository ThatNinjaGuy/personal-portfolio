import { IconType } from "@/constants/projects";
import { GithubIcon } from "./GithubIcon";
import { SettingsIcon } from "./SettingsIcon";
import { DatabaseIcon } from "./DatabaseIcon";
import { DocsIcon } from "./DocsIcon";

interface IconProps {
  className?: string;
}

const IconComponents: Record<IconType, React.FC<IconProps>> = {
  github: GithubIcon,
  settings: SettingsIcon,
  database: DatabaseIcon,
  docs: DocsIcon,
};

export function Icon({
  type,
  className,
}: {
  type: IconType;
  className?: string;
}) {
  const IconComponent = IconComponents[type];
  return <IconComponent className={className} />;
}

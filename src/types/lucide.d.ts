declare module 'lucide-react' {
  import { FC, SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;

  export const Users: LucideIcon;
  export const Droplet: LucideIcon;
  export const Brain: LucideIcon;
  export const Utensils: LucideIcon;
  export const X: LucideIcon;
  export const Check: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const Star: LucideIcon;
  export const Coffee: LucideIcon;
  export const Heart: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Flame: LucideIcon;
  export const Dumbbell: LucideIcon;
  export const Zap: LucideIcon;
  export const Timer: LucideIcon;
  export const Menu: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const Instagram: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Phone: LucideIcon;
  export const Info: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const ShoppingCart: LucideIcon;
  export const Clock: LucideIcon;
  export const Search: LucideIcon;
  export const Plus: LucideIcon;
  export const Minus: LucideIcon;
  export const Play: LucideIcon;
  export const Circle: LucideIcon;
  export const Dot: LucideIcon;
  export const Eye: LucideIcon;
  export const EyeOff: LucideIcon;
  export const Trash: LucideIcon;
  export const Trash2: LucideIcon;
  export const Edit: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Github: LucideIcon;
  export const Twitter: LucideIcon;
  export const PanelLeft: LucideIcon;
  export const PanelRight: LucideIcon;
  export const LogOut: LucideIcon;
  export const User: LucideIcon;
  export const Bell: LucideIcon;
  export const Command: LucideIcon;
  export const MoreHorizontal: LucideIcon;
  export const MoreVertical: LucideIcon;
}

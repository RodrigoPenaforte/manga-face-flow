import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg";
  href?: string;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, children, size = "lg", href, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (href) {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 cursor-pointer",
          size === "lg" && "text-lg px-8 py-6 h-auto",
          size === "default" && "px-6 py-4",
          size === "sm" && "px-4 py-2",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    )
  }
)
CTAButton.displayName = "CTAButton"

export { CTAButton }
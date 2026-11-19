export function LogoMark({ className = 'h-10 w-10' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <img
      src="/images/logo-mark.png"
      alt="Tanger Dental Center"
      className={`object-contain ${className}`}
    />
  )
}

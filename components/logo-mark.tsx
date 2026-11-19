// Final clinic logo supplied by the owner (glowing gold tooth + TDC on pure
// black), used byte-identical and displayed inside a black rounded-corner
// tile so the artwork's black background blends into the tile.
export function LogoMark({ className = 'h-10 w-10' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <span
      className={`inline-block shrink-0 overflow-hidden rounded-[22%] bg-black shadow-md ring-1 ring-black/15 ${className}`}
    >
      <img src="/images/logo-user.png" alt="Tanger Dental Center" className="h-full w-full object-cover" />
    </span>
  )
}

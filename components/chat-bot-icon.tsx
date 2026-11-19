/**
 * Dedicated chat-assistant glyph for the chat widget (launcher + chat header).
 * Original inline SVG in the template's lucide-style stroke family: a rounded
 * speech bubble with two eyes and a smile — reads instantly as "chat
 * assistant" at small sizes. Deliberately NOT the clinic logo.
 */
export function ChatBotIcon({ className = 'size-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <circle cx="9" cy="9.5" r="1.05" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9.5" r="1.05" fill="currentColor" stroke="none" />
      <path d="M9.3 13.2c.75.85 1.65 1.3 2.7 1.3s1.95-.45 2.7-1.3" />
    </svg>
  )
}

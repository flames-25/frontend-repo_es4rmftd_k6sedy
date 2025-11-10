export default function Marquee({ items = [], speed = 30, reverse = false }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${speed}s linear infinite`
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-zinc-400/80 hover:text-white transition-colors">{item}</span>
        ))}
      </div>
    </div>
  )
}

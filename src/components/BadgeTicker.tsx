const badges = [
  '🌿 No Palm Oil',
  '🌾 Gluten Free Options',
  '🚫 MSG Free',
  '🧬 Non GMO',
  '🇮🇳 Made in India',
  '♻️ Eco Packaging',
  '⭐ Premium Quality',
  '🔥 Bold Flavors',
];

const BadgeTicker = () => {
  return (
    <div className="bg-primary py-3 overflow-hidden">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...badges, ...badges].map((badge, i) => (
          <span key={i} className="inline-flex items-center mx-8 text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BadgeTicker;

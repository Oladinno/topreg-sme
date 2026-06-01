export default function AuthorityBanner() {
  return (
    <section className="bg-surface-container py-32 px-margin-edge">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <h2 className="font-display-lg text-display-lg max-w-2xl">
          Nigeria&apos;s Leading{" "}
          <span className="text-secondary">Authority</span> in SME Structuring.
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="font-label-caps text-label-caps">
              CERTIFIED PARTNERS
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              gavel
            </span>
            <span className="font-label-caps text-label-caps">
              LEGAL COMPLIANCE GUARANTEED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

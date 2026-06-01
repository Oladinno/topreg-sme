"use client";

import Image from "next/image";
import InteractiveCanvas from "@/components/InteractiveCanvas";

export default function ContactInfo() {
  return (
    <div className="space-y-12">
      {/* Wrapped Image in InteractiveCanvas */}
      <InteractiveCanvas
        magneticStrength={0.08}
        warpStrength={8}
        scaleOnHover={1.03}
        cursorText="VISION"
        className="relative aspect-[4/5] overflow-hidden bg-surface-container-highest"
      >
        <Image
          alt="Founder vision at TopReg SME"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 cursor-none"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbmbx2UMRR0d6kq5Kn5xOCIlmlmef0BPDLtLYjNEUf98h0c0FehaOOa6DIMq5ocHiiZgn91zC-SG-fCdw5AtlpeGFhw2EbNFdf1rr1GKU0Y3oyoKxqOOifhdfo4pkWRvvmZdWtlVScF_DGGFPZSlRkvKV70hcR0YP07pqFddyjiZMW7226vorlliuiZJlD5F3Pef3GXwu10ZfYhOFPOc7uYm7iFFNrsIZg8FVGUVXRTvsipmTJyJ9CtD5s-zjY3Abs_vocS_RuDLjO"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-8 pointer-events-none">
          <p className="font-label-caps text-label-caps text-off-white opacity-80 mb-2">
            FOUNDER&apos;S VISION
          </p>
          <p className="font-body-lg text-body-lg text-off-white font-medium italic">
            &ldquo;Every great empire began as a small business with a solid
            foundation.&rdquo;
          </p>
        </div>
      </InteractiveCanvas>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-4 select-none cursor-none" data-cursor-text="LAGOS">
          <h4 className="font-label-caps text-label-caps text-primary border-b border-primary/10 pb-2">
            HEADQUARTERS
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            42 Innovation Drive,
            <br />
            Victoria Island,
            <br />
            Lagos, Nigeria
          </p>
        </div>
        <div className="space-y-4 select-none cursor-none" data-cursor-text="MAIL">
          <h4 className="font-label-caps text-label-caps text-primary border-b border-primary/10 pb-2">
            CONNECT
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            hello@topregsme.com.ng
            <br />
            +234 800 123 4567
            <br />
            @topreg_sme
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 border border-primary/10 p-4 select-none cursor-none" data-cursor-text="MAP">
        <div className="w-12 h-12 bg-primary flex items-center justify-center text-off-white">
          <span className="material-symbols-outlined">location_on</span>
        </div>
        <div>
          <p className="font-label-caps text-label-caps text-primary">
            MAP DATA
          </p>
          <p className="font-body-md text-body-md text-cool-gray">
            Lagos Creative District
          </p>
        </div>
      </div>
    </div>
  );
}

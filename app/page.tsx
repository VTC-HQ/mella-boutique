import Image from "next/image";
import ProductGallery from "@/components/ProductGallery";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      {/* Header - Sticky */}
      <div className="sticky top-0 z-50 bg-base-100 flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 py-8 border-b border-[#ccc]">
        <p className="flex-grow-0 flex-shrink-0 text-[22px] font-bold text-center text-black">
          MELLA BOUTIQUE
        </p>
      </div>

      {/* Hero Section */}
      <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-[70px] border-y border-[#ccc]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <Image
            src="/images/products/hero_image.png"
            alt="Mella Sigil"
            width={557}
            height={557}
            className="flex-grow-0 flex-shrink-0 w-[557px] h-[557px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[516px] relative gap-5 pb-16">
          <p className="text-product-title">
            THE MELLA SIGIL
          </p>
          <p>
            More than an accessory, The Mella Sigil is your key to a world unseen. Forged from German
            surgical steel and inlaid with pure obsidian, its true value lies in the unique bearer's
            mark it carries—a silent, permanent promise of trust, discretion, and belonging.
          </p>
        </div>
      </div>

      {/* Product Gallery Section (New Component) */}
      <ProductGallery />

      {/* Footer */}
      <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-2 py-8">
        <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[1200px] p-8">
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-black">INFORMATION</p>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">Contact</p>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">FAQ</p>
          </div>
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-black">ABOUT</p>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">About Mella</p>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">
              Private Shopping
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">Gift Cards</p>
          </div>
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-black">POLICY</p>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">
              Shipping &amp; Returns
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">
              Terms &amp; Privacy
            </p>
          </div>
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-black">NEWSLETTER</p>
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-light text-left text-black">
              Shipping &amp; Returns
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-light text-left text-black">
              Terms &amp; Privacy
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 py-8">
          <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">
            © 2025 - MELLA BOUTIQUE
          </p>
        </div>
      </div>
    </div>
  );
}
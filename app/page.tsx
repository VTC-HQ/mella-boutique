import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <main className="container mx-auto px-4">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              
              <h1 className="text-5xl font-bold">Your Key, Forged.</h1>
              <p className="py-6">A symbol of your place. A testament to your journey.</p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <h2 className="text-4xl font-bold text-center">The Anatomy of a Key</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
            <div className="max-w-lg">
              <p className="text-lg">
                Some objects are merely possessions. Others are extensions of our identity.
              </p>
              <p className="text-lg mt-4">
                The Mella Club Cufflink is not an accessory; it is an artifact. Forged from a single block of German surgical steel and inlaid with a disc of pure, hand-polished obsidian, it is crafted for permanence. Its weight is a reminder of the gravity of trust. Its form, a study in elegant discretion.
              </p>
              <p className="text-lg mt-4">
                It is more than an object of beauty. It is a quiet declaration. A key to a world unseen, and a symbol of the commitment to the values that guard it.
              </p>
            </div>
            <Image
              src="https://picsum.photos/id/1011/500/500"
              alt="Cufflink macro shot"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="py-20 bg-base-200">
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold">The Bearer's Mark</h2>
              <p className="text-lg mt-4">
                Each cufflink is completed with a unique bearer's mark, engraved with absolute precision. This mark—a combination of the chapter's sigil and the bearer's number—is a permanent record of one's place within the collective.
              </p>
              <p className="text-lg mt-4">
                It is a signature known only to the few, and a silent promise of mutual respect and unwavering discretion.
              </p>
            </div>
            <Image
              src="https://picsum.photos/id/1012/500/500"
              alt="Cufflink engraving detail"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

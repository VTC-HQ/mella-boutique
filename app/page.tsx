"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [animationEnabled, setAnimationEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showForm) {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showForm]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    // Here you would typically handle the response, e.g., show a success message or handle errors.
  };

      return (

        <div className="bg-red-500 bg-base-100 text-base-content font-sans">

          <div className="flex justify-between items-end self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-[70px] bg-white">

            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[516px] relative gap-5 pb-16">

              <h1 className="h1 self-stretch flex-grow-0 flex-shrink-0 w-[516px] text-left">

                THE MELLA SIGIL

              </h1>

              <p className="p-xl-2 self-stretch flex-grow-0 flex-shrink-0 w-[516px]">

                More than an accessory, The Mella Sigil is your key to a world unseen. Forged from German

                surgical steel and inlaid with pure obsidian, its true value lies in the unique bearer's mark

                it carries—a silent, permanent promise of trust, discretion, and belonging.

              </p>

            </div>

            <Image

              src="/images/cuff02.webp"

              alt="Mella Sigil Cufflinks"

              width={684}

              height={684}

              className="flex-grow-0 flex-shrink-0 object-cover"

            />

          </div>

          <main className="container bg-base-200 text-secondary-content mx-auto px-4">

            <div ref={formRef} className={`card shrink-0 w-full max-w-lg shadow-2xl bg-base-200 mx-auto my-20

              transition-all duration-1000 ease-out transform overflow-hidden

              ${showForm ? 'opacity-100 translate-y-0 max-h-screen' : 'opacity-0 translate-y-4 max-h-0 pointer-events-none'}`}

            >

              <form className="card-body" onSubmit={handleSubmit}>

                                <h2 className="h2 text-center mb-4">Complete Your Purchase</h2>

                <label className="input input-bordered flex items-center gap-2 w-full">

                  Name

                  <input type="text" className="grow" placeholder="Your Name" required />

                </label>

                <label className="input input-bordered flex items-center gap-2 w-full">

                  Email

                  <input type="email" className="grow" placeholder="email@example.com" required />

                </label>

                <label className="input input-bordered flex items-center gap-2 w-full">

                  Contact Number

                  <input type="tel" className="grow" placeholder="(123) 456-7890" required />

                </label>

    

                <div className="divider">Shipping Address</div>

    

                <label className="input input-bordered flex items-center gap-2 w-full">

                  Shipping City

                  <select className="select grow" required defaultValue="Select your city">

                    <optgroup label="Asia">

                      <option>Hong Kong</option>

                      <option>Shanghai</option>

                      <option>Shenzhen</option>

                      <option>Taipei</option>

                    </optgroup>

                    <optgroup label="North America">

                      <option>San Francisco</option>

                    </optgroup>

                  </select>

                </label>

                <label className="input input-bordered flex items-center gap-2 w-full">

                  Street Address

                  <input type="text" className="grow" placeholder="123 Main St" required />

                </label>

                <label className="input input-bordered flex items-center gap-2 w-full">

                  Zip / Postal Code

                  <input type="text" className="grow" placeholder="12345" required />

                </label>

    

                <div className="divider">Card Information</div>

    

                <label className="input input-bordered flex items-center gap-2 w-full">

                  Card Holder's Name

                  <input type="text" className="grow" placeholder="Card Holder's Name" required />

                </label>

                <label className="input input-bordered flex items-center gap-2 w-full">

                  Card Number

                  <input type="text" className="grow" placeholder="XXXX-XXXX-XXXX-XXXX" required />

                  <span className="text-sm">VISA</span>

                  <span className="text-sm">MC</span>

                  <span className="text-sm">AMEX</span>

                </label>

                <div className="flex gap-2 w-full">

                  <label className="input input-bordered flex items-center gap-2 w-1/2">

                    Expiration Date

                    <input type="text" className="grow" placeholder="MM/YY" required />

                  </label>

                  <label className="input input-bordered flex items-center gap-2 w-1/2">

                    CVC

                    <input type="text" className="grow" placeholder="XXX" required />

                  </label>

                </div>

                <div className="form-control mt-6 w-full">

                  <div className="flex items-center gap-4">

                    <button type="button" className="btn btn-link text-red-700" onClick={() => { setAnimationEnabled(true); setShowForm(false); }}>Cancel</button>

                    <button type="submit" className={`btn btn-primary ${isSubmitting ? 'btn-disabled' : ''}`}>

                      {isSubmitting && <span className="loading loading-spinner"></span>}

                      {isSubmitting ? 'Processing...' : 'Finalize Purchase'}

                    </button>

                  </div>

                </div>

                <p className="text-xs text-center mt-4">

                  By confirming your payment, you allow Notion Labs, Inc. to charge you for this payment and future payments in accordance with their terms.

                </p>

              </form>

            </div>

    

                        <div className="py-20">

    

                                        <h2 className="h2 text-center">The Anatomy of a Key</h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">

                <div className="max-w-lg">

                  <p className="p-base">

                    Some objects are merely possessions. Others are extensions of our identity.

                  </p>

                  <p className="p-base mt-4">

                    The Mella Club Cufflink is not an accessory; it is an artifact. Forged from a single block of German surgical steel and inlaid with a disc of pure, hand-polished obsidian, it is crafted for permanence. Its weight is a reminder of the gravity of trust. Its form, a study in elegant discretion.

                  </p>

                  <p className="p-base mt-4">

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

    

            <div className="py-20">

              <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10">

                <div className="max-w-lg">

                  <h2 className="h2">The Bearer's Mark</h2>

                  <p className="p-base mt-4">

                    Each cufflink is completed with a unique bearer's mark, engraved with absolute precision. This mark—a combination of the chapter's sigil and the bearer's number—is a permanent record of one's place within the collective.

                  </p>

                  <p className="p-base mt-4">

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
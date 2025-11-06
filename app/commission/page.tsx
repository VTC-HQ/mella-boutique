"use client";

import { useState } from 'react';

export default function CommissionPage() {
  const [showForm, setShowForm] = useState(false);
  const [animationEnabled, setAnimationEnabled] = useState(false);

  return (
    <div className="bg-black text-white font-sans">
      <main className="container mx-auto px-4">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold">Your Journey Awaits.</h1>
              <p className={`py-6 ${animationEnabled ? 'transition-all duration-1000 ease-out transform' : ''} ${showForm ? 'opacity-0 translate-y-4 max-h-0 pointer-events-none' : 'opacity-100 translate-y-0 max-h-screen'}`}>
                Your nomination has been accepted, and your place within the collective is waiting. The final step is to acquire the key that will formally mark your entry.
              </p>
              <p className={`py-6 ${animationEnabled ? 'transition-all duration-1000 ease-out transform' : ''} ${showForm ? 'opacity-0 translate-y-4 max-h-0 pointer-events-none' : 'opacity-100 translate-y-0 max-h-screen'}`}>
                By completing your commission, you are not merely purchasing an object; you are making a tangible commitment to the ethos of Club Mella and formally accepting your role as a Keyholder.
              </p>
              <button
                className={`btn btn-primary btn-lg mt-8 ${showForm ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => { setAnimationEnabled(false); setShowForm(true); }}
                disabled={showForm}
              >
                Acquire Your Key
              </button>
              <div className={`card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-8
                transition-all duration-1000 ease-out transform overflow-hidden
                ${showForm ? 'opacity-100 translate-y-0 max-h-screen' : 'opacity-0 translate-y-4 max-h-0 pointer-events-none'}`}
              >
                <form className="card-body">
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
                  <label className="input input-bordered flex items-center gap-2 w-full">
                    Invitation Key
                    <input type="text" className="grow" placeholder="Your Invitation Key" required />
                  </label>

                  <div className="divider">Shipping Address</div>

                  <label className="input input-bordered flex items-center gap-2 w-full">
                    Shipping City
                    <select className="select grow" required>
                      <option disabled selected>Select your city</option>
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
                      <button className="btn btn-primary">Finalize Commission</button>
                    </div>
                  </div>
                  <p className="text-xs text-center mt-4">
                    By confirming your payment, you allow Notion Labs, Inc. to charge you for this payment and future payments in accordance with their terms.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import CheckoutDrawer from './CheckoutDrawer';

const productImages = [
    '/images/products/Pimage 1.jpg',
    '/images/products/Pimage 2.png',
    '/images/products/Pimage 3.webp',
    '/images/products/Pimage 4.webp',
    '/images/products/Pimage 5.webp',
];

export default function ProductGallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Scroll to specific image smoothly
    const scrollToImage = (index: number) => {
        imageRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };

    // Track which image is in view using Intersection Observer
    useEffect(() => {
        const observers = imageRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(index);
                    }
                },
                {
                    threshold: 0.5,
                    rootMargin: '-40% 0px -40% 0px',
                }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, []);

    return (
        <div className="w-full bg-base-100">
            <div className="flex gap-[60px] w-full max-w-[1440px] mx-auto px-8 py-[60px] min-h-screen">

                {/* Left Column: Fixed Thumbnails */}
                <div className="hidden lg:flex flex-col gap-4 sticky top-[140px] h-fit">
                    {productImages.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToImage(index)}
                            className={`border ${activeIndex === index ? 'border-[#ccc]' : 'border-transparent'} transition-all`}
                        >
                            <Image
                                src={img}
                                alt={`Product view ${index + 1}`}
                                width={240}
                                height={300}
                                className="w-[120px] h-[150px] object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* Center Column: Scrollable Images */}
                <div className="flex flex-col gap-[100px] flex-1">
                    {productImages.map((img, index) => (
                        <div
                            key={index}
                            ref={(el) => { imageRefs.current[index] = el; }}
                            className="scroll-mt-[140px]"
                        >
                            <Image
                                src={img}
                                alt={`Product detail ${index + 1}`}
                                width={1440}
                                height={1800}
                                className="w-full max-w-[720px] h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Right Column: Fixed Details & Buy */}
                <div className="flex flex-col gap-8 w-full lg:w-[448px] sticky top-[140px] h-fit">
                    <div>
                        <h1 className="text-product-title mb-8">THE MELLA SIGIL</h1>

                        <div className="prose text-product-body space-y-4 mb-8">
                            <p>
                                Some objects are merely possessions. Others are extensions of our identity.
                            </p>
                            <p>
                                The Mella Club Cufflink is not an accessory; it is an artifact. Forged from a single block of German surgical
                                steel and inlaid with a disc of pure, hand-polished obsidian, it is crafted for permanence. Its weight is a
                                reminder of the gravity of trust. Its form, a study in elegant discretion.
                            </p>
                            <p>
                                It is more than an object of beauty. It is a quiet declaration. A key to a world unseen, and a symbol of
                                the commitment to the values that guard it.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => setIsCheckoutOpen(true)}
                            className="w-full bg-black text-white py-4 btn-primary-text hover:bg-gray-800 transition-colors"
                        >
                            BUY NOW
                        </button>
                        <p className="text-product-caption text-center">
                            Free worldwide shipping. 30-day returns.
                        </p>
                    </div>
                </div>

                {/* Mobile Thumbnails (Visible only on small screens) */}
                <div className="flex lg:hidden gap-2 overflow-x-auto pb-4 w-full">
                    {productImages.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToImage(index)}
                            className={`flex-shrink-0 border-2 ${activeIndex === index ? 'border-black' : 'border-transparent'}`}
                        >
                            <Image
                                src={img}
                                alt={`Product view ${index + 1}`}
                                width={160}
                                height={200}
                                className="w-[80px] h-[100px] object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
            <CheckoutDrawer isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
        </div>
    );
}

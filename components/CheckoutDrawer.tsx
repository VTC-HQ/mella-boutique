'use client';

import { useState, useEffect, useRef } from 'react';
// @ts-ignore
import { init, createElement } from '@airwallex/components-sdk';

interface CheckoutDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CheckoutDrawer({ isOpen, onClose }: CheckoutDrawerProps) {
    const [clientSecret, setClientSecret] = useState('');
    const [intentId, setIntentId] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        postcode: '',
        country: 'HK',
    });

    const cardElementRef = useRef<any>(null);
    const mountedRef = useRef(false);
    const [isAirwallexReady, setIsAirwallexReady] = useState(false);
    const initRef = useRef(false);

    useEffect(() => {
        if (initRef.current) return;
        initRef.current = true;

        console.log('Initializing Airwallex (prod)...');
        init({
            env: 'prod',
            authCode: '',
        }).then(() => {
            console.log('Airwallex initialized successfully');
            setIsAirwallexReady(true);
        }).catch((err: any) => {
            console.error('Failed to initialize Airwallex:', err);
        });
    }, []);

    const handleCreateIntent = async () => {
        setIsProcessing(true);
        try {
            console.log('Creating payment intent...');
            const res = await fetch('/api/payment/intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 1200.00,
                    currency: 'USD',
                    descriptor: 'Mella Sigil',
                    metadata: {
                        customer_name: shippingInfo.name,
                        customer_email: shippingInfo.email,
                    }
                }),
            });
            const data = await res.json();
            console.log('Payment intent created:', data);
            if (data.client_secret) {
                setClientSecret(data.client_secret);
                setIntentId(data.intent_id);
            } else {
                console.error('No client_secret in response:', data);
            }
        } catch (error) {
            console.error('Failed to create intent:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    // Trigger intent creation when drawer opens if not already created
    useEffect(() => {
        if (isOpen && !clientSecret && !isProcessing) {
            handleCreateIntent();
        }
    }, [isOpen]);
    // Mount Card Element when Airwallex is ready
    useEffect(() => {
        let element: any = null;
        let mounted = false;

        const mountElement = async () => {
            if (!isOpen || !isAirwallexReady) return;

            try {
                // Wait a tick to ensure DOM is ready
                await new Promise(resolve => setTimeout(resolve, 100));

                const container = document.getElementById('airwallex-card-container');
                if (!container) {
                    console.error('Container #airwallex-card-container not found');
                    return;
                }

                if (mountedRef.current) {
                    console.log('Already mounted, skipping');
                    return;
                }

                console.log('Creating card element...');
                element = await createElement('card');
                console.log('Card element created:', element);

                if (container && !mounted) {
                    console.log('Mounting element to container...');
                    element.mount('airwallex-card-container');
                    cardElementRef.current = element;
                    mountedRef.current = true;
                    console.log('Element mounted successfully');
                }
            } catch (err) {
                console.error('Failed to create/mount card element:', err);
            }
        };

        mountElement();

        return () => {
            mounted = true;
            if (cardElementRef.current) {
                console.log('Unmounting/Destroying element...');
                try {
                    if (typeof cardElementRef.current.destroy === 'function') {
                        cardElementRef.current.destroy();
                    } else if (typeof cardElementRef.current.unmount === 'function') {
                        cardElementRef.current.unmount();
                    }
                } catch (e) {
                    console.error('Error destroying element:', e);
                }
                cardElementRef.current = null;
                mountedRef.current = false;
            }
        };
    }, [isOpen, isAirwallexReady]);

    const handlePayment = async () => {
        if (!cardElementRef.current || !intentId || !clientSecret) {
            setErrorMessage('Payment not ready. Please wait...');
            return;
        }

        // Basic validation
        if (!shippingInfo.name || !shippingInfo.email || !shippingInfo.address || !shippingInfo.city || !shippingInfo.postcode || !shippingInfo.country) {
            setErrorMessage('Please fill in all required shipping fields.');
            return;
        }

        setIsProcessing(true);
        setErrorMessage('');

        try {
            const nameParts = shippingInfo.name.trim().split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : firstName;

            const response = await cardElementRef.current.confirm({
                id: intentId,
                client_secret: clientSecret,
                payment_method: {
                    card: {
                        billing: {
                            first_name: firstName,
                            last_name: lastName,
                            email: shippingInfo.email,
                            address: {
                                street: shippingInfo.address,
                                city: shippingInfo.city,
                                state: shippingInfo.state,
                                postcode: shippingInfo.postcode,
                                country_code: shippingInfo.country,
                            }
                        }
                    }
                }
            });

            console.log('Payment response:', response);
            window.location.href = '/success';

        } catch (error: any) {
            console.error('Payment failed', error);
            setErrorMessage(error.message || 'Payment failed. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

            {/* Drawer */}
            <div
                className="relative w-full max-w-md bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col"
                style={{ backgroundColor: '#ffffff' }}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold mb-6 text-black">Checkout</h2>

                {/* Shipping Info Form */}
                <div className="mb-8 space-y-4">
                    <h3 className="text-lg font-semibold text-black">Shipping Information</h3>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 border border-gray-300 rounded text-black"
                        value={shippingInfo.name}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 border border-gray-300 rounded text-black"
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="w-full p-3 border border-gray-300 rounded text-black"
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    />
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full p-3 border border-gray-300 rounded text-black"
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="State / Province"
                            className="w-full p-3 border border-gray-300 rounded text-black"
                            value={shippingInfo.state}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Postcode / Zip"
                            className="w-full p-3 border border-gray-300 rounded text-black"
                            value={shippingInfo.postcode}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, postcode: e.target.value })}
                        />
                        <select
                            className="w-full p-3 border border-gray-300 rounded text-black bg-white"
                            value={shippingInfo.country}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                        >
                            <option value="HK">Hong Kong</option>
                            <option value="US">United States</option>
                            <option value="GB">United Kingdom</option>
                            <option value="AU">Australia</option>
                            <option value="CA">Canada</option>
                            <option value="SG">Singapore</option>
                            <option value="JP">Japan</option>
                            <option value="CN">China</option>
                            <option value="TW">Taiwan</option>
                        </select>
                    </div>
                </div>

                {/* Payment Section */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-4 text-black">Payment</h3>

                    <div className="border p-4 rounded bg-gray-50 text-black">
                        <p className="mb-2 text-sm text-gray-600">Secure Payment via Airwallex</p>

                        {/* Container for Airwallex Card Element */}
                        <div className="relative min-h-[100px]">
                            {!mountedRef.current && (
                                <p className="text-gray-400 text-xs absolute top-2 left-2 z-10">
                                    Loading Payment Form...
                                </p>
                            )}

                            {/* Container for Airwallex Card Element - MUST BE EMPTY for React/SDK safety */}
                            <div
                                id="airwallex-card-container"
                                className="min-h-[100px] rounded bg-white p-2 relative z-0"
                                style={{ minHeight: '150px', display: 'block' }}
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                        )}

                        <button
                            className="w-full mt-4 bg-black text-white py-3 font-bold hover:bg-gray-800 transition-colors disabled:opacity-50"
                            onClick={handlePayment}
                            disabled={isProcessing || !clientSecret}
                        >
                            {isProcessing ? 'Processing...' : 'PAY $1,200.00'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

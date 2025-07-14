import { useState } from 'react';

export default function MainContent({ isLoggedIn, user }) {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="flex-1 p-6">
            {/* Internal Menu */}
            <div className="mb-6 flex gap-4 border-b pb-2">
                <button
                    onClick={() => setActiveTab('home')}
                    className={`px-4 py-2 ${activeTab === 'home' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-500'}`}
                >
                    Home
                </button>
                {isLoggedIn && (
                    <>
                        <button
                            onClick={() => setActiveTab('myRides')}
                            className={`px-4 py-2 ${activeTab === 'myRides' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-500'}`}
                        >
                            My Rides
                        </button>
                        <button
                            onClick={() => setActiveTab('plan')}
                            className={`px-4 py-2 ${activeTab === 'plan' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-500'}`}
                        >
                            Plan a Ride
                        </button>
                    </>
                )}
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === 'home' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">{isLoggedIn ? `Welcome back, ${user.name}!` : 'Welcome to MoRiders'}</h2>
                        <p className="text-gray-700">
                            {isLoggedIn
                                ? 'Check out your upcoming rides and notifications below.'
                                : 'Create a profile to connect with fellow riders and plan your next journey.'}
                        </p>
                    </div>
                )}

                {activeTab === 'myRides' && <p>Your personal ride history will go here.</p>}
                {activeTab === 'plan' && <p>Ride planning form goes here.</p>}
            </div>
        </div>
    );
}

export default function Landing() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="text-center px-6 py-24 bg-gradient-to-b from-gray-900 to-gray-700 text-white">
                <h1 className="text-5xl font-extrabold mb-4">Ride. Share. Connect.</h1>
                <p className="text-xl mb-8 max-w-xl mx-auto">
                    Join the ultimate community for motorcycle enthusiasts. Share your adventures, plan group rides, and connect with like-minded riders.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold">
                        Get Started
                    </button>
                    <button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md text-lg font-semibold">
                        Browse Rides
                    </button>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    <div>
                        <div className="text-5xl mb-4">🧑‍💻</div>
                        <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                        <p>Showcase your bike, your story, and your favorite routes.</p>
                    </div>
                    <div>
                        <div className="text-5xl mb-4">🛣️</div>
                        <h3 className="text-xl font-semibold mb-2">Plan or Join Rides</h3>
                        <p>Organize solo or group rides and find riders near you.</p>
                    </div>
                    <div>
                        <div className="text-5xl mb-4">🤝</div>
                        <h3 className="text-xl font-semibold mb-2">Ride Together</h3>
                        <p>Connect with fellow enthusiasts and build your crew.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-10 text-sm text-gray-500">
                © 2025 MoRiders. All rights reserved.
            </footer>
        </div>
    );
}

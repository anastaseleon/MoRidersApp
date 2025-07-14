import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-blue-700 tracking-tight">
                MoRiders
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 items-center">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
                    Home
                </Link>
                <Link to="/rides" className="text-gray-700 hover:text-blue-600 transition">
                    Browse Rides
                </Link>
                <Link to="/login">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    );
}

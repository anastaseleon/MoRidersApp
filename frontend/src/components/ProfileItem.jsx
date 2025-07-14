import { Link } from 'react-router-dom';

export default function ProfileItem({ isLoggedIn, user }) {
    return (
        <div className="w-full md:w-64 p-6 bg-gray-100 border-r">
            {isLoggedIn ? (
                <div className="text-center">
                    <img
                        src={user.profilePic || 'https://via.placeholder.com/100'}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-gray-600">{user.location || 'Location unknown'}</p>
                    <Link to="/profile" className="text-blue-600 hover:underline mt-2 block">
                        View Profile
                    </Link>
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-gray-700 mb-4">Welcome, rider!</p>
                    <Link to="/login">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Login
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

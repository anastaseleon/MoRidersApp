import Navbar from '../components/Navbar';
import ProfileItem from '../components/ProfileItem';
import MainContent from '../components/MainContent';

export default function Landing() {
    const isLoggedIn = true;
    const user = {
        name: 'Didier',
        profilePic: 'https://via.placeholder.com/100',
        location: 'Montreal, QC',
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar stays on top */}
            <Navbar />

            {/* Profile + Main content side by side */}
            <div className="flex flex-1">
                <ProfileItem isLoggedIn={isLoggedIn} user={user} />
                <MainContent isLoggedIn={isLoggedIn} user={user} />
            </div>
            <div className="bg-red-500 text-white p-4 rounded">
                If this box is red, Tailwind is working!
            </div>

        </div>
    );

}

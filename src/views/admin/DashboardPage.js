import Link from "next/link";

export const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">Welcome to Your Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Active Raffles */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Active Raffles</h2>
            <p className="text-gray-600 mb-4">Here are the active raffles you are participating in:</p>
            <ul className="space-y-2">
                <li className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center">
                <span>Raffle Title #1</span>
                <Link href="./raffles/1" className="text-blue-500 hover:text-blue-700">View Details</Link>
                </li>
                <li className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center">
                <span>Raffle Title #2</span>
                <Link href="./raffles/1" className="text-blue-500 hover:text-blue-700">View Details</Link>
                </li>
                {/* Add more raffles here */}
            </ul>
            <Link href="./raffles" className="mt-4 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200">
                View All Active Raffles
            </Link>
            </div>

            {/* Create Raffle */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Create New Raffle</h2>
            <p className="text-gray-600 mb-4">Start a new raffle for your followers:</p>
            <Link href="./raffles/create" className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition duration-200">
                Create Raffle
            </Link>
            </div>

            {/* Manage Subscriptions */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Manage Subscriptions</h2>
            <p className="text-gray-600 mb-4">Here you can manage your raffle subscriptions:</p>
            <ul className="space-y-2">
                <li className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center">
                <span>Subscription to Raffle Title #1</span>
                </li>
                <li className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center">
                <span>Subscription to Raffle Title #2</span>
                </li>
                {/* Add more subscriptions here */}
            </ul>
            <button className="mt-4 w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition duration-200">
                Manage All Subscriptions
            </button>
            </div>
        </div>
        </div>
    </div>
  )
}

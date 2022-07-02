import { faInfo, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";

export default function Sidenav() {
    const { data: session, status } = useSession();

    return (
        <nav className="col-span-1 row-span-3 bg-gray-700 pt-6 min-h-screen">
            <div className="px-6 mb-6 h-10">

            </div>
            <div className="px-2 mb-6">
                <div
                    className="bg-gray-200 flex font-medium items-center px-4 py-2 rounded text-sm text-white"
                >
                    <FontAwesomeIcon icon={faInfo} className="h-10 w-6 mr-3 text-xl" />
                    <span>About</span>
                </div>
                <div
                    className="flex font-medium items-center px-4 py-2 rounded text-sm text-gray-100 hover:text-white"
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="h-10 mr-4 text-xl" />
                    Search Song Details
                </div>
            </div>
            <div>
                <h3
                    className="text-xs text-gray-100 uppercase px-6 tracking-widest font-light mb-4"
                >
                    Playlists
                </h3>
                <div className="mb-3">
                    <div
                        className="px-6 py-1 flex items-center text-sm text-white opacity-50 hover:opacity-100"
                    >
                        <svg
                            className="bg-liked-songs fill-current h-8 mr-4 p-2 w-8"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
                            />
                        </svg>
                        Liked Songs
                    </div>
                </div>
            </div>
        </nav>
    )
}
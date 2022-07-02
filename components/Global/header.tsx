import { signIn, signOut, useSession } from "next-auth/react"

export default function Header() {
	const { data: session, status } = useSession();

	console.log(session);
	console.log(status);

	return (
		<header
			className="px-6 py-4 mb-6 bg-gray-600 flex items-center justify-between sticky top-0 z-10"
		>
			<div className="flex items-center">
				<button
					className="h-8 w-8 bg-gray-500 rounded-full text-white flex mr-4 opacity-50 cursor-not-allowed"
				>
					<svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
						></path>
					</svg>
				</button>
				<button className="h-8 w-8 bg-gray-500 rounded-full text-white flex">
					<svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
						></path>
					</svg>
				</button>
			</div>
			<div>
				{status == "authenticated" ? (
					<button
						onClick={() => { signOut() }}
						className="text-sm text-white bg-gray-500 rounded-full p-px pr-3"
					>
						<img
							src={session.user?.image ?? '/default-profile.jpg'}
							className="w-8 h-8 inline-block rounded-full mr-2"
						/>
						{session.user?.name}
					</button>
				) : (
					<button
						onClick={() => { signIn("spotify") }}
						className="text-xs text-white bg-gray-500 rounded-full p-px pr-3"
					>
						<img
							src="/default-profile.jpg"
							className="w-7 h-7 inline-block rounded-full mr-2"
						/>
						Log In
					</button>
				)}
			</div>
		</header>
	)
}
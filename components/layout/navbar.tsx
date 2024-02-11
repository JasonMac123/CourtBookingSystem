import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { Logo } from "./logo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <div className="flex flex-row w-full justify-between items-center bg-neutral-300 py-4 px-8">
        <Logo />
        <div className="text-3xl text-center">Book a court today!</div>
        <div className="mr-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

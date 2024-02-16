import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { Logo } from "./logo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full shadow-sm flex items-center">
      <div className="flex flex-row w-full justify-between items-center bg-slate-700 py-4 px-8">
        <Logo />
        <div className="hidden lg:block text-3xl text-center text-white mr-20">
          Book a court today!
        </div>
        <div className="mr-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center justify-center px-4 py-2 bg-white rounded-lg">
              <SignInButton />
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

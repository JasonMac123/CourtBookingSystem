import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { Logo } from "./logo";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-neutral-300 py-4 px-8">
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
  );
};

export default Navbar;

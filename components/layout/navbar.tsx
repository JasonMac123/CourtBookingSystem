import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { Logo } from "./logo";

const Navbar = () => {
  return (
    <div>
      <Logo />
      <div>Book a court today!</div>
      <div>
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

import {SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs';

const Header = () => {
  return (
    <nav>
      <div >
        <h2>Expense Tracker</h2>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Header;
import { Major_Mono_Display } from "next/font/google";
import Link from "next/link";
import Container from "../Container";

const majorMonoDisplay = Major_Mono_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-pink-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <Link href="/" className={majorMonoDisplay.className}>
              Chrissy Ottenhof E-Shop
            </Link>
            <div className="hidden md:block">SearchBar</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

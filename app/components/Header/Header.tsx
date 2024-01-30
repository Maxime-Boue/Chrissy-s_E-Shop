import Link from "next/link";
import Container from "../Container";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-30">
      <div className="py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <div className="flex items-center gap-3 md:gap-8 text-white font-bold ">
              <Link href="/" className="transition delay-150 hover:rotate-180">
                La boutique
              </Link>
              <Link href="/" className="animate-bounce">
                Qui suis-je ?
              </Link>
              <Link
                href="/"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
              >
                Contactez moi
              </Link>
            </div>
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

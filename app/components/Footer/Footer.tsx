import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-8 pb-4">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Catégories</h3>
            <Link href="#">Illustration</Link>
            <Link href="#">Boucles d&apos;oreilles</Link>
            <Link href="#">Linogravure</Link>
            <Link href="#">Textile</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Suivez-moi</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={30} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={30} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

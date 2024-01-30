import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="bg-greenC text-white text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Catégories</h3>
            <Link href="#">Illustration</Link>
            <Link href="#">Boucles d&apos;oreilles</Link>
            <Link href="#">Linogravure</Link>
            <Link href="#">Textile</Link>
            <Link href="#">Touti quento</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Service client</h3>
            <Link href="#">Contactez-moi</Link>
            <Link href="#">Livraison</Link>
            <Link href="#">Retours & Echanges</Link>
            <Link href="#">Mentions Légales</Link>
            <Link href="#">Paiement sécurisé</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Chrissy Ottenhof</h3>
            <p className="text-justify">
              Chrissy Arty est une artiste solaire, à la fois illustratrice et
              graphiste, passionnée par la fusion de la peinture traditionnelle
              et l&apos;art numérique. Sa créativité illumine ses œuvres
              d&apos;une énergie éclatante et d&apos;une palette vibrante. Elle
              est intimement convaincue que les couleurs sont la clé du
              bien-être et de l&apos;harmonie...
            </p>
          </div>
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

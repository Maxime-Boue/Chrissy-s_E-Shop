import Container from "./components/Container";
import ShopBanner from "./components/ShopBanner";

export default function Home() {
  return (
    <main className="py-4">
      <Container>
        <div>
          <ShopBanner />
        </div>
      </Container>
    </main>
  );
}

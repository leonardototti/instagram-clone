import Aside from "@/components/Aside";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="container">
      <div className="main-grid">
        <main>
          <Stories />
        </main>
        <Aside />
      </div>
    </div>
  );
}

import Aside from "@/components/Aside";
import Posts from "@/components/Posts";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="container">
      <div className="main-grid">
        <main>
          <Stories />
          <Posts />
        </main>
        <Aside />
      </div>
    </div>
  );
}

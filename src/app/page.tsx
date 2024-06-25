import Header from "@/components/Header";
import Stories from "@/components/Stories";
import Aside from "@/components/Aside";
import Posts from "@/components/Posts";
import Tabs from "@/components/MobileTabs";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main-grid">
          <main>
            <Stories />
            <Posts />
          </main>
          <Aside />
        </div>
      </div>
      <Tabs />
    </>
  );
}

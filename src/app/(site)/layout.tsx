import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

// Inner pages share the site nav, footer and smooth scroll. The home page brings its own.
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav />
      <Motion />
      {children}
      <Footer />
    </>
  );
}

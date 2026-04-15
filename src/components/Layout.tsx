import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
    <Header />
    <main className="flex-1 pt-[72px]">{children}</main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Layout;

import "../styles/globals.css";
import { Figtree } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import MountedClient from "./components/MountedClient";
import RegisterModal from "./components/modals/RegisterModal";

const newFont = Figtree({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={newFont.className}>
        <MountedClient>
          {/* <Modal
            isOpen
            onSubmit={() => {}}
            onClose={() => {}}
            btnLabel="Register"
            title="Register"
          /> */}
          <RegisterModal />
          <Navbar />
        </MountedClient>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

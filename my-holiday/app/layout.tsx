import "../styles/globals.css";
import { Figtree } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import MountedClient from "./components/MountedClient";
import RegisterModal from "./components/modals/RegisterModal";
import ReduxProvider from "./providers/ReduxProvider";
import LoginModal from "./components/modals/LoginModal";

const newFont = Figtree({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={newFont.className}>
        <ReduxProvider>
          <MountedClient>
            {/* <Modal
            isOpen
            onSubmit={() => {}}
            onClose={() => {}}
            btnLabel="Register"
            title="Register"
          /> */}
            <LoginModal />
            <RegisterModal />
            <Navbar />
          </MountedClient>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;

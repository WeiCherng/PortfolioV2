import React, { ReactNode, FC } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface ContProps {
  children: ReactNode;
}

const Cont: FC<ContProps> = ({ children }) => {
  return (
    <main className="max-w-screen-sm mx-auto h-screen flex flex-col justify-between">
      <section>
        <Navbar />
        {children}
      </section>

      <Footer />
    </main>
  );
};

export default Cont;

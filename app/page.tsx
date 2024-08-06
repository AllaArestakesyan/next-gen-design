import { Metadata } from "next";
import { Home } from "./components/Home";

export default function HomePage() {
  return ( <div className="home">
    <Home />
  </div>
  );
}

export const metadata: Metadata = {
  title: "Next Gen Design",
};

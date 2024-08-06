import { Metadata } from "next";
import { About } from "../components/About";

export default function AboutPage() {
    return (<div className="about">
        <About />
    </div>
    );
}

export const metadata: Metadata = {
    title: "Next Gen About",
};

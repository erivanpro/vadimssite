import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContent from "./homecontent";
import MesProjets from "./components/mesprojets/MesProjets";
import ContactComponent from "./components/contact/contact";
function Home() {
    return (
        <HomeContent />
    );
}
function Contact() {
    return(
        <ContactComponent />
    );
}
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mesprojets" element={<MesProjets />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

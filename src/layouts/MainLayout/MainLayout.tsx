import { Header, Footer } from "@components/common";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="container mt-5 pt-5">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
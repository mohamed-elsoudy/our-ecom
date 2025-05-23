import Header from "../../components/common/header/Header";

export default function MainLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="container mt-5 pt-5">
                <h1 className="my-4">Welcome to Our Ecom</h1>
                <p>This is a sample e-commerce application.</p>
            </div>
        </div>
    );
}
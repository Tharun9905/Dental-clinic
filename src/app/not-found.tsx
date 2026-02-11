import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Container className="text-center">
                <h1 className="text-9xl font-bold text-primary-200">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link href="/">
                    <Button size="lg">Back to Home</Button>
                </Link>
            </Container>
        </div>
    );
}

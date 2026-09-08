import Button from "@/components/shared/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
        <div className="mt-6">
            <Button href="/" variant="primary" size="md">
                Go Back Home
            </Button>
        </div>
    </div>
  );
}

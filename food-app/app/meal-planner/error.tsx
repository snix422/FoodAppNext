"use client"

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-red-500">Wystąpił błąd!</h1>
      <p className="text-lg mt-4">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
};

export default ErrorComponent;
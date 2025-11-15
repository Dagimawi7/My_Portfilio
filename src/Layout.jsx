export default function Layout({ children }) {
    return (
      <div className="font-sans bg-white text-gray-900">
        <div className="pt-20"> {/* spacing for fixed navbar */}
          {children}
        </div>
      </div>
    );
  }
  
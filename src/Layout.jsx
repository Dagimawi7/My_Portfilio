// Layout component wraps content and applies consistent styling
export default function Layout({ children }) {
  return (
    // Main container with font, background, text color, full height, and flex layout
    <div className="font-sans bg-black text-gray-200 min-h-screen flex flex-col">

      {/* Main content area */}
      {/* flex-none ensures it takes only as much space as needed */}
      <main className="flex-none">
        {children} {/* Render whatever content is passed inside Layout */}
      </main>

      {/* Footer could go here if needed */}
      {/* <Footer /> */}
    </div>
  );
}

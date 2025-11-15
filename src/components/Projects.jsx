export default function Projects() {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
  
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl shadow bg-white">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="text-gray-700 mt-2">Description of your first project…</p>
            </div>
  
            <div className="p-6 rounded-xl shadow bg-white">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="text-gray-700 mt-2">Description of your second project…</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
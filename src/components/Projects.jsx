function ProjectCard({ project }) {
  return (
    <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition flex flex-col min-h-0">
      {/* Media preview */}
      {project.media && (
        <div className="mb-4">
          {project.media.endsWith(".mp4") ? (
            <video
              src={project.media}
              controls
              className="w-full h-48 object-cover rounded"
              type="video/mp4"
            />
          ) : (
            <img
              src={project.media}
              alt={project.title}
              className="w-full h-48 object-cover rounded"
              loading="lazy"
            />
          )}
        </div>
      )}

      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="text-gray-700 mt-3 grow">{project.description}</p>

      {project.techStack && (
        <p className="text-sm text-gray-500 mt-2">{project.techStack.join(", ")}</p>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
        >
          View Project
        </a>
      )}
    </div>
  );
}

import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';

export function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? getCourseById(courseId) : undefined;

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-[var(--color-text-secondary)]">
          <li>
            <Link to="/" className="hover:text-[var(--color-accent)] transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/courses" className="hover:text-[var(--color-accent)] transition-colors">
              Courses
            </Link>
          </li>
          <li>/</li>
          <li className="text-[var(--color-text-primary)]">{course.title}</li>
        </ol>
      </nav>

      {/* Course Header */}
      <div className="mb-12">
        <div className="h-64 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {course.title}
          </h1>
        </div>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          {course.description}
        </p>
      </div>

      {/* Presentations List */}
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
          Presentations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {course.presentations.map((presentation) => (
            <Link
              key={presentation.id}
              to={`/course/${courseId}/presentation/${presentation.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {presentation.title}
                </h3>
                <span className="text-[var(--color-accent)] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)] mb-4">
                {presentation.description}
              </p>
              {presentation.duration && (
                <div className="flex items-center text-sm text-[var(--color-text-secondary)]">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {presentation.duration}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


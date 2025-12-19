import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

export function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
            Welcome to My Learning Platform
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-8">
            Explore comprehensive courses on finance, trading, and investment strategies.
            Learn from detailed presentations and practical examples.
          </p>
          <Link
            to="/courses"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-secondary)] transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-secondary)] flex items-center justify-center">
                <div className="text-white text-4xl font-bold">
                  {course.title.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[var(--color-accent)] mb-2">
                  {course.category}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {course.presentations.length} Presentation{course.presentations.length !== 1 ? 's' : ''}
                  </span>
                  <span className="text-[var(--color-accent)] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}


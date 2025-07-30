import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaDatabase, FaAws, FaCode } from 'react-icons/fa';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to manage state and side effects in functional components. This comprehensive guide covers useState, useEffect, and custom hooks.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      category: "React",
      date: "March 15, 2024",
      readTime: "8 min read",
      author: "Deekshith",
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Discover best practices for building RESTful APIs using Node.js and Express. Learn about authentication, validation, error handling, and deployment strategies.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      category: "Backend",
      date: "March 10, 2024",
      readTime: "12 min read",
      author: "Deekshith",
      tags: ["Node.js", "Express", "API"]
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS",
      excerpt: "A deep dive into Tailwind CSS utility-first approach. Learn how to build beautiful, responsive designs efficiently with this powerful CSS framework.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      category: "CSS",
      date: "March 5, 2024",
      readTime: "10 min read",
      author: "Deekshith",
      tags: ["CSS", "Tailwind", "Frontend"]
    },
    {
      id: 4,
      title: "State Management with Redux Toolkit",
      excerpt: "Simplify your Redux setup with Redux Toolkit. Learn how to write cleaner, more maintainable Redux code with less boilerplate.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      category: "State Management",
      date: "February 28, 2024",
      readTime: "15 min read",
      author: "Deekshith",
      tags: ["Redux", "React", "State Management"]
    },
    {
      id: 5,
      title: "Deploying React Apps to AWS",
      excerpt: "Step-by-step guide to deploying your React applications to AWS using S3, CloudFront, and Route 53 for optimal performance and scalability.",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=400&q=80",
      category: "DevOps",
      date: "February 20, 2024",
      readTime: "20 min read",
      author: "Deekshith",
      tags: ["AWS", "Deployment", "DevOps"]
    },
    {
      id: 6,
      title: "TypeScript Best Practices",
      excerpt: "Essential TypeScript patterns and practices for building robust applications. Learn about interfaces, generics, and type safety.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      category: "TypeScript",
      date: "February 15, 2024",
      readTime: "18 min read",
      author: "Deekshith",
      tags: ["TypeScript", "JavaScript", "Development"]
    }
  ];

  const categories = ["All", "React", "Backend", "CSS", "State Management", "DevOps", "TypeScript"];

  return (
    <section id="blogs" className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight drop-shadow-lg">Blog & Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Sharing knowledge and insights about web development, programming, and technology trends.
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-lg p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Featured
                </span>
                <h3 className="text-3xl font-bold mb-4">
                  The Future of Web Development in 2024
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Explore the latest trends, technologies, and best practices that are shaping the future 
                  of web development. From AI integration to performance optimization, discover what's next.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-blue-200">March 20, 2024</span>
                  <span className="text-blue-200">•</span>
                  <span className="text-blue-200">15 min read</span>
                </div>
                <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Read Full Article
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/20 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-xl font-semibold mb-2">Trending Now</h4>
                  <p className="text-blue-100">Latest insights and predictions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden hover:scale-105 hover:shadow-blue-200 transition-all duration-300 border border-white/20 group">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {post.category === 'React' && <FaReact className="text-blue-500 text-xl" />}
                  {post.category === 'Backend' && <FaNodeJs className="text-green-600 text-xl" />}
                  {post.category === 'CSS' && <FaCss3Alt className="text-blue-500 text-xl" />}
                  {post.category === 'DevOps' && <FaAws className="text-yellow-500 text-xl" />}
                  {post.category === 'TypeScript' && <FaCode className="text-indigo-500 text-xl" />}
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 text-base">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gradient-to-r from-blue-200 to-purple-200 text-gray-700 px-2 py-1 rounded text-xs font-semibold shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <button className="text-primary font-medium hover:text-blue-600 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Stay Updated with My Latest Articles
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about web development, programming tips, and industry insights. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 hover:bg-blue-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to collaborate on a technical article or guest post?
          </p>
          <a 
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 font-semibold"
          >
            Let's Write Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs; 
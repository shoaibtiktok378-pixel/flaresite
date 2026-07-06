import  { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)

  // Environment variables
  const apiUrl = import.meta.env.VITE_API_URL
  const apiTimeout = parseInt(import.meta.env.VITE_API_TIMEOUT) 
  const environment = import.meta.env.VITE_ENVIRONMENT

  // Create axios instance with config
  const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: apiTimeout,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        // Fetch posts and users in parallel
        const [postsResponse, usersResponse] = await Promise.all([
          axiosInstance.get('/posts'),
          axiosInstance.get('/users')
        ])

        setPosts(postsResponse.data.slice(0, 10)) // First 10 posts
        setUsers(usersResponse.data)
        setError(null)
      } catch (err) {
        if (err.code === 'ECONNABORTED') {
          setError('Request timed out. Please try again.')
        } else {
          setError(err.message || 'Failed to fetch data')
        }
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Handle post click
  const handlePostClick = async (postId) => {
    try {
      const response = await axiosInstance.get(`/posts/${postId}`)
      setSelectedPost(response.data)
    } catch (err) {
      console.error('Error fetching post details:', err)
    }
  }

  // Handle retry
  const handleRetry = () => {
    window.location.reload()
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading data...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={handleRetry}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  // Find user by ID
  const getUserName = (userId) => {
    const user = users.find(u => u.id === userId)
    return user ? user.name : 'Unknown User'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">📝 Blog Posts</h1>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {environment}
              </span>
              <span className="text-sm text-gray-500">
                API: {apiUrl}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Posts List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 className="font-semibold text-gray-800">Recent Posts</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => handlePostClick(post.id)}
                    className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 mb-1">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>By: {getUserName(post.userId)}</span>
                      <span>•</span>
                      <span>Post #{post.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Selected Post Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 className="font-semibold text-gray-800">📄 Post Details</h2>
              </div>
              <div className="p-6">
                {selectedPost ? (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {selectedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedPost.body}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        Post ID: {selectedPost.id} • User ID: {selectedPost.userId}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <p className="text-4xl mb-2">👆</p>
                    <p className="text-sm">Click on a post to view details</p>
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Statistics</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Posts</span>
                  <span className="font-medium text-gray-900">{posts.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Users</span>
                  <span className="font-medium text-gray-900">{users.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Environment</span>
                  <span className="font-medium text-gray-900 capitalize">
                    {environment}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Timeout</span>
                  <span className="font-medium text-gray-900">{apiTimeout}ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
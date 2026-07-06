const App = () => {
  // Vite uses import.meta.env instead of process.env
  const apiUrl = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com'
  const apiTimeout = import.meta.env.VITE_API_TIMEOUT || '5000'
  const environment = import.meta.env.VITE_ENVIRONMENT || 'development'

  return (
    <div>
      <h1>App</h1>
      <p>Environment: {environment}</p>
      <p>API URL: {apiUrl}</p>
      <p>API Timeout: {apiTimeout}ms</p>
    </div>
  )
}

export default App

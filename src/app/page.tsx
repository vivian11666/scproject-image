export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            AI Image & Video Generator
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Transform your ideas into stunning visuals with the power of AI. 
            Generate images from text descriptions or convert images into videos.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Generate Images
            </button>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Create Videos
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Text to Image</h3>
            <p className="text-gray-600">
              Transform your text descriptions into beautiful, high-quality images using advanced AI models.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Image to Video</h3>
            <p className="text-gray-600">
              Convert your static images into dynamic videos with smooth animations and effects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Fast & Reliable</h3>
            <p className="text-gray-600">
              Get your results quickly with our optimized AI pipeline and cloud infrastructure.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

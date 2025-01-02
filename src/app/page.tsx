import Image from 'next/image';
import Link from 'next/link';

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 mt-0">
      {/* Hero Image */}
      <Image
        src="/home.png"
        alt="Homepage banner"
        width={1200}
        height={300}
        className="w-full max-w-6xl h-auto rounded-lg shadow-lg"
      />
      
      {/* Title */}
      <h1
        id="blogsList"
        className="hover:text-black text-3xl md:text-5xl font-bold mt-8 font-sans text-sky-400 text-center transition-colors duration-300"
      >
        My Blogs
      </h1>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
        
        {/* Blog Card */}
        <Link
          href="/posts/1"
          className="bg-white border-2 border-sky-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
        >
          <Image
            src="/walking.jpg"
            alt="Benefits of Walking"
            width={500}
            height={250}
            className="w-full h-[200px] lg:h-[250px] object-cover"
          />
          <div className="p-4 lg:p-6 flex flex-col h-full">
            <h2 className="text-lg lg:text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
              Benefits Of Walking Every Day
            </h2>
            <p className="mt-2 text-sm lg:text-base text-gray-600 flex-grow">
              Walking is a great way to improve or maintain your overall health. Just 30 minutes every day can increase cardiovascular fitness strengthen bones reduce excess body fat and boost muscle power and endurance.
            </p>
          </div>
        </Link>

        {/* Blog Card */}
        <Link
          href="/posts/2"
          className="bg-white border-2 border-sky-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
        >
          <Image
            src="/coffea3.jpg"
            alt="Coffee Recipes"
            width={500}
            height={250}
            className="w-full h-[200px] lg:h-[250px] object-cover"
          />
          <div className="p-4 lg:p-6 flex flex-col h-full">
            <h2 className="text-lg lg:text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
              Irresistible Coffee Recipes
            </h2>
            <p className="mt-2 text-sm lg:text-base text-gray-600 flex-grow">
              This collection of coffee recipes is perfect for coffee lovers looking for something special. From the sweet caramel brûlée to the indulgent bicerin.
            </p>
          </div>
        </Link>

        {/* Blog Card */}
        <Link
          href="/posts/3"
          className="bg-white border-2 border-sky-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
        >
          <Image
            src="/agenticai1.webp"
            alt="Agentic AI"
            width={500}
            height={250}
            className="w-full h-[200px] lg:h-[250px] object-cover"
          />
          <div className="p-4 lg:p-6 flex flex-col h-full">
            <h2 className="text-lg lg:text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
              Understanding Agentic AI
            </h2>
            <p className="mt-2 text-sm lg:text-base text-gray-600 flex-grow">
              Agentic AI represents the next step in autonomous systems enabling decision making without constant human supervision.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

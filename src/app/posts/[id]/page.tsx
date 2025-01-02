"use client"
import Image from 'next/image';
import { FaCoffee } from 'react-icons/fa'; 
import { useState } from 'react';



interface Params {
  params: {
    id: string;
  };
}

interface Comment {
  name: string;
  text: string;
}

interface BlogSection {
  id: string;
  heading: string;
  image: string;
  content: string;
}

interface Recipe {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

interface BlogPost {
  id: string;
  title: string;
  image: string;
  description: string;
  detailedDescription: string; 
  sections: BlogSection[];
  recipes?: Recipe[]; 
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Benefits of Daily Walking',
    image: '/walking1.png',
    description:
      'Walking daily can improve cardiovascular health, boost mood, and enhance longevity.',
    detailedDescription:
      'Walking is a low-impact exercise that offers numerous benefits. By walking regularly, you improve your heart health, boost circulation, and reduce the risk of chronic diseases like diabetes and hypertension. Walking outdoors also provides mental clarity and exposure to sunlight, enhancing overall well-being.',
    sections: [
      {
        id: '1',
        heading: 'Walking Improves Cardiovascular Health',
        image: '/walking2.png',
        content:
          'The American Heart Association (AHA) recommends 150 minutes (2.5 hours) a week of moderate-intensity aerobic (cardio) activity. Moderate-intensity exercise includes any physical activity that gets your heart, lungs and all your large muscle groups working harder. Walking meets all those criteria.',
      },
      {
        id: '2',
        heading: 'Walking Boosts Mood and Mental Clarity',
        image: '/walking3.png',
        content:
          'Walking reduces your risk for health factors related to cognitive function, including heart disease, stroke and depression. As a result, it also reduces mental decline. The National Institute on Aging reports brisk walking is considered more beneficial to cognitive health than non-aerobic stretching and strength training.',
      },
      {
        id: '3',
        heading: 'Strengthening Muscles and Bones with Walking',
        image: '/walking4.png',
        content:
          'Walking can slow or stop the loss of bone density (mass), especially in people with osteoporosis. According to the Arthritis Foundation, research shows that postmenopausal women who walk 30 minutes a day may reduce their risk of hip fractures by 40 percent.',
      },
      {
        id: '4',
        heading: 'Walking and Weight Loss Benefits',
        image: '/walking5.webp',
        content:
          'Walking uses all the large muscle groups in your body, including your legs, abdominal muscles and arms. Since it engages so many large muscles, walking burns calories and can help you trim fat. According to the American Cancer Society’s exercise activity calculator, walking briskly burns almost 300 calories per hour for someone weighing 150 pounds.',
      },
    ],
  },
  {
    id: '3',
    title: 'Understanding Agentic AI: The Future of Autonomous Systems',
    image: '/agenticai.webp',
    description:
      'Agentic AI represents the next step in autonomous systems, enabling decision-making without constant human supervision.',
    detailedDescription: `
      <p>
        Agentic AI represents a significant leap forward in the development of artificial intelligence, emphasizing autonomy and decision-making capabilities. Unlike traditional AI systems, which often require human intervention, Agentic AI can make independent decisions and perform tasks without constant supervision.
      </p>
      <p>
        At its core, Agentic AI is designed to act with a level of agency similar to human decision-making processes. This involves a deep understanding of context, goals, and ethical considerations, which enables it to navigate complex scenarios and make judgments based on the information available.
      </p>
      <h3 class="text-2xl font-semibold mt-6 text-purple-800">Key Features of Agentic AI:</h3>
      <ul class="list-disc  ml-6 mt-4 space-y-2">
        <li><strong class="text-pink-800">Autonomous Decision-Making:</strong> Capable of making real-time decisions, adjusting strategies, and optimizing processes without external input.</li>
        <li><strong class="text-pink-800">Contextual Awareness:</strong> Understanding the environment and objectives allows Agentic AI to adapt to new challenges and opportunities.</li>
        <li><strong class="text-pink-800">Ethical Framework:</strong> A built-in ethical decision-making model helps ensure that the actions taken by Agentic AI align with societal values and legal standards.</li>
      </ul>
      <h3 class="text-2xl font-semibold mt-6 text-purple-800">Applications Across Industries:</h3>
      <ul class="list-disc ml-6 mt-4 space-y-2">
        <li><strong class="text-pink-800">Healthcare:</strong> From diagnosing medical conditions to managing patient care, Agentic AI can enhance decision-making processes and improve efficiency.</li>
        <li><strong class="text-pink-800">Finance:</strong> By autonomously analyzing trends and making investment decisions, it can optimize portfolios and reduce risks.</li>
        <li><strong class="text-pink-800">Customer Service:</strong> AI-powered agents can handle complex queries, deliver personalized responses, and improve overall customer satisfaction.</li>
      </ul>
      <p class="mt-6">
        As we continue to push the boundaries of AI technology, Agentic AI presents both exciting opportunities and significant challenges. Ensuring transparency, fairness, and accountability in its decision-making will be critical to its widespread adoption.
      </p>
    `,
    sections: [],
  },
  {
    id: '2',
    title: 'Warm Up This Winter: Irresistible Coffee Recipes',
    image: '/coffee.jpeg',
    description:
      'Discover delightful coffee recipes to keep you cozy and warm during the winter season.',
    detailedDescription:
      'This collection of coffee recipes is perfect for coffee lovers looking for something special. From the sweet caramel brûlée to the indulgent bicerin, there’s something for everyone.',
    sections: [],
    recipes: [
      {
        id: '1',
        title: 'Caramel Brûlée Coffee Recipe',
        image: '/coffea1.jpg',
        ingredients: [
          '2 teaspoons of coffee',
          '1 cup milk',
          '¼ cup caramel sauce',
          '1 teaspoon brown sugar',
          'Whipped cream',
        ],
        instructions: [
          'Brew two cups of coffee using your preferred method. Regular-strength coffee works best.',
          'In a small saucepan, combine the milk, caramel sauce, and brown sugar. Stir together, then heat on medium for 4-5 minutes, stirring often to prevent burning the brown sugar.',
          'Divide the brewed coffee between two mugs and pour an equal amount of the milk mixture into each mug.',
          'Top with whipped cream and drizzle with extra caramel sauce for a touch of sweetness.',
        ],
      },
      {
        id: '2',
        title: 'Bicerin Delight Coffee Recipe',
        image: '/coffea2.jpg',
        ingredients: [
          '½ teaspoon of coffee',
          '½ cup hot chocolate',
          'Chocolate shavings',
        ],
        instructions: [
          'Prepare ½ cup of your favorite coffee using the brewing method you love most.',
          'Whip up a cup of rich hot chocolate and fill ⅓ of your mug with this velvety goodness.',
          'In a small bowl, lightly whip the heavy cream until it reaches a slightly thickened consistency just enough to pour, but not too firm.',
          'Pour the coffee carefully over the back of a spoon so it gracefully layers on top of the hot chocolate.',
          'Next, pour the cream gently over the spoon to let it float delicately atop the coffee.',
          'Finish with a sprinkle of chocolate shavings, take a sip, and savor every indulgent layer.',
        ],
      },
      {
        id: '3',
        title: 'Eggnog Latte Recipe',
        image: '/coffea3.jpg',
        ingredients: [
          '1 teaspoon of coffee',
          '⅔ cup eggnog',
          '¼ cup cream or half & half',
          '⅛ teaspoon of ground cinnamon',
          'Pinch of ground nutmeg',
          'Sugar (optional)',
          'Whipped cream',
          'Nutmeg',
        ],
        instructions: [
          'Warm the eggnog gently in a small pot over low to medium heat. Avoid bringing it to a rolling boil let it simmer softly. Stir in the cinnamon, nutmeg, and sugar for an extra touch of sweetness. Keep whisking for about 3 minutes, or until the mixture thickens beautifully.',
          'Brew a robust cup of coffee—the stronger, the better, to balance the rich sweetness of the eggnog.',
          'Combine the thickened eggnog with the freshly brewed coffee, blending them into a creamy, flavorful harmony.',
          'Top it off with a dollop of whipped cream and a light sprinkle of nutmeg for a festive finishing touch.',
        ],
      },
    ],
  },
];

const   BlogPostPage =  ({ params }: Params) => {
  const { id } = params;
  const blogPost = blogPosts.find((post) => post.id === id);

  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");

  // Handle adding comments when the button is clicked
  const addComment = () => {
    if (name && text) {
      setComments([...comments, { name, text }]);
      setName(""); 
      setText(""); 
    }
  };

  if (!blogPost) {
    return (
      <div className="text-center text-xl font-semibold text-gray-700">
        Post not found.
      </div>
    );
  }

  return (
    <div className="py-12 min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full mb-6">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            layout="responsive"
            width={1024}
            height={400}
            className="rounded-t-lg object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">
            Article by Alia Yousuf
          </h3>
          <h1 className="text-3xl font-bold text-green-700">
            {blogPost.title}
          </h1>
          <p className="text-gray-600 mt-4">{blogPost.description}</p>
          <div
            className="text-gray-600 mt-4"
            dangerouslySetInnerHTML={{
              __html: blogPost.detailedDescription,
            }}
          />
        </div>
        {blogPost.sections.map((section) => (
          <div key={section.id} className="my-6 p-6">
            <div className="relative w-full mb-4">
              <Image
                src={section.image}
                alt={section.heading}
                layout="responsive"
                width={1024}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-purple-800">
              {section.heading}:
            </h2>
            <p className="text-gray-600 mt-2">{section.content}</p>
          </div>
        ))}
        {blogPost.recipes && blogPost.recipes.length > 0 && (
          <div className="p-6 bg-gray-200 rounded-lg mt-8">
          
             {blogPost.recipes.map((recipe) => (
               <div key={recipe.id} className="mb-8">
                 <h3 className="text-xl font-semibold text-amber-800">{recipe.title}</h3>
                 <Image
                   src={recipe.image}
                   alt={recipe.title}
                   width={1024}
                   height={400}
                  className="rounded-lg my-4"
                />
                  <h4 className="text-lg font-semibold text-amber-800">Ingredients:</h4>
                   <ul className="ml-5 mb-4">
                  {recipe.ingredients.map((ingredient, index) => (
                   <li key={index} className="flex items-center mb-2">
                  <FaCoffee className="text-amber-800 mr-2" /> 
                     {ingredient}
                      </li>
                       ))}
                      </ul>
                 <h4 className="text-lg font-semibold text-amber-800">Instructions:</h4>
                 <ol className="list-decimal ml-5">
                   {recipe.instructions.map((step, index) => (
                     <li key={index} className="mb-2">{step}</li>
                   ))}
                 </ol>
               </div>
             ))}
           </div>
         )}

         {/* comment */}
         <div className="mt-6 max-w-2xl mx-auto px-4">
  <h2 className="text-3xl font-semibold text-blue-500 mb-6">Comments</h2>
  <div className="space-y-4">
    {/* Name and Comment Input */}
    <input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full p-3  border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
    />
    <textarea
      placeholder="Your Comment"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
    />
    <button
      onClick={addComment}
      className="w-full md:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    >
      Post Comment
    </button>
  </div>

  {/* Render comments */}
  {comments.length > 0 ? (
    <ul className="space-y-6 mt-6">
      {comments.map((comment, index) => (
        <li
          key={index}
          className="p-4 bg-gray-100 border-l-4  rounded-lg shadow-md hover:bg-gray-50 transition"
        >
          <p className="font-bold text-lg text-blue-600">{comment.name}</p>
          <p className="text-gray-700 mt-2">{comment.text}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-500 mt-6">No comments yet. Be the first to comment!</p>
  )}
</div>

      </div>
      </div>

  );
};

export default BlogPostPage;



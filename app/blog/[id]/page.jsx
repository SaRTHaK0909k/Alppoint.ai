import Image from "next/image";
import Link from "next/link";

// Function to truncate text
function truncateText(text, maxWords) {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
}

export default async function Home({ params }) {
  const id = params.id;
  
  // Fetching the main post
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`);
  const post = await res.json();
  const mainPost = post.message;

  // Fetching related posts
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
  const allPosts = await response.json();
  const posts = allPosts.filter(p => p._id !== mainPost._id).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="px-5 py-10">
        {mainPost && (
          <div className="bg-black p-5 rounded-lg mb-10">
            <Image
              src={mainPost.image}
              alt={mainPost.title} // Add meaningful alt text
              width={1200}
              height={500}
              className="w-full h-96 object-cover rounded-md mb-4"
            />
            <div className="md:p-12 ml-4 mr-4 md:ml-28 md:mr-28">
              <span className="block text-xl text-orange-500 mb-8">
                Technology | {mainPost.date}
              </span>
              <h1 className="text-4xl font-bold mb-4">
                {mainPost.title}
              </h1>
              <p className="mb-4">
                {mainPost.content} {/* Replace with the actual content */}
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Non diam bibendum risus
                  egestas adipiscing.
                </li>
                <li>Metus quis sed semper in eu pulvinar sapien habitant.</li>
                <li>In curabitur nulla amet bibendum.</li>
              </ul>
              <div className="bg-orange-500 text-black p-4 rounded mb-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eget nunc feugiat morbi
                  nunc. Trincidunt et feugiat sed aliquam in phasellus sed.
                  Curabitur id luctus neque dolor aliquet et et. Odio vitae nibh
                  tristique magna interdum quam. Non leo mi adipiscing congue
                  scelerisque elit. Suspendisse lacinia phasellus lacus aenean.
                </p>
              </div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur. Elit sagittis pulvinar
                ullamcorper sit arcu tincidunt curabitur in. Maecenas egestas ac
                sed eget sit cursus maecenas elit velit. Diam fermentum sodales
                sed sociis tortor ac at.
              </p>
              <ol className="list-decimal pl-5 mb-4">
                <li>
                  It brings the right people together with the right information
                  and tools to get work done
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Non diam bibendum risus
                  egestas adipiscing.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Non diam bibendum risus
                  egestas adipiscing.er
                </li>
              </ol>
            </div>
          </div>
        )}
        <div className="flex justify-between p-4">
          <div>
            <h2 className="text-3xl font-bold mb-4">Related News</h2>
          </div>
          <div>
            <Link href="/blog">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts && posts.map((post, index) => (
            <div key={index} className="bg-black p-5 rounded-lg">
              <Image
                src={post.image}
                alt={post.title} // Add meaningful alt text
                width={400} // Set the width as needed
                height={300} // Set the height as needed
                className="w-full h-58 object-cover rounded-md mb-4"
              />
              <div className="space-y-2">
                <span className="block text-sm text-orange-500">
                  Technology | {post.date}
                </span>
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="text-gray-400">{truncateText(post.description, 20)}</p>
                <Link href={`/blog/${post._id}`}>
                  <span className="text-orange-500 hover:underline">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  );
}

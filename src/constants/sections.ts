import { Project } from "./projects";

export interface MarketplaceItem extends Project {
  price: string;
  amazonUrl: string;
}

export interface NewsItem extends Project {
  date: string;
  source: string;
}

export interface BlogPost extends Project {
  author: string;
  readTime: string;
}

export const MARKETPLACE_ITEMS: MarketplaceItem[] = [
  {
    title: "Oneplus Bullets Z2",
    description:
      "Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life, IP55 Dust and Water Resistant (Magico Black)",
    price: "₹1,299",
    amazonUrl: "https://amzn.to/4g03j4g",
    githubUrl: "", // Optional for marketplace items
    url: "https://amzn.to/4g03j4g",
  },
  {
    title: "Shoe Bag for Travel - 6 Pack",
    description:
      "Boldfit Shoe Bag for Travel & Storage Travel Organizer for Women & Men Travel Accessories Shoe Organizer Shoe Bags Pouches Travel Shoe Cover for Travelling Travel Essentials",
    price: "₹199",
    amazonUrl: "https://amzn.to/4jzCzuy",
    githubUrl: "",
    url: "https://amzn.to/4jzCzuy",
  },
  {
    title: "Storage Duffle Bag",
    description:
      "Kuber Industries Storage Duffle Bag | Parachute Travel Storage Bag | Storage Organizer for Clothes | Storage Carrying Bag with Handle | Zipper Closure Storage Bag for Clothes | Pack of 2 | Black",
    price: "₹1,199",
    amazonUrl: "https://amzn.to/3PFxTpf",
    githubUrl: "",
    url: "https://amzn.to/3PFxTpf",
  },
  {
    title: "Anti Slip Yoga Mat",
    description:
      "Boldfit Ethylene Vinyl Acetate Yoga Mats For Women Yoga Mat For Men Exercise Mat For Home Workout Gym Mat Anti Slip Yoga Mat 4Mm Workout Mat Yoga Mat For Kids Yoga Mate Gym Mats - Green",
    price: "₹249",
    amazonUrl: "https://amzn.to/40ng0QQ",
    githubUrl: "",
    url: "https://amzn.to/40ng0QQ",
  },
  {
    title: "Safari Suitcase for Travel",
    description:
      "Safari Thorium Neo 8 Wheels 66 Cm Medium Check-in Trolley Bag Hard Case Polycarbonate 360 Degree Wheeling System Luggage, Trolley Bags for Travel, Suitcase for Travel, Graphite Blue",
    price: "₹2,899",
    amazonUrl: "https://amzn.to/3WppKJf",
    githubUrl: "",
    url: "https://amzn.to/3WppKJf",
  },
  {
    title: "Worldwide Travel Adapter",
    description:
      "rts Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports with Multi Type Power Outlet USB 2.1A,100-250 Voltage Travel Charger (Black)",
    price: "₹588",
    amazonUrl: "https://amzn.to/40ovIev",
    githubUrl: "",
    url: "https://amzn.to/40ovIev",
  },
  {
    title: "Multi Plug for Office & Home",
    description:
      "Portronics Power Plate 10 Extension Board with 4 Universal Sockets, 3 Meter Long Cord, 1500 Watts, 6 Amp Multi Plug for Office & Home Appliances (Black)",
    price: "₹309",
    amazonUrl: "https://amzn.to/40HiFpK",
    githubUrl: "",
    url: "https://amzn.to/40HiFpK",
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    title: "Apple Disables AI News Summary Feature Due to Inaccuracies",
    description:
      "Apple temporarily suspends its AI-powered news summarization feature after repeated errors in headline reporting, including false claims about public figures",
    date: "2025-01-17",
    source: "BBC News",
    url: "https://www.bbc.com/news/articles/cq5ggew08eyo",
    githubUrl: "",
  },
  {
    title: "OpenAI Developing 'Super-Agents' for Complex Tasks",
    description:
      "OpenAI reportedly working on AI 'super-agents' capable of PhD-level tasks, with potential announcement coming soon, amid skepticism from some experts",
    date: "2025-01-20",
    source: "Axios",
    url: "https://techcrunch.com/2025/01/20/sources-ai-vision-startup-metropolis-is-buying-oosto-formerly-known-as-anyvision-for-just-125m/",
    githubUrl: "",
  },
  {
    title: "AI Vision Startup Metropolis Acquires Oosto for $125 Million",
    description:
      "Metropolis, an AI-powered parking platform, buys computer vision company Oosto (formerly AnyVision) for significantly less than its previous valuation",
    date: "2025-01-20",
    source: "TechCrunch",
    url: "https://techcrunch.com/2025/01/20/sources-ai-vision-startup-metropolis-is-buying-oosto-formerly-known-as-anyvision-for-just-125m/",
    githubUrl: "",
  },
  {
    title: "Microsoft Rebrands Office Suite to Emphasize AI",
    description:
      "Microsoft renames its productivity suite from 'Microsoft 365 Office' to 'Microsoft 365 Copilot,' highlighting the integration of AI-powered features",
    date: "2025-01-20",
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com/technology/tech-news/microsoft-rebrands-another-iconic-product-on-windows-11-as-it-pushes-for-ai/articleshow/117401796.cms",
    githubUrl: "",
  },
  {
    title: "AI-Generated Memes in Delhi Election Campaigns",
    description:
      "Political parties in Delhi using AI-generated memes for online campaigns, prompting the Election Commission to urge labeling of such content",
    date: "2025-01-20",
    source: "Hindustan Times",
    url: "https://www.hindustantimes.com/india-news/delhi-polls-ai-generate-meme-war-unfolds-as-parties-take-online-campaign-to-new-heights-101737374458884.html",
    githubUrl: "",
  },
  {
    title: "AI Boom Sparks Cloud Storage Expansion",
    description:
      "New study reveals AI adoption is driving a massive surge in cloud storage demand, according to survey by Recon Analytics",
    date: "2025-01-20",
    source: "Cloud Computing News",
    url: "https://www.cloudcomputing-news.net/news/ai-boom-sparks-next-wave-of-cloud-storage-expansion-says-new-study/",
    githubUrl: "",
  },
  {
    title: "Seven Technologies to Watch in 2025",
    description:
      "Nature's annual round-up of exciting innovations, including self-driving laboratories, advanced immunotherapies, and AI-driven biological research",
    date: "2025-01-20",
    source: "Nature",
    url: "https://www.nature.com/articles/d41586-025-00075-6",
    githubUrl: "",
  },
  {
    title: "CoLoop AI Raises $3.5 Million in Venture Funding",
    description:
      "AI market research platform CoLoop AI secures $3.5 million in pre-series A funding, with participation from Y-Combinator",
    date: "2025-01-20",
    source: "Research Live",
    url: "https://www.research-live.com/article/news/funding-for-coloop-ai/id/5134913",
    githubUrl: "",
  },
  {
    title: "AI Revolutionizing Healthcare Diagnostics and Disease Detection",
    description:
      "Healthcare industry rapidly integrating AI-powered solutions for improved diagnostics and early disease detection, driving market growth",
    date: "2025-01-16",
    source: "Globe Newswire",
    url: "https://www.globenewswire.com/news-release/2025/01/16/3010801/0/en/How-HealthCare-Industry-is-Leveraging-Artificial-Intelligence-to-Revolutionize-Diagnostics-and-Early-Disease-Detection.html",
    githubUrl: "",
  },
  {
    title:
      "Microsoft Adds AI Capability to Windows Search for Copilot Plus PCs",
    description:
      "Microsoft introduces AI-powered semantic indexing and on-device processing for enhanced file search on Copilot Plus PCs",
    date: "2025-01-20",
    source: "Analytics Insight",
    url: "https://www.analyticsinsight.net/artificial-intelligence/microsoft-revolutionizes-file-search-with-ai-powered-copilot-updates",
    githubUrl: "",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The Berkeley Artificial Intelligence Research",
    description:
      "This blog offers cutting-edge insights into AI research from UC Berkeley's renowned BAIR lab. It covers a wide range of topics including machine learning, computer vision, robotics, and natural language processing. Recent posts have explored innovative concepts like virtual personas for language models and their implications for user research and social sciences. The blog provides in-depth technical analyses, research findings, and discussions on the ethical considerations of AI advancements.",
    author: "BAIR Team",
    readTime: "5 min read",
    url: "https://bair.berkeley.edu/blog/",
    githubUrl: "",
  },
  {
    title: "Google AI Blog",
    description:
      "Google's AI blog is a comprehensive resource for the latest developments in artificial intelligence from one of the world's leading tech companies. It covers a broad spectrum of AI topics, from fundamental research to practical applications. Recent posts have highlighted breakthroughs like the Gemini 2.0 model and AI applications in healthcare. The blog also features separate sections tailored for researchers, IT leaders, business leaders, and developers, making it a valuable resource for various stakeholders in the AI ecosystem.",
    author: "Google AI Team",
    readTime: "5 min read",
    url: "https://ai.google/latest-news/",
    githubUrl: "",
  },
  {
    title: "OpenAI Blog",
    description:
      "OpenAI's blog is at the forefront of AI innovation, showcasing the company's groundbreaking research and product launches. It provides detailed insights into their latest models and technologies, such as GPT-4o and Sora. The blog covers a range of topics including product updates, research findings, safety and alignment considerations, and company news. It's an essential read for anyone looking to stay updated on the rapid advancements in AI, particularly in the fields of natural language processing and generative AI.",
    author: "OpenAI Team",
    readTime: "6 min read",
    url: "https://openai.com/blog",
    githubUrl: "",
  },
  {
    title: "NVIDIA Blog",
    description:
      "NVIDIA's blog is a treasure trove of information on AI and high-performance computing. It covers a wide array of topics including AI, data centers, autonomous vehicles, gaming, and professional graphics. The blog provides in-depth technical articles, case studies, and updates on NVIDIA's latest hardware and software innovations. It's particularly valuable for those interested in the intersection of AI and hardware acceleration, offering insights into how NVIDIA's technologies are powering advancements across various industries.",
    author: "NVIDIA Team",
    readTime: "7 min read",
    url: "https://blogs.nvidia.com",
    githubUrl: "",
  },
  {
    title: "Towards AI",
    description:
      "Towards AI is a community-driven platform that offers a diverse range of AI content from enthusiasts, researchers, and industry experts. The blog covers topics spanning machine learning, deep learning, natural language processing, and more. It features technical tutorials, industry news, research papers, and opinion pieces. Recent posts have explored topics like generative AI primers, small language models for business, and advanced AI techniques. The blog also offers newsletters and educational resources, making it an excellent platform for both beginners and advanced practitioners in AI.",
    author: "Towards AI Editorial Team",
    readTime: "8 min read",
    url: "https://pub.towardsai.net",
    githubUrl: "",
  },
  {
    title: "AWS Machine Learning Blog",
    description:
      "Amazon Web Services' Machine Learning blog is a comprehensive resource for developers, data scientists, and business leaders looking to leverage AI and machine learning on the AWS platform. It provides detailed technical guides, case studies, and best practices for implementing ML solutions at scale. Recent posts have covered topics such as integrating ServiceNow with Amazon Q Business, automotive AI solutions, and implementing Retrieval Augmented Generation (RAG) while meeting data residency requirements. The blog offers valuable insights into real-world applications of AI across various industries.",
    author: "AWS AI Team",
    readTime: "7 min read",
    url: "https://aws.amazon.com/blogs/machine-learning/",
    githubUrl: "",
  },
  {
    title: "Microsoft AI Blog",
    description:
      "Microsoft's AI blog showcases the company's latest innovations and their impact across various industries. It covers a wide range of AI topics, from research breakthroughs to practical applications in business and society. The blog highlights Microsoft's AI tools and services, as well as case studies of successful implementations. Recent posts have focused on AI training initiatives in India, demonstrating Microsoft's commitment to AI education and skill development. The blog provides valuable insights for businesses, developers, and individuals interested in leveraging Microsoft's AI technologies.",
    author: "Microsoft AI Team",
    readTime: "6 min read",
    url: "https://blogs.microsoft.com/ai/",
    githubUrl: "",
  },
];

export const SECTION_DESCRIPTIONS = {
  marketplace:
    "Discover the ultimate travel essentials at our one-stop shop for adventurers and globetrotters! Explore our curated collection of top-quality travel goods, from stylish travel bags to innovative accessories that make your journeys effortless. Stay ahead of the curve with our trending travel items, carefully selected to enhance your experiences on the road. Whether you're a weekend warrior or a long-term explorer, find everything you need to pack smart and travel in style.",
  websites:
    "Create your dream website or app with ease! Our expert team in India offers top-notch web and mobile app development services. From stunning designs to powerful functionality, we'll bring your vision to life. Get started on your digital journey today!",
  news: "Stay ahead of the curve with our cutting-edge coverage of artificial intelligence breakthroughs, semiconductor advancements, and supercomputer developments. Our news hub delivers the latest AI news, expert analysis, and in-depth reports on the technologies shaping our future. From groundbreaking research to industry innovations, we bring you timely, authoritative insights into the world of AI and high-performance computing.",
  blogs: `Discover cutting-edge insights on our comprehensive blog platform featuring the latest AI blogs, supercomputer advancements, and semiconductor innovations. Dive into a world of artificial intelligence exploration with expert-curated content that keeps you at the forefront of technological breakthroughs. From in-depth analyses to industry trends, our AI blogs offer unparalleled coverage of the rapidly evolving tech landscape. Stay informed, inspired, and ahead of the curve with our diverse collection of thought-provoking articles on AI, supercomputing, and semiconductor developments.`,
};

export const SECTION_DETAILED_DESCRIPTIONS = {
  marketplace: `Why Choose Us
Unmatched Quality: Our good quality travel items are built to last, ensuring your gear keeps up with your wanderlust.
Curated Selection: We handpick the best travel things online, saving you time and guaranteeing satisfaction.
Ultimate Travel Packs: Find perfectly bundled sets for any type of trip, from city breaks to wilderness adventures.
Featured Products
Innovative Travel Bags: From sleek carry-ons to spacious backpacks, find the perfect companion for your journey1.
Smart Travel Accessories: Discover gadgets and organizers that make packing and traveling a breeze5.
Trending Travel Gear: Stay ahead with the latest travel innovations and must-have items7.
Don't settle for ordinary travel gear. Elevate your adventures with our premium selection of travel essentials. Shop now and transform the way you travel!`,
  websites: `Why Choose Us
Professional Expertise: Our skilled developers in India craft high-quality websites and apps tailored to your needs3.
Affordable Solutions: Get a premium website or app without breaking the bank4.
Quick Turnaround: We deliver your project on time, helping you launch faster5.
Our Services
Custom Website Development: From simple landing pages to complex e-commerce platforms6
Mobile App Creation: Native and cross-platform apps for iOS and Android7
Web Application Development: Scalable and feature-rich web apps for your business8
Don't wait to establish your online presence. Let's make your website or app a reality today!`,
  news: `Why Choose Us
Comprehensive Coverage: Get the most up-to-date AI news and semiconductor industry updates.
Expert Analysis: Our team of tech journalists provides in-depth insights into complex AI and supercomputer topics.
Timely Reporting: Be the first to know about breakthroughs in artificial intelligence and semiconductor technology.
Don't miss a beat in the fast-paced world of AI. Bookmark our site for daily updates on the future of technology!`,
  blogs: `Why Choose Our Blog
Cutting-Edge Content: Access the most recent and relevant information on artificial intelligence, supercomputers, and semiconductors.
Expert Insights: Benefit from articles written by industry professionals and thought leaders.
Comprehensive Coverage: Explore a wide range of topics, from AI applications to semiconductor breakthroughs.
Fuel your passion for technology and stay ahead in the AI revolution. Bookmark our blog for daily doses of innovation!`,
};

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

import img1 from "../assets/images/9L.jpg";
import img2 from "../assets/images/10L.jpg";
import img3 from "../assets/images/11L.jpg";
import img4 from "../assets/images/12L.jpg";

const Latest = () => {
  const stories = [
    {
      id: 1,
      category: "Insights",
      image: img1,
      title: "Exploring the potential of the next generation of the web.",
      date: "2024-09-15",
      story:
        "The story content goes here. This is the first paragraph of the article. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      category: "Business",
      title: "The Rise of Sustainable Travel",
      image: img2,
      title: "How eco-friendly practices are changing the way we explore",
      date: "2024-09-10",
      story:
        "The story content goes here. It can be a brief summary or an excerpt from the full article. It also explains more about eco-friendly travel habits. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      category: "Travel",
      image: img3,
      title: "Example of an updated story with a more recent date.",
      date: "2025-09-10",
      story:
        "The story content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      category: "Technology",
      image: img4,
      title: "Example of an updated story with a more recent date.",
      date: "2024-03-10",
      story:
        "The story content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const sortedStories = [...stories].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  const [featuredStory, ...otherStories] = sortedStories;

  const countSentences = (text = "") =>
    text
      .split(/[.!?]+/)
      .map((sentence) => sentence.trim())
      .filter(Boolean).length;

  const getReadingTime = (text = "") => {
    const sentenceCount = countSentences(text);
    const minutes = Math.max(1, Math.ceil(sentenceCount / 2));
    return `${minutes} min read`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(date);
  };

  return (
    <section id="latest" className="container">
      <div className="section-header">
        <h2 className="section-title">Latest Stories</h2>
        <a href="#" className="section-link">
          Read more articles →
        </a>
      </div>

      <div className="stories-layout">
        <article className="stories-featured">
          {featuredStory && (
            <div>
              <img src={featuredStory.image} alt={featuredStory.title} />
              <div className="stories-featured-body">
                <h3>{featuredStory.category}</h3>
                <p>{featuredStory.title}</p>
                <p>
                  {formatDate(featuredStory.date)} •{" "}
                  {getReadingTime(featuredStory.story)}
                </p>
              </div>
            </div>
          )}
        </article>

        <div className="story-list">
          {otherStories.map((story) => (
            <article className="story-list-item" key={story.id}>
              <div className="story-tumbnail">
                <img src={story.image} alt={story.title} />
              </div>
              <div className="stories-featured-body">
                <h4>{story.category}</h4>
                <p>{story.title}</p>
                <p>
                  {formatDate(story.date)} • {getReadingTime(story.story)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;

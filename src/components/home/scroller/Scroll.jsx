import Marquee from "@/components/ui/scroller";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Emily",
    username: "@emily123",
    body: "The best platform for learning languages. Highly recommend!",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Daniel",
    username: "@daniel_linguist",
    body: "Easy booking, great tutors. Fantastic experience!",
    img: "https://avatar.vercel.sh/daniel",
  },
  {
    name: "Sophia",
    username: "@sophia_studies",
    body: "Personalized and effective. I love it!",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Michael",
    username: "@michael_tutor",
    body: "User-friendly and seamless for tutors.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Olivia",
    username: "@olivia_languages",
    body: "Fun and effective learning experience!",
    img: "https://avatar.vercel.sh/olivia",
  },
  {
    name: "Liam",
    username: "@liam_student",
    body: "Made incredible progress here. Love it!",
    img: "https://avatar.vercel.sh/liam",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div>
      <div className="relative flex py-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold">
            What Our <span className="text-pink-600"> Users Say</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Real Experiences from Learners and Tutors
          </p>
        </div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}

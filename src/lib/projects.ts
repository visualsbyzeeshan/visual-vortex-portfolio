import advertisementVideo from '../media/Advertisment.mp4'
import cinematic1 from '../media/cinematic1.mp4'
import cinematicVideography1 from '../media/1. Cinematic Videography.mp4';
import cinematicVideography2 from '../media/2. Cinematic Videography.mp4';
import cinematicVideography3 from '../media/3. Cinematic Videography.mp4';
import cinematicVideography4 from '../media/4. Cinematic Videography.mp4';
import cinematicVideography5 from '../media/5. Cinematic Videography.mp4';
import cinematicVideography6 from '../media/6. Cinematic Videography.mp4';


export type ProjectType = {
  id: string;
  title: string;
  category: string;
  videoUrl?: string;
  year: number;
  client: string;
  description: string;
};

export const categories = [
  "All",
  "Cinematic Videography",
  "Promotional & Commercial",
  "Visual Effects & CGI",
  "Visual Motion Art",
  "Youtube Content"
];

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Desert Mirage - Short Film",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography1,
    year: 2023,
    client: "SunLight Studios",
    description: "A cinematic journey through the desert landscapes, featuring dramatic color grading and narrative pacing."
  },
  {
    id: "2",
    title: "Desert Mirage - Short Film",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography2,
    year: 2023,
    client: "SunLight Studios",
    description: "A cinematic journey through the desert landscapes, featuring dramatic color grading and narrative pacing."
  },
  {
    id: "3",
    title: "Desert Mirage - Short Film",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography3,
    year: 2023,
    client: "SunLight Studios",
    description: "A cinematic journey through the desert landscapes, featuring dramatic color grading and narrative pacing."
  },
  {
    id: "4",
    title: "Desert Mirage - Short Film",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography4,
    year: 2023,
    client: "SunLight Studios",
    description: "A cinematic journey through the desert landscapes, featuring dramatic color grading and narrative pacing."
  },
  {
    id: "5",
    title: "Desert Mirage - Short Film",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography5,
    year: 2023,
    client: "SunLight Studios",
    description: "A cinematic journey through the desert landscapes, featuring dramatic color grading and narrative pacing."
  },
  {
    id: "6",
    title: "Desert Mirage - Short Film",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography6,
    year: 2023,
    client: "SunLight Studios",
    description: "A cinematic journey through the desert landscapes, featuring dramatic color grading and narrative pacing."
  },
  {
    id: "7",
    title: "Neon Dreams - Animation",
    category: "Visual Motion Art",
    videoUrl: cinematic1,
    year: 2023,
    client: "Glow Productions",
    description: "An original 3D animation piece exploring urban nights through neon aesthetics."
  },
  {
    id: "3",
    title: "Product Launch - AirPods",
    category: "Promotional & Commercial",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-device-screens-with-hud-overlay-32607-large.mp4",
    year: 2022,
    client: "Tech Innovative",
    description: "Sleek motion graphics for new product launch, emphasizing minimal design and smooth transitions."
  },
  {
    id: "4",
    title: "Ocean Depths Documentary",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography1,
    year: 2022,
    client: "Blue Planet Media",
    description: "Documentary editing featuring seamless transitions between underwater footage and interviews."
  },
  {
    id: "5",
    title: "Cosmic Journey - VFX Sequence",
    category: "Visual Effects & CGI",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4",
    year: 2021,
    client: "Stellar Films",
    description: "VFX sequence for sci-fi film, featuring space travel and celestial phenomena."
  },
  {
    id: "6",
    title: "Urban Rhythms - Music Video",
    category: "Youtube Content",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-urban-landscape-in-movement-seen-from-a-car-window-9587-large.mp4",
    year: 2021,
    client: "Rhythm Records",
    description: "Dynamic editing for a hip-hop music video, featuring synchronized cuts and visual rhythm."
  },
  {
    id: "7",
    title: "Digital World - 3D Animation",
    category: "Visual Effects & CGI",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-of-flowing-digital-information-21763-large.mp4",
    year: 2020,
    client: "Future Media",
    description: "3D animated sequence visualizing data and digital landscapes."
  },
  {
    id: "8",
    title: "Corporate Presentation",
    category: "Promotional & Commercial",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-growing-business-charts-and-numbers-18031-large.mp4",
    year: 2020,
    client: "Global Enterprises",
    description: "Clean and professional motion graphics for annual corporate presentation."
  },
  {
    id: "9",
    title: "Fantasy Forest - VFX Integration",
    category: "Visual Effects & CGI",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-mysterious-forest-scenery-with-light-effects-43873-large.mp4",
    year: 2019,
    client: "Dreamscape Pictures",
    description: "VFX work integrating fantastical elements into forest footage for feature film."
  },
  {
    id: "10",
    title: "Video Tutorial Series",
    category: "Youtube Content",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-explainer-video-using-icon-animations-to-present-marketing-information-33963-large.mp4",
    year: 2019,
    client: "TechStart",
    description: "Animated explainer video for new technology product, focusing on clarity and engaging visuals."
  },
];

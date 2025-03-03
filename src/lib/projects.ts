import advertisementVideo from '../media/Advertisment.mp4'
import cinematic1 from '../media/cinematic1.mp4'

import cinematicVideography1 from '../media/1. Cinematic Videography.mp4';
import cinematicVideography2 from '../media/2. Cinematic Videography.mp4';
import cinematicVideography3 from '../media/3. Cinematic Videography.mp4';
import cinematicVideography4 from '../media/4. Cinematic Videography.mp4';
import cinematicVideography5 from '../media/5. Cinematic Videography.mp4';
import cinematicVideography6 from '../media/6. Cinematic Videography.mp4';

import promotionalCommercial1 from '../media/1. Promotional & Commercial.mp4';
import promotionalCommercial2 from '../media/2. Promotional & Commercial.mp4';
import promotionalCommercial3 from '../media/3. Promotional & Commercial.mp4';
import promotionalCommercial4 from '../media/4. Promotional & Commercial.mp4';
import promotionalCommercial5 from '../media/5. Promotional & Commercial.mp4';
import promotionalCommercial6 from '../media/6. Promotional & Commercial.mp4';
import promotionalCommercial7 from '../media/7. Promotional & Commercial.mp4';
import promotionalCommercial8 from '../media/8. Promotional & Commercial.mp4';
import promotionalCommercial9 from '../media/9. Promotional & Commercial.mp4';

import visualEffectsCGI1 from '../media/1. Visual Effects & CGI.mp4';
import visualEffectsCGI2 from '../media/2. Visual Effects & CGI.mp4';
import visualEffectsCGI3 from '../media/3. Visual Effects & CGI.mp4';
import visualEffectsCGI4 from '../media/4. Visual Effects & CGI.mp4';
import visualEffectsCGI5 from '../media/5. Visual Effects & CGI.mp4';
import visualEffectsCGI6 from '../media/6. Visual Effects & CGI.mp4';

import youtubeContent1 from '../media/1. YouTube Content.mp4';
import youtubeContent2 from '../media/2. YouTube Content.mp4';
import youtubeContent3 from '../media/3. YouTube Content.mp4';

import visualMotionArt1 from '../media/1. Visual Motion Art.mp4';
import visualMotionArt2 from '../media/2. Visual Motion Art.mp4';
import visualMotionArt3 from '../media/3. Visual Motion Art.mp4';
import visualMotionArt4 from '../media/4. Visual Motion Art.mp4';
import visualMotionArt5 from '../media/5. Visual Motion Art.mp4';
import visualMotionArt6 from '../media/6. Visual Motion Art.mp4';
import visualMotionArt7 from '../media/7. Visual Motion Art.mp4';
import visualMotionArt8 from '../media/8. Visual Motion Art.mp4';
import visualMotionArt9 from '../media/9. Visual Motion Art.mp4';
import visualMotionArt10 from '../media/10. Visual Motion Art.mp4';
import visualMotionArt11 from '../media/11. Visual Motion Art.mp4';
import visualMotionArt12 from '../media/12. Visual Motion Art.mp4';
import visualMotionArt13 from '../media/13. Visual Motion Art.mp4';
import visualMotionArt14 from '../media/14. Visual Motion Art.mp4';
import visualMotionArt15 from '../media/15. Visual Motion Art.mp4';
import visualMotionArt16 from '../media/16. Visual Motion Art.mp4';

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
    id: "cv1",
    title: "Cinematic Storytelling",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography1,
    year: 2023,
    client: "Narrative Films",
    description: "A cinematic journey through storytelling featuring dramatic color grading and narrative pacing."
  },
  {
    id: "cv2",
    title: "Urban Landscapes",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography2,
    year: 2023,
    client: "City Productions",
    description: "Exploring urban environments through a cinematic lens."
  },
  {
    id: "cv3",
    title: "Nature Documentary",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography3,
    year: 2022,
    client: "Wildlife Studios",
    description: "Documentary footage of natural landscapes and wildlife."
  },
  {
    id: "cv4",
    title: "Character Study",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography4,
    year: 2022,
    client: "Portrait Media",
    description: "An intimate character study with atmospheric cinematography."
  },
  {
    id: "cv5",
    title: "Dramatic Sequences",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography5,
    year: 2021,
    client: "Drama Productions",
    description: "Powerful dramatic sequences with dynamic camera movement."
  },
  {
    id: "cv6",
    title: "Cinematic Montage",
    category: "Cinematic Videography",
    videoUrl: cinematicVideography6,
    year: 2021,
    client: "Montage Studios",
    description: "A collection of cinematic moments edited into a compelling montage."
  },
  
  {
    id: "pc1",
    title: "Product Launch",
    category: "Promotional & Commercial",
    videoUrl: promotionalCommercial1,
    year: 2023,
    client: "Tech Innovations",
    description: "Sleek promotional video for a new product launch."
  },
  {
    id: "pc2",
    title: "Brand Campaign",
    category: "Promotional & Commercial",
    videoUrl: promotionalCommercial2,
    year: 2023,
    client: "Global Brands",
    description: "Brand awareness campaign with storytelling elements."
  },
  {
    id: "pc3",
    title: "Service Showcase",
    category: "Promotional & Commercial",
    videoUrl: promotionalCommercial3,
    year: 2022,
    client: "Service Solutions",
    description: "Highlighting services through engaging promotional content."
  },
  {
    id: "pc4",
    title: "Fashion Commercial",
    category: "Promotional & Commercial",
    videoUrl: promotionalCommercial4,
    year: 2022,
    client: "Style Studios",
    description: "Commercial for a fashion brand featuring dynamic transitions."
  },
  {
    id: "pc5",
    title: "Food & Beverage Ad",
    category: "Promotional & Commercial",
    videoUrl: promotionalCommercial5,
    year: 2021,
    client: "Culinary Creations",
    description: "Appetizing commercial for food and beverage products."
  },
  {
    id: "pc6",
    title: "Travel Promotion",
    category: "Promotional & Commercial",
    videoUrl: promotionalCommercial6,
    year: 2021,
    client: "Wanderlust Agency",
    description: "Inspiring travel promotional video highlighting destinations."
  },
  {
    id: "pc7",
    title: "Event Promo",
    category: "Promotional & Commercial",
    videoUrl: promotionalCommercial7,
    year: 2020,
    client: "Event Horizon",
    description: "Promotional video for a major event or conference."
  },
  {
    id: "pc8",
    title: "Retail Advertisement",
    category: "Promotional & Commercial",
    videoUrl: promotionalCommercial8,
    year: 2020,
    client: "Retail Solutions",
    description: "Commercial for retail products with creative storytelling."
  },
  {
    id: "pc9",
    title: "Corporate Promo",
    category: "Promotional & Commercial",
    videoUrl: promotionalCommercial9,
    year: 2019,
    client: "Corporate Vision",
    description: "Promotional video highlighting corporate values and achievements."
  },
  
  {
    id: "ve1",
    title: "VFX Integration",
    category: "Visual Effects & CGI",
    videoUrl: visualEffectsCGI1,
    year: 2023,
    client: "Effects Studio",
    description: "Seamless integration of visual effects with live footage."
  },
  {
    id: "ve2",
    title: "CGI Environments",
    category: "Visual Effects & CGI",
    videoUrl: visualEffectsCGI2,
    year: 2023,
    client: "Virtual Worlds",
    description: "Creation of CGI environments for immersive storytelling."
  },
  {
    id: "ve3",
    title: "Character Animation",
    category: "Visual Effects & CGI",
    videoUrl: visualEffectsCGI3,
    year: 2022,
    client: "Animation House",
    description: "3D character animation for narrative projects."
  },
  {
    id: "ve4",
    title: "Particle Systems",
    category: "Visual Effects & CGI",
    videoUrl: visualEffectsCGI4,
    year: 2022,
    client: "Particle Studios",
    description: "Advanced particle system effects for dynamic visuals."
  },
  {
    id: "ve5",
    title: "Motion Graphics",
    category: "Visual Effects & CGI",
    videoUrl: visualEffectsCGI5,
    year: 2021,
    client: "Motion Media",
    description: "Creative motion graphics combining 2D and 3D elements."
  },
  {
    id: "ve6",
    title: "VFX Compositing",
    category: "Visual Effects & CGI",
    videoUrl: visualEffectsCGI6,
    year: 2021,
    client: "Composite Works",
    description: "Complex VFX compositing for feature film sequences."
  },
  
  {
    id: "yt1",
    title: "Tutorial Series",
    category: "Youtube Content",
    videoUrl: youtubeContent1,
    year: 2023,
    client: "Learn Online",
    description: "Educational content designed for YouTube audiences."
  },
  {
    id: "yt2",
    title: "Vlogs & Lifestyle",
    category: "Youtube Content",
    videoUrl: youtubeContent2,
    year: 2022,
    client: "Daily Content",
    description: "Vlog-style content with engaging editing and pacing."
  },
  {
    id: "yt3",
    title: "Review Content",
    category: "Youtube Content",
    videoUrl: youtubeContent3,
    year: 2021,
    client: "Review Channel",
    description: "Product review videos with professional presentation."
  },
  
  {
    id: "vma1",
    title: "Abstract Motion",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt1,
    year: 2023,
    client: "Art Collective",
    description: "Abstract motion art exploring form and movement."
  },
  {
    id: "vma2",
    title: "Experimental Animation",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt2,
    year: 2023,
    client: "Experimental Studios",
    description: "Pushing boundaries with experimental animation techniques."
  },
  {
    id: "vma3",
    title: "Visual Rhythm",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt3,
    year: 2022,
    client: "Rhythm Works",
    description: "Creating visual rhythms through motion and editing."
  },
  {
    id: "vma4",
    title: "Color Studies",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt4,
    year: 2022,
    client: "Chromatic Arts",
    description: "Exploring color theory through motion graphics."
  },
  {
    id: "vma5",
    title: "Geometric Patterns",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt5,
    year: 2021,
    client: "Pattern Design",
    description: "Animated geometric patterns with mesmerizing transitions."
  },
  {
    id: "vma6",
    title: "Sound Visualization",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt6,
    year: 2021,
    client: "Audio Visual",
    description: "Visual interpretations of sound and music."
  },
  {
    id: "vma7",
    title: "Liquid Motion",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt7,
    year: 2020,
    client: "Fluid Studios",
    description: "Fluid dynamics and liquid simulations as art."
  },
  {
    id: "vma8",
    title: "Typographic Motion",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt8,
    year: 2020,
    client: "Type Animation",
    description: "Creative typography in motion with narrative elements."
  },
  {
    id: "vma9",
    title: "Digital Landscapes",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt9,
    year: 2020,
    client: "Digital Terrains",
    description: "Abstract digital landscapes with evolving elements."
  },
  {
    id: "vma10",
    title: "Mixed Media Animation",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt10,
    year: 2019,
    client: "Media Mix",
    description: "Combining different animation techniques and media."
  },
  {
    id: "vma11",
    title: "Minimalist Motion",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt11,
    year: 2019,
    client: "Minimal Studio",
    description: "Minimalist approach to motion design and animation."
  },
  {
    id: "vma12",
    title: "Textural Studies",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt12,
    year: 2019,
    client: "Texture Works",
    description: "Exploring visual textures through motion graphics."
  },
  {
    id: "vma13",
    title: "Light Experiments",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt13,
    year: 2018,
    client: "Light Lab",
    description: "Experimental animations exploring light and shadow."
  },
  {
    id: "vma14",
    title: "Kinetic Typography",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt14,
    year: 2018,
    client: "Kinetic Words",
    description: "Dynamic text animations with narrative purpose."
  },
  {
    id: "vma15",
    title: "Particle Art",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt15,
    year: 2017,
    client: "Particle Design",
    description: "Artistic expressions through particle systems and simulations."
  },
  {
    id: "vma16",
    title: "Glitch Art",
    category: "Visual Motion Art",
    videoUrl: visualMotionArt16,
    year: 2017,
    client: "Glitch Works",
    description: "Intentional glitch aesthetics as artistic expression."
  },
];

import love from "@/assets/love.jpg";
import love1 from "@/assets/love1.jpg";
import love2 from "@/assets/love2.jpg";
import love3 from "@/assets/love3.jpg";
import love4 from "@/assets/love4.jpg";
import shan from "@/assets/shan.jpeg";
import shan1 from "@/assets/shan1.jpg";
import shan2 from "@/assets/shan2.jpg";
import shan3 from "@/assets/shan3.jpg";
import shan4 from "@/assets/shan4.jpg";
import sky from "@/assets/sky.jpg";
import sky1 from "@/assets/sky1.jpg";
import sky3 from "@/assets/sky3.jpg";
import sky4 from "@/assets/sky4.jpg";
import sky5 from "@/assets/sky5.jpg";
import sky6 from "@/assets/sky6.jpg";

export const shanImages = [shan, shan1, shan2, shan3, shan4];
export const loveImages = [love, love1, love2, love3, love4];
export const skyImages = [sky, sky1, sky3, sky4, sky5, sky6];
/** All adventure/moment images — shan, love, sky — for carousel and consistent use across the site. */
export const adventureImages = [...shanImages, ...loveImages, ...skyImages];
/** Hero / primary profile shot (used on home). */
export const heroImage = shan1;

/** Pick an image by index (cycles through all). */
export function getAdventureImage(index: number): string {
  const list = adventureImages;
  return list[((index % list.length) + list.length) % list.length];
}
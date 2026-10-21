import american from "@/assets/stickers/american.jpg";
import amsterdam from "@/assets/stickers/amsterdam.jpg";
import german from "@/assets/stickers/german.jpg";
import danish from "@/assets/stickers/danish.jpg";
import mexican from "@/assets/stickers/mexican.jpg";
import bahrain from "@/assets/stickers/bahrain.jpg";
import korea from "@/assets/stickers/korea.jpg";

/** Round country stickers shown on the corner of each menu item. */
export const stickerImages: Record<string, string> = {
  american,
  amsterdam,
  german,
  danish,
  mexican,
  bahrain,
  korea,
};

/** Hand-stuck tilt: each item keeps its own angle, repeating every seven. */
const tilts = [-11, -5, 7, -9, 4, -13, -3];

export function stickerTilt(index: number) {
  return `${tilts[index % tilts.length]}deg`;
}

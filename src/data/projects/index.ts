import type { Project } from "./types";
import fieldpulse from "./fieldpulse";
import gilgitApp from "./gilgit-app";
import qhoHr from "./qho-hr";

import filedPng from "@/assets/filed.png";
import filed1Png from "@/assets/filed1.png";
import gilgitPng from "@/assets/gilgit.png";
import gilgitappPng from "@/assets/gilgitapp.png";
import qhoPng from "@/assets/qho.png";
import qho1Png from "@/assets/qho1.png";

const projectList: Project[] = [fieldpulse, gilgitApp, qhoHr];

export type { Project };
export { projectList as projects };

export const projectImages: Record<string, string> = {
  fieldpulse: filedPng,
  "gilgit-app": gilgitPng,
  "qho-hr": qhoPng,
};

export const projectGallery: Record<string, string[]> = {
  fieldpulse: [filedPng, filed1Png],
  "gilgit-app": [gilgitPng, gilgitappPng],
  "qho-hr": [qhoPng, qho1Png],
};

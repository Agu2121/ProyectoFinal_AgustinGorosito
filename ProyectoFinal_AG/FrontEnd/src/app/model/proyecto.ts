export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    imgP: string;
    repoUrl: string;

    constructor(nombreP: string, descripcionP: string, imgP: string, repoUrl: string) {
      this.nombreP = nombreP;
      this.descripcionP = descripcionP;
      this.imgP = imgP;
      this.repoUrl = repoUrl;
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: any = [{
    titulo: "Desarrollo de Páginas Web",
    descripcion: "En este curso aprenderas todo lo encesario para diseñar tu primer pagina web.",
    imagen: "https://scontent.felp1-1.fna.fbcdn.net/v/t1.0-9/61146272_1286221151553340_7238514344810512384_o.png?_nc_cat=111&_nc_oc=AQmoMdiI8KLrltG9kZhfO2j4yUb5pfYMzY37pPouMCR2LEzXooYfBhudRaSV8KqFcwA&_nc_ht=scontent.felp1-1.fna&oh=3f11b686bd0418420b3a24a7414b84b9&oe=5E312B0D"
  }, {
    titulo: "Excel Básico",
    descripcion: "En este curso aprenderas todo lo encesario para el correcto manejo de Excel.",
    imagen: "https://scontent.felp1-1.fna.fbcdn.net/v/t1.0-9/70971441_10157586048622375_4321658035253542912_o.jpg?_nc_cat=109&_nc_oc=AQlCvDNVwf2VRzX_yVNAVFxwflW9X-b6wBxgYUpgUcARtmPS2ghVR9NkOtSw6SEn52M&_nc_ht=scontent.felp1-1.fna&oh=eda83e76486e9de1826accfbcf140742&oe=5E37D910"
  }, {
    titulo: "AutoCad",
    descripcion: "En este curso aprenderas todo lo encesario para el correcto manejo de Excel.",
    imagen: "https://scontent.felp1-1.fna.fbcdn.net/v/t1.0-9/60962772_1286800578162064_3898943406906277888_n.jpg?_nc_cat=105&_nc_oc=AQn90ZwyO6HPY3vqFkfWk6WpPatVCPGRbIE-QyDsRlw8VDbiasKf0TsGYV0Al3lJjUw&_nc_ht=scontent.felp1-1.fna&oh=11018a4ce4275362fa7a06a9988b9039&oe=5E2BF431"
  }, {
    titulo: "Android",
    descripcion: "En este curso aprenderas todo lo encesario para el desarrollo de tu primer pagina web.",
    imagen: "https://scontent.felp1-1.fna.fbcdn.net/v/t1.0-9/60751951_1285228321652623_715768312901926912_n.jpg?_nc_cat=105&_nc_oc=AQm9Lyxf3ilfSP6YbgXfnm_FM6E3mwqdkl0s5g3T4g9cVEOb9SgWvsuHxW_LQnhFO_s&_nc_ht=scontent.felp1-1.fna&oh=b252e32353501a726db1e4eaf036958f&oe=5E3D92D1"
  }, {
    titulo: "Introduccion a la programacion",
    descripcion: "En este curso aprenderas todo lo encesario para tu primer acercamiento a la programacion.",
    imagen: "https://scontent.felp1-1.fna.fbcdn.net/v/t1.0-9/60901746_1285228368319285_6143047253377417216_o.jpg?_nc_cat=107&_nc_oc=AQmmVKcv1SNPGonlzvnIXqbk5ExYwNQDhw8ZXp88b2drcGZO5pd1xwc4OM-scFZNww8&_nc_ht=scontent.felp1-1.fna&oh=fb3bfc2e9d2cbd0d0a140ca5d3aaa933&oe=5E2561D3"
  }, {
    titulo: "Introduccion a la programacion",
    descripcion: "En este curso aprenderas los fundamentos de redes de computadoras y datos.",
    imagen: "https://scontent.felp1-1.fna.fbcdn.net/v/t1.0-9/61020127_1285228434985945_9155777480773074944_o.jpg?_nc_cat=101&_nc_oc=AQnssDGMzcnSox7v-UW2A-AGSWj3Cs1hEIFjx7qcKkzyqi7D1TPLbabtC4FUqB9hovs&_nc_ht=scontent.felp1-1.fna&oh=dd021b924cec80b3842a64a64d75cf62&oe=5E26B45C"
  }];

  constructor() { }

  obtenerTodosLosCursos(){
    return this.cursos;
  }
}

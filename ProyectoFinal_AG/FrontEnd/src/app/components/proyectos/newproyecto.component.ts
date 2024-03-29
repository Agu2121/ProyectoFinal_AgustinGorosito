import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP: string ='';
  descripcionP: string = '';
  imgP: string = '';
  repoUrl: string = ''
  constructor(private proyectoService : ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imgP, this.repoUrl);
    this.proyectoService.save(proyecto).subscribe(
     data =>{
       alert("Proyecto añadido");
   this.router.navigate(['']);
 }, err =>{
    alert("Error");
    this.router.navigate(['']);
 }
    )
 }

}

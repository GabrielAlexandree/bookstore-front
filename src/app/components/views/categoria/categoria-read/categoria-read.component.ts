import { Component } from "@angular/core";
import { CategoriaService } from "../categoria.service";
import { Categoria } from "../categoria.model";

@Component({
  selector: "app-categoria-read",
  templateUrl: "./categoria-read.component.html",
  styleUrls: ["./categoria-read.component.css"],
})
export class CategoriaReadComponent {

  categorias: Categoria[] = []

  displayedColumns: string[] = ["id", "nome", "descricao", "acoes"];

  constructor(private service: CategoriaService) {}

  ngOnInit(): void{
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {8
      console.log(resposta);
      this.categorias = resposta
    })
  }
 
}
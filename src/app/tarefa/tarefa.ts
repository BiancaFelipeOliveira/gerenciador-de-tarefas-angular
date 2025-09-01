import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tarefa',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './tarefa.html',
  styleUrl: './tarefa.css',
})
export class Tarefa implements OnInit {
  TAREFA_KEY = 'tarefa_key'
  
  listaTarefas: any[] = [];

  constructor() {}
  ngOnInit(): void {
    const tarefas = localStorage.getItem(this.TAREFA_KEY)
    if(tarefas){
      this.listaTarefas = JSON.parse(tarefas)
    }
  }
  adicionarTarefa(nomeTarefa: string) {
    if (nomeTarefa.trim().length == 0) {
      return;
    }
    const tarefaEncontrada = this.listaTarefas.find(
      (item) => item.nome.toLowerCase() == nomeTarefa.toLowerCase()
    );
    if (!tarefaEncontrada) {
      this.listaTarefas.push({ id: this.listaTarefas.length, nome: nomeTarefa, concluido: false });
      this.salvarLista()
    }
  }
  removerTarefa(id: number) {
    this.listaTarefas = this.listaTarefas.filter(item => (item.id != id))
    this.salvarLista()
  }
  
  completarTarefa(id:number){
    const tarefaEncontrada = this.listaTarefas.find(item => item.id == id)

    if(tarefaEncontrada){
      tarefaEncontrada.concluido = !tarefaEncontrada.concluido
      this.salvarLista()
    }
  
  }

  private salvarLista(){
    localStorage.setItem(this.TAREFA_KEY,  JSON.stringify(this.listaTarefas))
  }
}

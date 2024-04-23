import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class ParentComponent implements OnInit {

  @Input()gettingValue!:string
  inputValue2:string = "how's life is 1 3 45 going on?";
   extractName = 'My name is cody';
   extractFileName = "file_1.mp3 file_2.mp3 file.csv";
   fileNameRegex = /(\w+)\.mp3/g
    regex= /My name is ([a-z]+)/
  log(){
    console.log('log parent component')
  }

  ngOnInit(): void {
    console.log(this.inputValue2.replace(/[^a-zA-Z]+/g," ").trim().split(' '));
    // console.log(this.extractName.exec())

    const match= this.regex.exec(this.extractName);
    if(match){
      console.log(match)
    }

     let getFileName = this.fileNameRegex.exec(this.extractFileName);
     console.log(getFileName)
     while(getFileName){
      console.log(getFileName[1])
      getFileName = this.fileNameRegex.exec(this.extractFileName);
     }
  }




}

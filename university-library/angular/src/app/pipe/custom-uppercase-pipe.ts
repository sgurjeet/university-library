import {Pipe,PipeTransform} from '@angular/core'

@Pipe ({name : 'customUpperCase'})

export class CustomUpperCase implements PipeTransform{
    public transform(value:string){
        return value.toUpperCase();
    }
}
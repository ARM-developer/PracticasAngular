import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from 'rxjs';

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
 
    //dato    |     calculadora: EL OTRO DATO
    //param1                    param2  
    transform(value, value_two){
        let operaciones = `
            Suma: ${value+value_two}  <br>
            Resta: ${value-value_two}  <br>
            Multiplicación: ${value*value_two}  <br>
            División: ${value/value_two}  <br>
        `;

        return operaciones; 
    }
}
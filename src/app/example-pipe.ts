import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {


//  It filters array items based on a search text.
  // transform(list:any[], search:string): any[] {
  //   if(!list || !search) return list
  //   console.log("input", list,search)
  //   console.log("data",list.filter(item => {item.includes(search)}))
  //   return list.filter(item => {item.toLowerCase().includes(search.toLocaleLowerCase())})
    
  // }

  //truncate text
  //  transform(text:string, limit:number): string {
  //   return text.length > limit ? text.substring(0,limit) + '....' : text
    
  // }


  //Mask Email
   transform(email:string): string {
    const [content , domain] = email.split('@')
    return content.substring(0,2) + '*****' + domain
    
  }

  // covert time 'hh:mm:ss'
  //  transform(sec: number): string {
  //   const h = Math.floor(sec / 3600);
  //   const m = Math.floor((sec % 3600) / 60);
  //   const s = sec % 60;
  //   return `${h}:${m}:${s}`;
  // }
}

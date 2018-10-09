export class Sorting{
    
    sortObject(obj : any[],field : any){
        console.log(obj + ':' + field);
        obj.sort(function(a : any,b : any){
            let aVal = a[field];
            let bVal = b[field];
            if(aVal<bVal)
                return -1;
            else if(aVal>bVal)
                return 1;
            else
                return 0;
        });
    }
} 
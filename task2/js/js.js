const a = [2, 5, 6, 8, 20, 40, 43, 57];
const b = [1, 4, 7, 8, 23, 38, 41, 43, 53, 68, 73];

const lA = a.length;
const lB = b.length;
let lmax = 0;
let lmin = 0;
let c = [];
if (lA>lB) { lmax = lA; lmin = lB} else { lmax = lB; lmin = lA}


for (let i=0;i<=lmax; i++){
   
   if (a[i] !== undefined && b[i] !== undefined)
        {c[i] = a[i] + b[i];} 
        else {
            if (a.length >= b.length){c[i] = a[i];}
              else {c[i] = b[i]}

            }
}

let j=0;
for (let i1=1; i1<=c.length-1;i1++){
    for (let i=1; i<=c.length-1;i++){    
        if (c[i-1]>c[i]) {j=c[i-1]; c[i-1]=c[i]; c[i]=j;j=0;   
        }
    }
}

for (let i=0;i<=c.length-2; i++){
    console.log (c[i]);
}

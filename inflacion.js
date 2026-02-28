      const paisesInflacion=[
            {nombre:"mexico",
            inflacion:7.86
            },
             {nombre:"estados unidos",
            inflacion:6.5
            },
             {nombre:"argentina",
            inflacion:101.4
            },
             {nombre:"españa",
            inflacion:5.7
            },
             {nombre:"japon",
            inflacion:2.3
            },
        ]

        function retornarPaisesInflacion(arreglo){
            let ul=document.createElement("ul")
            arreglo.forEach(element => {
                let li=document.createElement("li")
                li.textContent=`${element.nombre},${element.inflacion}`
                ul.append(li)
            });
            document.body.appendChild(ul)
        }

        function paisMayorInflacion(arreglo){
           
            let ordenado=[...arreglo].sort((a,b)=>b.inflacion-a.inflacion)
               let ul=document.createElement("ul")
                let p=document.createElement("p")
                p.textContent="paises ordenados rspecto a su inflación"
                ul.append(p)
                ordenado.forEach(element => {
                let li=document.createElement("li")
                li.textContent=`${element.nombre},${element.inflacion}`
                ul.append(li)
            });

            document.body.appendChild(ul)
        }

        function elMasComplicado(arreglo) {
           
            let paisMayor = arreglo.reduce((max, pais) => 
                pais.inflacion > max.inflacion ? pais : max
            );
         }

        retornarPaisesInflacion(paisesInflacion)

        paisMayorInflacion(paisesInflacion)

        elMasComplicado(paisesInflacion)

        export{paisMayorInflacion,retornarPaisesInflacion,paisesInflacion,elMasComplicado}
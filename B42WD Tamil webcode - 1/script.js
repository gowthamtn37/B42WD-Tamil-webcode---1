let d1 = document.createElement("div");
d1.setAttribute("class","container-fluid");
let d2 = document.createElement("div")
d2.setAttribute("class","head")
let head = document.createElement("h1");
head.innerHTML='Pokemon World';
d2.append(head)
d1.append(d2)

let d3 = document.createElement("div");
d3.setAttribute("class","row")
d1.append(d3)


let d4 = document.createElement("div")
 d4.innerHTML=`<nav aria-label="...">
<ul class="pagination pagination-sm">
  <li class="page-item active" aria-current="page">
    <span class="page-link">1</span>
  </li>
  <li class="page-item" ><a class="page-link" href="#">2</a></li>
  <li class="page-item" ><a class="page-link" href="#">3</a></li>
  <li class="page-item" ><a class="page-link" href="#">4</a></li>
  <li class="page-item" ><a class="page-link" href="#">5</a></li>
</ul>
</nav>`

d1.append(d4)


document.body.append(d1);


async function foo0(){
    for(let i=1; i<50; i++){
    let api = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    let res = await api.json();

const pokemon = {img : res.sprites.front_default, name : res.name, ability : res.abilities[0].ability.name, moves : res.moves[0].move.name, weight : res.weight};
console.log(pokemon)




d3.innerHTML=`
    <div class="card">
    <img src="${pokemon['img']}" class="card-img-top" alt="No Img">
    <div class="card-body">
      <h2 class="card-title">${pokemon['name']}</h2>
      <h5 class="card-title">ABILITY</h5>
      <p class="card-text">${pokemon['ability']}</p>
      <h5 class="card-title">MOVES</h5>
      <p class="card-text">${pokemon['moves']}</p>
      <h2 class="card-title">${pokemon['weight']}</h2>
    </div>
  </div>
    `

 
    }

}
foo0()


 
let container=ele("div","container");
let row=ele("div","row");
let url = "https://restcountries.com/v3.1/all";
let res = fetch(url);
res.then((data) => data.json()).then((data1) => {
    console.log(data1);
    for(i=0;i<data1.length;i++){
        colu=[];
        colu[i]=col(data1[i].name.common,data1[i].capital,data1[i].region,data1[i].flags.png);
        row.append(colu[i]);
    }
    
}).catch((error) => console.log(error));

container.append(row);
document.body.append(container);

function ele(element,classname){
    let elem=document.createElement(element);
    elem.setAttribute("class",classname);
    return elem;
}
function col(cname,capital,region,image){
    let col=ele("div","col-lg-4 col-sm-12");
    let card=ele("div","card");
    let cardh=ele("div","card-header bg-primary");
    let cardt=ele('h5',"card-title");
    cardt.innerHTML= cname;
    let cardb=ele("div","card-body");
    cardb.innerHTML=`<ul>
    <li>capital name-${capital}</li>
    <li>region-${region}</li>
    </ul>`;
    let flag=document.createElement('img');
    flag.setAttribute("src",image);
    flag.setAttribute("alt","countryflag");
    cardb.append(flag);
    cardh.append(cardt);
    card.append(cardh,cardb);
    col.append(card);
    return col;
}
import define1 from "./26670360aa6f343b@202.js";

function _jobs(FileAttachment){return(
FileAttachment("Jobs.csv").csv()
)}

function _pubs(FileAttachment){return(
FileAttachment("Pubs.csv").csv()
)}

function _pubs_1(FileAttachment){return(
FileAttachment("Pubs_1.csv").csv()
)}

function _restaurants(FileAttachment){return(
FileAttachment("Restaurants.csv").csv()
)}

function _untitledRecipe1(FileAttachment){return(
FileAttachment("Untitled recipe (1).csv").csv()
)}

function _untitledRecipe_21(FileAttachment){return(
FileAttachment("Untitled recipe_2 (1).csv").csv()
)}

function _untitledRecipe_2(FileAttachment){return(
FileAttachment("Untitled recipe_2.csv").csv()
)}

async function _9(FileAttachment,vl,untitledRecipe1)
{
  const image = FileAttachment("BaseMap.png").image()
   const plot1 = vl.markImage()
   .data({
     "values": [
       {"x": 8000, "y": 8000, "img1": await FileAttachment("BaseMap.png").url()},
     ]
   })
 .encode(
    vl.x().fieldQ('x'),
    vl.y().fieldQ('y'),
    vl.url().fieldN('img1')
 )
  
  const plot2 =  vl.markPoint()
.data(untitledRecipe1)
  .width(700)
  .height(700)
.encode(
  vl.x().fieldQ('location2').title("West <-> East"),
  vl.y().fieldQ('location3').title("South <-> North "),
vl.shape().field('Business'),
  vl.size().value(150),
  vl.tooltip().field('Business'),
  vl.color().value('Blue')
  
)


    const layer = vl.layer(plot1,plot2).title('Location of Pub and Restaurant ')
   return layer.render()
}


async function _10(FileAttachment,vl,pubs_1)
{
  const image = FileAttachment("BaseMap.png").image()
   const plot1 = vl.markImage()
   .data({
     "values": [
       {"x": 8000, "y": 8000, "img1": await FileAttachment("BaseMap.png").url()},
     ]
   })
 .encode(
    vl.x().fieldQ('x'),
    vl.y().fieldQ('y'),
    vl.url().fieldN('img1')
 )
  
  const plot2 =  vl.markCircle()
.data(pubs_1)
  .width(700)
  .height(700)
.encode(
  vl.x().fieldQ('location2').title('West <-> East'),
  vl.y().fieldQ('location3').title('South <-> North'),
  vl.size().value(150),
  vl.color().fieldQ('totalcost').scale({range:['Green','Yellow','Red']}),
)





    const layer = vl.layer(plot1,plot2).title('Turn Over of Pubs per Hour ')
   return layer.render()
}


async function _11(FileAttachment,vl,untitledRecipe_2)
{
  const image = FileAttachment("BaseMap.png").image()
   const plot1 = vl.markImage()
   .data({
     "values": [
       {"x": 8000, "y": 8000, "img1": await FileAttachment("BaseMap.png").url()},
     ]
   })
 .encode(
    vl.x().fieldQ('x'),
    vl.y().fieldQ('y'),
    vl.url().fieldN('img1')
 )
  
  const plot2 =  vl.markCircle()
.data(untitledRecipe_2)
  .width(700)
  .height(700)
.encode(
  vl.x().fieldQ('location2').title('West <-> East'),
  vl.y().fieldQ('location3').title('South <-> North'),
  vl.size().value(150),
  vl.color().fieldQ('totalcost').scale({range:['Green','Yellow','Red']}),
)





    const layer = vl.layer(plot1,plot2).title('Turn Over of Restaurants per Hour ')
   return layer.render()
}


function _12(apartments2)
{
  for (var i=0; i<apartments2.length; i++)
    {
      var cor = apartments2[i]['location'].split('(')[1].split(')')[0].split(' ');     
      Object.assign(apartments2[i],{X:cor[0]});
      Object.assign(apartments2[i],{Y:parseFloat(cor[1])});
    }
    return cor[0]
}


function _apartments2(FileAttachment){return(
FileAttachment("Apartments@2.csv").csv()
)}

function _14(vl,apartments2){return(
vl.markCircle().title('Locate Busiest area based on Occupancy')
.data(apartments2)
  .width(700)
  .height(700)
.encode(
  vl.x().fieldQ('X').title('West --> East'),
  vl.y().fieldQ('Y').title('South --> North'),
  vl.order().fieldQ('maxOccupancy ').sort('ascending'),
  vl.size().fieldQ('maxOccupancy ').scale({range:[0,100]}),
  vl.tooltip().fieldN('apartmentId'),
  vl.color().fieldQ('maxOccupancy ').scale({range:['Green','orange','blue','Red']}),
  
).render()
)}

function _checkinjournal_1(FileAttachment){return(
FileAttachment("CheckinJournal_1.csv").csv()
)}

function _checkinjournal(FileAttachment){return(
FileAttachment("CheckinJournal.csv").csv()
)}

function _untitledRecipe3(FileAttachment){return(
FileAttachment("Untitled recipe – 3.csv").csv()
)}

function _untitledRecipe2(FileAttachment){return(
FileAttachment("Untitled recipe – 2.csv").csv()
)}

function _untitledRecipe2_1(FileAttachment){return(
FileAttachment("Untitled recipe – 2_1.csv").csv()
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Untitled recipe_2.csv", {url: new URL("./files/aff2afeead307d4a655ec3cbfb2129f1e98f5facaf1dd2d88dc5fc75c556977df235fe9125e0c92629f39516dc4f8f9306bd7ffb4d879f782fbfcce56e164d26.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Apartments@2.csv", {url: new URL("./files/c165e3bffc9aee1ec6e8b4eb7aef4614741a81ff39107ef8b929e2378d69fffdb3a648211464370809152d3ce8a769fddfa15241b85d6983471132dbdd18ede3.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Untitled recipe – 2_1.csv", {url: new URL("./files/8fae8fcf0dadede5b432bfae9d9f5790a38c82f116705e95f8b7d028ff2f17c05399d7dd4147c5656bffb614c431dbc722f80ad7bb2548bfd0dff190f9bc0ec3.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Untitled recipe – 2.csv", {url: new URL("./files/2f040171e8428f4251157c231feff514fc431655e9fae36800c173c091cbbcd7599ba4f350999ebfef735fffd6d078c757a5b89ab005b3561233aba30834c666.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Untitled recipe – 3.csv", {url: new URL("./files/e71e471cdcbf2db7ec1a6c1833fc0da7c78d6f09b9a1fe53848d1e861b1bdf72864e8a02a1c8239e2af3f7768222ec1990c08e23472a112bba37e9442d457271.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["CheckinJournal.csv", {url: new URL("./files/b3737f4534aaedc5a2af1c40486de4f53bfd600dbc7139f28eac6d7e7a96d58e04442b92be5ec4a5f09840d06137000752deb3c46b0f0b04baa2559af264720e.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["CheckinJournal_1.csv", {url: new URL("./files/124fb6557b0616e411c1a7b990742340472b07da8a9677ddddfea4b4ced94466280a6205f996861ea495a34f35b84af7cef39e0d5e136f7bfd562402990767b3.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Pubs_1.csv", {url: new URL("./files/b7857044ced65878dfb62ff1f778b5761e81750ede70b5b06f1dada3b67e440cb4c032f55da0f6022aa1b08d7d5933f83f17ed8fc1722a85613ecea3cfed1b5c.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Restaurants.csv", {url: new URL("./files/31c2cf5036e99c4915ccdb2f6e6dd910030099b9ecaf4231594da80e3fc6a0dc43c717945f9cd65f35e7ec9217076591fc6178536363aaa2778c184138fce582.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Untitled recipe (1).csv", {url: new URL("./files/c9e282ad2ee95bc9eab97f9d9f66bd8b5e50daaddd291b059bf4d3c5fa2f63e5e51a8c8ab09c6997cf5c02a09e610f94c2bbaf7d1c7853da246a1ef407cd7de1.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Untitled recipe_2 (1).csv", {url: new URL("./files/ae708d90e2effab04cf73bdfb1704e126ad5a4c4520d0887fbc9d1c25a5e85657cc7946c23e58f5db61d03b2af939b1214897d01a8e0c88524b863297a97ce68.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["BaseMap.png", {url: new URL("./files/9d42a7789ccf3486ee77edc9d04a616674042ca68221a3f8884040699fe011e7256e66aba07461eb3dc17551d6a654de4828f9b7e160b6628cfff6741a322e73.png", import.meta.url), mimeType: "image/png", toString}],
    ["Pubs.csv", {url: new URL("./files/24ee0d4aa473ebb3b381f039a3c725e218c0c6c82a8d83b78af217d3ca40c60b7d73f7ca073027f78801e18a7a1fc94ab5009928998c5a8902904a1b5d869863.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Jobs.csv", {url: new URL("./files/9ec4d7d343dc51831017d9c861114e54f4bc0b9fc87f146be06fbc5e710fd7368059108508c59dfea49c7624ce9b6a1889bcdf03fe0b546545f728df8848768a.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  main.variable(observer("jobs")).define("jobs", ["FileAttachment"], _jobs);
  main.variable(observer("pubs")).define("pubs", ["FileAttachment"], _pubs);
  main.variable(observer("pubs_1")).define("pubs_1", ["FileAttachment"], _pubs_1);
  main.variable(observer("restaurants")).define("restaurants", ["FileAttachment"], _restaurants);
  main.variable(observer("untitledRecipe1")).define("untitledRecipe1", ["FileAttachment"], _untitledRecipe1);
  main.variable(observer("untitledRecipe_21")).define("untitledRecipe_21", ["FileAttachment"], _untitledRecipe_21);
  main.variable(observer("untitledRecipe_2")).define("untitledRecipe_2", ["FileAttachment"], _untitledRecipe_2);
  main.variable(observer()).define(["FileAttachment","vl","untitledRecipe1"], _9);
  main.variable(observer()).define(["FileAttachment","vl","pubs_1"], _10);
  main.variable(observer()).define(["FileAttachment","vl","untitledRecipe_2"], _11);
  main.variable(observer()).define(["apartments2"], _12);
  main.variable(observer("apartments2")).define("apartments2", ["FileAttachment"], _apartments2);
  main.variable(observer()).define(["vl","apartments2"], _14);
  main.variable(observer("checkinjournal_1")).define("checkinjournal_1", ["FileAttachment"], _checkinjournal_1);
  main.variable(observer("checkinjournal")).define("checkinjournal", ["FileAttachment"], _checkinjournal);
  main.variable(observer("untitledRecipe3")).define("untitledRecipe3", ["FileAttachment"], _untitledRecipe3);
  main.variable(observer("untitledRecipe2")).define("untitledRecipe2", ["FileAttachment"], _untitledRecipe2);
  main.variable(observer("untitledRecipe2_1")).define("untitledRecipe2_1", ["FileAttachment"], _untitledRecipe2_1);
  return main;
}

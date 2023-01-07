// function Func() {
//     fetch("./products.json")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => document.getElementById("details").innerHTML = 
//             (data.users[0].site + data.users[0].user));
//   }



    fetch("./products.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => document.getElementById("product-title").innerHTML = 
            (data.products[0].title + data.products[0].image )
            )
            .then(console.log);;
  
function solve() {
  let [generate,buy] =  [...document.querySelectorAll('button')];

  [...generate.querySelectorAll('button')][0]
    .addEventListener('click',()=>{
      let input = document.querySelectorAll('textarea')[0];
      let products = JSON.parse(input.value); 

      products.
          forEach(product=>{
              let {name, img,price,decFactor} = product;
              let htmlString = `<tr>\n
                                    <td>img src="${img}"></td>\n
                                    <td><p>${name}</p></td>\n
                                    <td>><p>${price}</p></td>\n
                                    <td>><p>${decFactor}</p></td>\n
                                    <td>><input type="checkbox" /></td>\n
                                  </tr>
                                `;
              document.querySelectorAll('tbody')[0].insertAdjacentHTML('beforeEnd',htmlString);

          })
			//needs to be rethinked in order to find a better solution
          input.value='';
    });

     buy.addEventListener('click',()=>{

    });
  
}
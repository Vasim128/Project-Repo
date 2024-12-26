let btn = document.querySelector(".btn");

btn.addEventListener("click",() =>{

    let container = document.createElement("div");
    container.classList.add("style4");

    let input1 =   document.createElement("input");
    input1.type = "checkbox";

    input1.classList.add("style3");

    container.append(input1);

    let task = document.querySelector(".tasks");

    let text = document.querySelector(".search-bar");
    let para = document.createElement("p");
    para.innerText = text.value;

    para.classList.add("style1");

    container.append(para);

    let div = document.createElement("div");
    div.classList.add("style2");

    let i = document.createElement("i");
    i.innerHTML = "<i class='fa-solid fa-trash-can'></i>";

    div.append(i);

    container.append(div);

    task.append(container);
    let icons = document.querySelectorAll("i");

    icons.forEach((x) =>{
        x.addEventListener("click",()=>{
           let parent = x.parentElement;
           let grand_parent = parent.parentElement;
           let grand_parent1 = grand_parent.parentElement;
          grand_parent1.parentElement.removeChild(grand_parent1);
        })
    })

})

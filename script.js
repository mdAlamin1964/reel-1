let box = document.getElementById('btn')
let gradientColor = `background: rgb(143,0,255);
background: linear-gradient(90deg, rgba(143,0,255,1) 0%, rgba(197,28,132,1) 53%, rgba(255,41,41,1) 100%); `

box.addEventListener('mouseover', ()=> {
    box.style = `
        width: 100%;
        ${gradientColor}
    `;
    box.innerHTML = 'Hello, User!'

    setTimeout(()=> {
        box.style = `
            height: 100%;
            width:100%;
            ${gradientColor}
        `;
    }, 600)

})


box.addEventListener('mouseout', ()=> {
    box.innerHTML = 'Hi!'
    box.style = `
        height: 40px;
        width: 100%;
        ${gradientColor}
    `;
    setTimeout(()=> {
        box.style = 'width: 100px'
    }, 600)
})
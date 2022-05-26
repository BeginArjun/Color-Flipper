/*Variables*/
const hex_val=[
    '0','1','2','3','4','5','6','7','8','9',
    'A','B','C','D','E','F'
]
const btn =document.getElementById("colorbtn")
const color =document.querySelector(".color-value")
/*Event Listeners*/
btn.addEventListener("click",function()
{
    const randomHexValue="#"+generateHex()
    document.body.style.backgroundColor=randomHexValue
    color.textContent=randomHexValue
})

/*Random Hex Value Generator*/
function generateHex()
{
    let hexVal=""
    for(let x=0;x<6;x++)
    {
        const randomNumber=Math.floor(Math.random()*hex_val.length)
        const randomChar=hex_val[randomNumber]
        hexVal=hexVal.concat(randomChar)
    }
    return hexVal    
}

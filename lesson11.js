// let nums=[3,4,7,3,6];
// let summ = 0;
// for (let i=0;i<nums.length;i++){
//     summ += nums[i]
//     console.log(summ);
// }
let colors=['white','red','blue','gray']
let i=0;
document.getElementById("div").addEventListener("click",function(){
    document.getElementById("div").style.backgroundColor=colors[i];
    i++;
    if (i >= colors.length)
    {
        i = 0;
    }
})
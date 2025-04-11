
export function random(len: number){
    let options = "amsdpjkjbvqfneojfpwepq1231451414"
    let ans = "";
    let length = options.length;
    for(let i=0;i<len;i++){
        ans +=options[Math.floor(Math.random() * length)]
    }
    return ans;
}
const dog = document.getElementById('dogs')
const dog_btn = document.getElementById('next_btn')

dog_btn.addEventListener('click', getRandomDogPic)

function getRandomDogPic() {
    fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(data => {
        if(data.url.includes('.mp4')){
            getRandomDogPic()
        }else{
            dog.innerHTML = `<img src = "${data.url}"/>`

        }
       
    })
}
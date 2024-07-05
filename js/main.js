

gameApi("mmorpg");

async function gameApi(Category) {
    // const api = await fetch(``);
    // const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2c31d4c1damshac8010717561b29p1b7e6ejsnf218b246f34e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`,options);
    const responseApi = await api.json();
    console.log(responseApi);
    Display(responseApi);
}


//*! active link
// ? forEach => call back function 
const links = document.querySelectorAll(".links a");
document.querySelectorAll(".links a").forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("hi");
        //  i want when i click anyone call back delete .active from class
        //document.querySelectorAll(".links a").classList.remove("active");
        document.querySelectorAll(".links a").forEach(function (otherLink) {
            otherLink.classList.remove("active");
        });
        link.classList.add("active");
        let category = link.getAttribute("data-category");
        console.log("Category:", category);
        gameApi(category);
    });
});


const Row = document.getElementById("Rows");

function Display(DataApi){
    let CartonaCard =``;
    for (let i=0 ; i< DataApi.length;i++){
        CartonaCard+=`
        <div class="col-lg-3">
                    <div class="card card-img-top  " style="width: 20rem;">
                        <img src="${DataApi[i].thumbnail}" class="object-fit-cover "
                            alt="...">
                        <div class="card-body">
                            <div
                                class="title d-flex justify-content-between small">
                                <h5 class="card-title">${DataApi[i].title}</h5>
                                <span
                                    class="p-2 bg-gray rounded-2">Free</span>
                            </div>
                            <p class="card-text opacity-50 ">
                                ${DataApi[i].short_description}
                            </p>
                        </div>
                        <div
                            class="card-footer d-flex justify-content-between small ">
                            <span class="rounded-2">${DataApi[i].genre}</span>
                            <span class="rounded-2 ">${DataApi[i].platform}</span>
                        </div>
                    </div>
                </div>
        `
    }
    Row.innerHTML=CartonaCard;

}
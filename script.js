const hodd = document.querySelector(".odd")
const heven = document.querySelector(".even")
const option = document.querySelector(".option")
const selection = document.querySelector(".selection")
const ev = document.querySelector(".Ev")
const od = document.querySelector(".Od")
const manhand = document.querySelector(".man")
const bothand = document.querySelector(".bot")
const btn = document.querySelectorAll(".btn")
const imgbot = bothand.querySelector("img")
const imgman = manhand.querySelector("img")
const score = document.querySelector(".score")
const manscore = document.querySelector(".man-score")
const botscore = document.querySelector(".bot-score")
let Tossvalue = -1
let whowon = 1
let time = 1
let userrun = 0
let botrun = 0
let mrun = 0
let bball = 0
let swap = 0
let tdisplay = 1
let target
hodd.onclick = () => {
    Tossvalue = 1
    option.style.opacity = 1;
    selection.style.display = "none"
    ev.innerHTML = `<h1>User</h1>`
    od.innerHTML = `<h1>Bot</h1>`
    document.querySelector(".toss").innerHTML = `<h1>Toss</h1>`
}
heven.onclick = () => {
    Tossvalue = 0
    option.style.opacity = 1;
    selection.style.display = "none"
    ev.innerHTML = `<h1>User</h1>`
    od.innerHTML = `<h1>Bot</h1>`
    document.querySelector(".toss").innerHTML = `<h1>Toss</h1>`
}
function handshake(index, random) {
    manhand.classList.add("shake")
    bothand.classList.add("shake")
    imgman.src = `images/${index}.png`;
    imgbot.src = `images/${random}.png`;
}
const toss = (man, bot, toss) => {
    if ((man + bot) % 2 == toss) {
        document.querySelector(".toss").innerHTML = `<h1>U have won the toss</h1>`
        ev.innerHTML = `<h1>Bat</h1>`
        od.innerHTML = `<h1>Bowl</h1>`
        ev.style.display = "block"
        od.style.display = "block"
        setTimeout(() => {
            ev.onclick = () => {
                score.style.opacity = 1;
                document.querySelector(".toss").style.display = "none"
                ev.innerHTML = `<h1>User</h1>`
                od.innerHTML = `<h1>Bot</h1>`
                manscore.innerHTML = `<span><h1 id="baname">Batting</h1></span><span><h1 id="sco">Score : ${0} runs</h1></span>`
                botscore.innerHTML = `<span><h1 id="boname">Bowling</h1></span><span><h1 id="bal">Balls : ${0} </h1></span>`
                whowon = 1
                console.log(whowon)
            }
            od.onclick = () => {
                score.style.opacity = 1;
                document.querySelector(".toss").style.display = "none"
                ev.innerHTML = `<h1>User</h1>`
                od.innerHTML = `<h1>Bot</h1>`
                manscore.innerHTML = `<span><h1 id="boname">Bowling</h1></span><span><h1 id="bal">Balls : ${0} </h1></span>`
                botscore.innerHTML = `<span><h1 id="baname">Batting</h1></span><span><h1 id="sco">Score : ${0} runs</h1></span>`
                whowon = 0
                console.log(whowon)
            }
            time = 0
        }, 1000)
    } else {
        document.querySelector(".toss").innerHTML = `<h1>U have lost the toss</h1>`
        let bottoss = Math.floor((Math.random() * 2) + 1)
        setTimeout(() => {
            if (bottoss == 1) {
                document.querySelector(".toss").style.display = "none"
                score.style.opacity = 1;
                manscore.innerHTML = `<span><h1 id="baname">Batting</h1></span><span><h1 id="sco">Score : ${0} runs</h1></span>`
                botscore.innerHTML = `<span><h1 id="boname">Bowling</h1></span><span><h1 id="bal">Balls : ${0} </h1></span>`
                whowon = 1
                console.log(whowon)

            } else {
                document.querySelector(".toss").style.display = "none"
                score.style.opacity = 1;
                manscore.innerHTML = `<span><h1 id="boname">Bowling</h1></span><span><h1 id="bal">Balls : ${0} </h1></span>`
                botscore.innerHTML = `<span><h1 id="baname">Batting</h1></span><span><h1 id="sco">Score : ${0} runs</h1></span>`
                whowon = 0
                console.log(whowon)
            }
            time = 0
        }, 900)
    }
    Tossvalue = 2
}
function mag(whowon) {
    document.querySelector(".toss").style.display = "block"
    document.querySelector(".toss").style.marginTop = "70px"
    if (whowon == 0) {
        document.querySelector(".toss").innerHTML = `<h1>U r out. Now bowl</h1>`
    } else {

        document.querySelector(".toss").innerHTML = `<h1>Taken. Now Bat</h1>`
    }
}
function result() {
    score.style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".toss").style.display = "block"
        document.querySelector(".toss").style.marginTop = "-50px"
        if (swap == 3) {
            if (whowon == 1) {
                document.querySelector(".toss").innerHTML = `<h1>U Won The Match!</h1>`
            } else {
                document.querySelector(".toss").innerHTML = `<h1>U Lost The Match!</h1>`
            }
        }
        else if (whowon == 0) {
            console.log(whowon)
            document.querySelector(".toss").innerHTML = `<h1>U Lost The Match!</h1>`
        } else if (whowon == 1) {
            console.log(whowon)
            document.querySelector(".toss").innerHTML = `<h1>U Won The Match!</h1>`
        } document.querySelector(".toss").innerHTML += `<button class="replay">Replay</button>`
        const replay = document.querySelector(".replay");
        replay.onclick = () => {
            window.location.reload()
        }
    }, 400)


}
const manbat = (userrun, botrun, run, ball) => {
    document.querySelector(".toss").style.display = "none"
    setTimeout(() => {
        if (whowon == 1) {
            if (parseInt(run) != parseInt(ball))
                mrun += parseInt(run)
            bball += 1
        } else {
            if (parseInt(run) != parseInt(ball))
                mrun += parseInt(ball)
            bball += 1
        }
        if (mrun > target && (swap == 1 || swap == 2)) {
            result()
            swap = 3
            return
        }
        if (parseInt(run) == parseInt(ball)) {
            target = mrun
            if (whowon == 1) {
                whowon = 0
            } else if (whowon == 0) {
                whowon = 1
            }
            mrun = 0
            bball = 0
            swap += 1
            if (swap == 3) {
                score.style.opacity = 0;
                result()
            }
            tdisplay = 0
        }
        if (swap == 1) {
            sco = document.getElementById("bal")
            bal = document.getElementById("sco")
            boname.textContent = "Batting"
            baname.textContent = "Bowling"
            setInterval(mag(whowon), 200)
            swap = 2
        } if (tdisplay == 0) {
            sco.innerHTML = "Score : " + `${mrun}` + " runs" + "\n" + "Target: " + `${target}`
        } else {
            sco.innerHTML = "Score : " + `${mrun}` + " runs"
        }
        bal.innerHTML = "Balls : " + `${bball}`;

    }, 400)
}
btn.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let index = e.target.dataset.num
        let random = Math.floor(Math.random() * 6) + 1

        if (Tossvalue == 0 || Tossvalue == 1) {
            handshake(index, random)
            setTimeout(() => {
                manhand.classList.remove("shake")
                bothand.classList.remove("shake")
                imgman.src = `images/0.png`;
                imgbot.src = `images/0.png`;
                toss(parseInt(index), parseInt(random), Tossvalue)
            }, 600)
        } if (Tossvalue == 2 && time == 0 && swap != 3) {
            let sco = document.getElementById("sco")
            let bal = document.getElementById("bal")
            let boname = document.getElementById("boname")
            let baname = document.getElementById("baname")

            setTimeout(() => {
                handshake(index, random)
            }, 400)
            manbat(userrun, botrun, index, random)
            manhand.classList.remove("shake")
            bothand.classList.remove("shake")

        }


    })
})

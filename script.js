const choosenSex = document.querySelector('input');
const BUTTON = document.querySelector(`button`);


BUTTON.addEventListener("click", calculateBMI);

function calculateBMI() 
{
    const WEIGHT = document.querySelector(`.inputWeight`);
    const GROWTH = document.querySelector(`.inputGrowth`);
 
    
    const BMI = Number(WEIGHT.value)/(Number(GROWTH.value)*Number(GROWTH.value))*10000;

    const bmiInHtml = document.querySelector('.bmi')
    checkYourBodyCondition(BMI);
    bmiInHtml.innerHTML=`Twoje BMI to: ` + BMI.toFixed(2) + `, oznacza to `;
    
    const bodyCondition = checkYourBodyCondition(BMI);
    bmiInHtml.innerHTML+=` ` + bodyCondition;
    bmiInHtml.style.color='#202020';

    showBannerAd();
}

function checkYourBodyCondition(BMI){
    console.log(BMI);
    let bodyCondition = "";
    if(BMI < 16){
        bodyCondition = "wyglodzenie.".fontcolor("#990000");
        console.log("wyglodzenie");
    }
    else if((BMI > 16) && (BMI < 16.99)){
        bodyCondition = "wychudzenie.".fontcolor("#cc0000");
        console.log("wychudzenie");
    }
    else if((BMI > 17) && (BMI < 18.49)){
        bodyCondition = "niedowagę.".fontcolor("#ff0000");
        console.log("niedowaga");
    }
    else if((BMI > 18.5) && (BMI < 24.99)){
        bodyCondition = "wartość prawidłową.".fontcolor("green");
        console.log("wartość prawidłowa");
    }
    else if((BMI > 25) && (BMI < 29.99)){
        bodyCondition = "nadwagę.".fontcolor("#ff0000");
        console.log("nadwaga");
    }
    else if((BMI > 30) && (BMI < 34.99)){
        bodyCondition = "I stopień otyłości.".fontcolor("#cc0000");
        console.log("I stopień otyłości");
    }
    else if((BMI > 35) && (BMI < 39.99)){
        bodyCondition = "II stopień otyłości.".fontcolor("#990000");
        console.log("II stopień otyłości");
    }
    else if(BMI > 40){
        bodyCondition = "otyłość skrajną.".fontcolor("#660000");
        console.log("otyłość skrajna");
    }
    return bodyCondition;
}

/* adding class "woman" means that choosen sex is woman */
choosenSex.addEventListener("click", (e) => {e.target.classList.toggle("woman");})

function showBannerAd() {
    const banner = document.querySelector(`.banner`);
    if(choosenSex.classList.contains(`woman`)){
    banner.innerHTML = "Popraw swoją sylwetkę";
    }
    else{
        banner.innerHTML = "Zwiększ siłę";
    }
}
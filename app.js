const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")



const products = [
    {
        id: 1,
        title: "Air Force",
        price: 9999,
        colors: [
            {
                code: "black",
                img: "img/air.png",
            },
            {
                code: "darkblue",
                img: "img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 12999,
        colors: [
            {
                code: "lightgray",
                img: "img/jordan.png",
            },
            {
                code: "green",
                img: "img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 8999,
        colors: [
            {
                code: "lightgray",
                img: "img/blazer.png",
            },
            {
                code: "green",
                img: "img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 10999,
        colors: [
            {
                code: "black",
                img: "img/crater.png",
            },
            {
                code: "lightgray",
                img: "img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 7999,
        colors: [
            {
                code: "gray",
                img: "img/hippie.png",
            },
            {
                code: "black",
                img: "img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the chosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "Rs" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})


currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const payButton = document.querySelector(".payButton");

productButton.addEventListener("click", () => {
    payment.style.display = "flex"
})

payButton.addEventListener("click", () => {
    payment.style.display = "none"
})

close.addEventListener("click", () => {
    payment.style.display = "none"
})

console.log(wrapper)

var button = document.getElementById("payButton");

//button.addEventListener("click", function () {
//  alert("Successfully purchased! Do visit again! ");
// });


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("payButton").addEventListener("click", function (event) {
        // Prevent form submission
        event.preventDefault();

        // Perform validations
        var nameInput = document.getElementById("name");
        var phoneInput = document.getElementById("phone");
        var cardNumberInput = document.getElementById("cardNumber");
        var expiryMonthInput = document.getElementById("expiryMonth");
        var expiryYearInput = document.getElementById("expiryYear");
        var cvvInput = document.getElementById("cvv");

        var validationFailed = false; // Flag to track validation status

        if (!nameInput.checkValidity()) {
            alert("Please enter a valid name and surname.");
            validationFailed = true;
        }

        if (!phoneInput.checkValidity()) {
            alert("Please enter a valid phone number.");
            validationFailed = true;
        }

        if (!cardNumberInput.checkValidity()) {
            alert("Please enter a valid card number.");
            validationFailed = true;
        }

        if (expiryMonthInput.value < 1 || expiryMonthInput.value > 12) {
            alert("Please enter a valid expiry month(1-12).");
            validationFailed = true;
        }

        if (expiryYearInput.value.length !== 4 || isNaN(expiryYearInput.value)) {
            alert("Please enter a valid expiry year (4 digits).");
            validationFailed = true;
        }

        if (cvvInput.value.length !== 3 || isNaN(cvvInput.value)) {
            alert("Please enter a valid CVV (3 digits).");
            validationFailed = true;
        }

        // If any validation failed, do not proceed with form submission
        if (validationFailed) {
            return;
        }

        // If all validations pass, proceed with form submission
        alert("Successfully purchased! Do visit again!");
        // Add code to submit the form or perform further actions here
    });
});



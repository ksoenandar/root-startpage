/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Zellerite";

const CARDS = [
  {
    name: "Atlas",
    icon: "",
    link: "https://team.atlassian.com/updates/projects",
    img: "../root-startpage/icons/Atlas.png"
  },
  {
    name: "Product Discovery",
    icon: "",
    link: "https://npco-dev.atlassian.net/jira/polaris/projects/ZPD/ideas",
    img: "../root-startpage/icons/jira_product_discovery.png"
  },

  {
    name: "Key Dates",
    icon: "",
    link: "https://www.figma.com/file/gy1vDb4FsZWL0V6Dz2QgY8/Key-Product-Dates?node-id=0%3A1&viewport=813%2C700%2C0.12&t=aUbBgbPOtMfhVwRP-11",
    img: "../root-startpage/icons/calendar.png"
  },
  {
    name: "Cards of Interest",
    icon: "",
    link: "https://npco-dev.atlassian.net/wiki/spaces/PROD/pages/1413808314/Cards+of+Interest",
    img: "../root-startpage/icons/matpriskollen.png"
  },
  {
    name: "Product Confluence",
    icon: "",
    link: "https://npco-dev.atlassian.net/wiki/spaces/PROD/overview?homepageId=48529540",
    img: "../root-startpage/icons/confluence.png"
  },
  {
    name: "Jira",
    icon: "",
    link: "https://npco-dev.atlassian.net/jira/projects",
    img: "../root-startpage/icons/jira.png"
  },
  {
    name: "JIRA Issue Search",
    icon: "",
    link: "https://npco-dev.atlassian.net/issues/?jql=",
    img: "../root-startpage/icons/clip_stack.png"
  },
  {
    name: "Sprint Planning",
    icon: "",
    link: "https://npco-dev.atlassian.net/wiki/spaces/PROD/pages/1203666949/Sprint+Planning",
    img: "../root-startpage/icons/serenity_alt.png"
  },
  {
    name: "Releases",
    icon: "",
    link: "https://npco-dev.atlassian.net/wiki/spaces/PROD/pages/1266122826/Release+Planning",
    img: "../root-startpage/icons/hyperion.png"
  },
  {
    name: "Hubspot",
    icon: "",
    link: "https://app.hubspot.com/",
    img: "../root-startpage/icons/hubspot.png"
  },
  {
    name: "Zeller Dev",
    icon: "",
    link: "https://dashboard.myzeller.dev/portal/overview",
    img: "../root-startpage/icons/zeller_dev.png"
  },
  {
    name: "Zeller Prod",
    icon: "",
    link: "https://dashboard.myzeller.com/portal/overview",
    img: "../root-startpage/icons/zeller_prod.png"
  },
  {
    name: "Trello",
    icon: "",
    link: "https://trello.com/b/OgDVzuu2/zeller-development",
    img: "../root-startpage/icons/trello.png"
  },
  {
    name: "Productboard",
    icon: "",
    link: "https://zeller.productboard.com",
    img: "../root-startpage/icons/productboard.png"
  },
  {
    name: "Periscope Data",
    icon: "",
    link: "https://app.periscopedata.com/app/myzeller/",
    img: "../root-startpage/icons/periscope.png"
  },
    {
    name: "Mixpanel",
    icon: "",
    link: "https://mixpanel.com/project/2784629/view/3319469/app/dashboards#id=3791461",
    img: "../root-startpage/icons/avanza_alt.png"
  },
  {
    name: "Tracking Plan",
    icon: "",
    link: "https://docs.google.com/spreadsheets/d/1MneOh6J_G9iBIX577SRIbdymQXaXBSsCrWkWW3GPafs/edit#gid=57574399",
    img: "../root-startpage/icons/everyday.png"
  }, 
  {
    name: "Lever",
    icon: "",
    link: "https://hire.lever.co/",
    img: "../root-startpage/icons/contacts_alt_2.png"
  },  
  {
    name: "Native Design System",
    icon: "",
    link: "https://npco-dev.atlassian.net/jira/software/c/projects/NDS/boards/105",
    img: "../root-startpage/icons/a_1gallery.png"
  },  
  {
    name: "Payment App",
    icon: "",
    link: "https://npco-dev.atlassian.net/jira/software/c/projects/PA/boards/102",
    img: "../root-startpage/icons/money_lover.png"
  },  
  {
    name: "Payment Module",
    icon: "",
    link: "https://npco-dev.atlassian.net/jira/software/c/projects/PM/boards/106",
    img: "../root-startpage/icons/gravitybox_r.png"
  },  
  {
    name: "Zeller Tablet",
    icon: "",
    link: "https://npco-dev.atlassian.net/jira/software/c/projects/CPOC/boards/79",
    img: "../root-startpage/icons/google_pay_alt.png"
  },  
];

/* -------------------------------------------------------- */

/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const updateDate = () => {
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Time Variables
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Date Variables
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

  // Update the Time
  currentTime.innerHTML = `${
    currentHour % 12 == 0 ? "12" : currentHour % 12
  }:${currentMinute} ${currentHour > 11 ? "PM" : "AM"}`;

  // Update the Date
  currentDate.innerHTML = `${DAYS[currentDay]} ${currentNumber}, ${MONTHS[currentMonth]} ${currentYear}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};


/******************/
/* ICON CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon;

    if (card.icon === "") {
      currentCardIcon = document.createElement("p");
      var useElem = document.createElement("img");
      useElem.setAttribute("src", card.img);

      currentCardIcon.appendChild(useElem);     
    } else {
   //   currentCardIcon = document.createElement("i");
   //   currentCardIcon.classList.add(card.icon);
    }


    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

///******************/
///* CARDS FUNCTION */
///******************/
//
//const printCards = () => {
//  for (const card of CARDS) {
//    let currentCard = document.createElement("a");
//    let currentCardImage = document.createElement("img");
//    currentCardImage.appendChild(document.createTextNode(card.image));
//    let currentCardText = document.createElement("p");
//    currentCardText.appendChild(document.createTextNode(card.name));
//    let currentCardEmoji = document.createElement("p");
//    currentCardEmoji.appendChild(document.createTextNode(card.emoji));
//    //currentCardEmoji.classList.add(card.emoji);
//    //let currentCardIcon = document.createElement("i");
//    //currentCardIcon.classList.add(card.icon);
//
//    // Style the Card Element
//    currentCard.classList.add("card");
//    currentCard.href = card.link;
//
//    // Style the Card Image
//    currentCardImage.classList.add("card__image");
//    currentCardImage.src = card.image;
//
//    // Style the Emoji
//    currentCardEmoji.classList.add("card__emoji");    
//
//    // Style the Icon
//    //currentCardIcon.classList.add("card__icon");
//
//    // Style the Text
//    currentCardText.classList.add("card__name");
//
//    //currentCard.append(currentCardIcon);
//    currentCard.append(currentCardEmoji);
//    currentCard.append(currentCardText);
//    cardContainer.appendChild(currentCard);
//  }
//};

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();

$(document).ready(function() {
   var accordionTitle = $('.accordion-title');
   var accordionText = $('.accordion-text');
   var speed = 300;

   accordionTitle.on('click', function() {
       var thisAccordion = $(this);
       var isActive = thisAccordion.hasClass('active');

       if( isActive ) {
           thisAccordion
               .removeClass('active')
               .parent().find('.accordion-text').slideUp(speed);
       } else {
           accordionTitle.removeClass('active');
           accordionText.slideUp(speed);
           thisAccordion
               .addClass('active')
               .parent().find('.accordion-text').slideDown(speed);
       }
   });

   if($(window).width() >= 1024){
    accordionTitle.first().click();
   }
});

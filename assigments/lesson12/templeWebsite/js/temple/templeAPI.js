

// apiURL = 'https://nathan-byui-api.herokuapp.com/temples/'
apiURL = 'https://nathansbradshaw.github.io/temples2.json'

async function myFetch() {
   let response = await fetch(apiURL)
   if (!response.ok) {
     throw new Error(`HTTP error! status : ${response.status}`);
   }
   return await response.json();
 }

fetch(apiURL)

   .then((response) => {
      return response.json();
   })
   .then((templeObject) => {
      console.log(templeObject)
      for (let i = 0; i < templeObject.length; i++ ) {

         // Rexburg
         let rexburgName = document.querySelector('.rexburgName');
         rexburgName.innerHTML = templeObject[1].name;

         let rexburgStreet = templeObject[1].address1;
         let rexburgState = templeObject[1].state;
         let rexburgCity = templeObject[1].city;
         let rexburgZipCode = templeObject[1].zip;

         const rexburgFullAdress = `${rexburgStreet}, ${rexburgCity}, ${rexburgState} ${rexburgZipCode}`;

         let rexburgPhone = document.querySelector('.rexburgPhone');
         rexburgPhone.innerHTML = templeObject[1].phone;

         let rexburgAddress1 = document.querySelector('.rexburgAddress');
         rexburgAddress1.innerHTML = rexburgFullAdress;

         let rexburgServices1 = templeObject[1].services[0];
         let rexburgServices2 = templeObject[1].services[1];
         let rexburgServices3 = templeObject[1].services[2];
         let rexburgServices4 = templeObject[1].services[3];  

         const rexburgFullServices = `${rexburgServices1},
                                       ${rexburgServices2},
                                       ${rexburgServices3},
                                       ${rexburgServices4}`

         let rexburgServices = document.querySelector('.rexburgServices');
         rexburgServices.innerHTML = rexburgFullServices;

         let rexburgHistory = document.querySelector('.rexburgHistory');
         rexburgHistory.innerHTML = templeObject[1].milestones;

         let rexburgFunFact1 = document.querySelector('.rexburgFunFact1');
         rexburgFunFact1.innerHTML = templeObject[1].Summary.facts[0];

         let rexburgFunFact2 = document.querySelector('.rexburgFunFact2');
         rexburgFunFact2.innerHTML = templeObject[1].Summary.facts[1];

         let rexburgFunFact3 = document.querySelector('.rexburgFunFact3');
         rexburgFunFact3.innerHTML = templeObject[1].Summary.facts[2];
         

         // Idaho Falls
         let idahoFallsName = document.querySelector('.idahoFallsName');
         idahoFallsName.innerHTML = templeObject[0].name;

         let idahoFallsStreet = templeObject[0].address1;
         let idahoFallsState = templeObject[0].state;
         let idahoFallsCity = templeObject[0].city;
         let idahoFallsZipCode = templeObject[0].zip;

         const idahoFallsFullAdress = `${idahoFallsStreet}, ${idahoFallsCity}, ${idahoFallsState} ${idahoFallsZipCode}`;

         let idahoFallsPhone = document.querySelector('.idahoFallsPhone');
         idahoFallsPhone.innerHTML = templeObject[0].phone

         let idahoFallsAddress1 = document.querySelector('.idahoFallsAddress');
         idahoFallsAddress1.innerHTML = idahoFallsFullAdress;

         let idahoFallsServices1 = templeObject[0].services[0];
         let idahoFallsServices2 = templeObject[0].services[1];
         let idahoFallsServices3 = templeObject[0].services[2];
         let idahoFallsServices4 = templeObject[0].services[3];  

         const idahoFallsFullServices = `${idahoFallsServices1},
                                       ${idahoFallsServices2},
                                       ${idahoFallsServices3},
                                       ${idahoFallsServices4}`

         let idahoFallsServices = document.querySelector('.idahoFallsServices');
         idahoFallsServices.innerHTML = idahoFallsFullServices;

         let idahoFallsHistory = document.querySelector('.idahoFallsHistory');
         idahoFallsHistory.innerHTML = templeObject[0].milestones;

         let idahoFallsFunFact1 = document.querySelector('.idahoFallsFunFact1');
         idahoFallsFunFact1.innerHTML = templeObject[0].Summary.facts[0];

         let idahoFallsFunFact2 = document.querySelector('.idahoFallsFunFact2');
         idahoFallsFunFact2.innerHTML = templeObject[0].Summary.facts[1];

         let idahoFallsFunFact3 = document.querySelector('.idahoFallsFunFact3');
         idahoFallsFunFact3.innerHTML = templeObject[0].Summary.facts[2];


         //Kansas City
         let kansasCityName = document.querySelector('.kansasCityName');
         kansasCityName.innerHTML = templeObject[2].name;

         let kansasCityStreet = templeObject[2].address1;
         let kansasCityState = templeObject[2].state;
         let kansasCityCity = templeObject[2].city;
         let kansasCityZipCode = templeObject[2].zip;

         const kansasCityFullAdress = `${kansasCityStreet}, ${kansasCityCity}, ${kansasCityState} ${kansasCityZipCode}`;

         let kansasCityPhone = document.querySelector('.kansasCityPhone');
         kansasCityPhone.innerHTML = templeObject[2].phone;

         let kansasCityAddress1 = document.querySelector('.kansasCityAddress');
         kansasCityAddress1.innerHTML = kansasCityFullAdress;

         let kansasCityServices1 = templeObject[2].services[0];
         let kansasCityServices2 = templeObject[2].services[1];
         let kansasCityServices3 = templeObject[2].services[2];
         let kansasCityServices4 = templeObject[2].services[3];  

         const kansasCityFullServices = `${kansasCityServices1},
                                       ${kansasCityServices2},
                                       ${kansasCityServices3},
                                       ${kansasCityServices4}`        

         let kansasCityServices = document.querySelector('.kansasCityServices');
         kansasCityServices.innerHTML = kansasCityFullServices;

         let kansasCityHistory = document.querySelector('.kansasCityHistory');
         kansasCityHistory.innerHTML = templeObject[2].milestones;

         let kansasCityFunFact1 = document.querySelector('.kansasCityFunFact1');
         kansasCityFunFact1.innerHTML = templeObject[2].Summary.facts[0];

         let kansasCityFunFact2 = document.querySelector('.kansasCityFunFact2');
         kansasCityFunFact2.innerHTML = templeObject[2].Summary.facts[1];

         let kansasCityFunFact3 = document.querySelector('.kansasCityFunFact3');
         kansasCityFunFact3.innerHTML = templeObject[2].Summary.facts[2];



         // Oklahoma City
         let oklahomaCityName = document.querySelector('.oklahomaCityName');
         oklahomaCityName.innerHTML = templeObject[3].name;

         let oklahomaCityStreet = templeObject[3].address1;
         let oklahomaCityState = templeObject[3].state;
         let oklahomaCityCity = templeObject[3].city;
         let oklahomaCityZipCode = templeObject[3].zip;

         const oklahomaCityFullAdress = `${oklahomaCityStreet}, ${oklahomaCityCity}, ${oklahomaCityState} ${oklahomaCityZipCode}`;

         let oklahomaCityPhone = document.querySelector('.oklahomaCityPhone');
         oklahomaCityPhone.innerHTML = templeObject[3].phone;

         let oklahomaCityAddress1 = document.querySelector('.oklahomaCityAddress');
         oklahomaCityAddress1.innerHTML = oklahomaCityFullAdress;

         let oklahomaCityServices1 = templeObject[2].services[0];
         let oklahomaCityServices2 = templeObject[2].services[1];
         let oklahomaCityServices3 = templeObject[2].services[2];
         let oklahomaCityServices4 = templeObject[2].services[3];  

         const oklahomaCityFullServices = `${oklahomaCityServices1},
                                       ${oklahomaCityServices2},
                                       ${oklahomaCityServices3},
                                       ${oklahomaCityServices4}` 

         let oklahomaCityServices = document.querySelector('.oklahomaCityServices');
         oklahomaCityServices.innerHTML = oklahomaCityFullServices

         let oklahomaCityHistory = document.querySelector('.oklahomaCityHistory');
         oklahomaCityHistory.innerHTML = templeObject[3].milestones;

         let oklahomaCityFunFact1 = document.querySelector('.oklahomaCityFunFact1');
         oklahomaCityFunFact1.innerHTML = templeObject[3].Summary.facts[0];

         let oklahomaCityFunFact2 = document.querySelector('.oklahomaCityFunFact2');
         oklahomaCityFunFact2.innerHTML = templeObject[3].Summary.facts[1];

         }

   });


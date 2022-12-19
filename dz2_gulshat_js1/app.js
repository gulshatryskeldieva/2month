//
var bankCard = {
    CardNumber: "4169585350903067",
    ExpiryDate: "09/26",
    OwnerName: "Gulshat",
    CardType: "VISA",
    CvcNumber: 345,
//
    BankBranch: {
        Code: 12345,
        Name: "Optima",
        WorkingHours: "Monday-Saturday 9:00 - 18:00",
        NightTime: false,
    },
//
    BankAddress: {
        City: "Bishkek",
        Street: "Logvinenko",
        Building: "67",
    },
}
//
var moneyTransferSystem = "Contact";

switch (moneyTransferSystem) {
    case "RIA":
        console.log("Money has been sent by RIA");
        break;
    case "Unistream":
        console.log("Money has been sent by Unistream");
        break;
    case "MoneyGram":
        console.log("Money has been sent by MoneyGram");
        break;
    case "Contact":
        console.log("Money has been sent by Contact");
        break;
    default:
        console.log("Unknown system");

}
//

var number = 5

switch (number) {
    case 1:
        console.log("I");
        break;
    case 2:
        console.log("II");
        break;
    case 3:
        console.log("III");
        break;
    case 4:
        console.log("IV");
        break;
    case 5:
        console.log("V");
        break;
    case 6:
        console.log("VI");
        break;
    case 7:
        console.log("VII");
        break;
    case 8:
        console.log("VIII");
        break;
    case 9:
        console.log("IX");
        break;
    default:
        console.log("error");
}

//

var customerType = 2;

console.log(
    customerType === 1 ? "Физическое лицо": "Юридическое лицо")



function extractEmailInformation(email) {

    const parts = email.split("@");
    const userName = parts[0];
    const domain = parts[1];
const isBrazilian = domain.endsWith(".br");

    return {userName, domain, isBrazilian}
}

const str = "joao.silva23@yahoo.com.br";
const result = str.split("@");

console.log(result);

const emailInfo = extractEmailInformation("joao.silva23@yahoo.com.br");

console.log("Usuario: ", emailInfo.userName);
console.log("Dominio: ", emailInfo.domain);
console.log("Brasileiro: ", emailInfo.isBrazilian ? "Sim" : "Não");
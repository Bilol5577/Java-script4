let name1 = prompt('Ismingizni kiriting');

let harf = prompt('Bironta harf kiriting');


if (name1.includes(harf)) {
    alert(`'${name1}' ismining ichida '${harf}' harfi mavjud.`);
} else {
    alert(`'${name1}' ismining ichida '${harf}' harfi mavjud emas.`);
}
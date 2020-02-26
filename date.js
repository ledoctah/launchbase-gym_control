//1573568256893

module.exports = function age(timestamp) {
    const today = new Date();
    const birth = new Date(timestamp);

    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    const day = today.getDate() - birth.getDate();

    if(month < 0 || (month == 0 && day <= 0)) {
        age = age - 1;
    }

    return age;
}
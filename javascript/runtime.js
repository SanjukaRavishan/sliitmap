function getInputValue() {

    const code = [
        'b501',
        'b502',
        'a304',
        'a504',
        'f301',
        'f303',
        'f302',
        'a506',
        'a505',
        'a303',
        'a507',
        'a503',
        'f503',
        'f502',
        'f601',
        'b401',
        'b402',
        'b403',
        'a405',
        'a406',
        'a412',
        'a601',
        'f304',
        'f305',
        'a604',
        'a603',
        'a602',
        'a410',
        'a411',
        'f1301',
        'f1302',
        'f1305',
        '13l_d',
        'f1306',
        'f1307',
        'f1308',
        'f1303',
        'f1304'

    ];

    const location = [
        '5th floor Main Building',
        '5th floor Main Building',
        '3rd floor Main Building',
        '5th floor Main Building',
        '5th floor New Building',
        '3rd floor New Building',
        '3rd floor New Building',
        '5th floor Main Building',
        '5th floor Main Building',
        '3rd floor Main Building',
        '5th floor Main Building',
        '5th floor Main Building',
        '5th floor New Building',
        '5th floor New Building',
        '6th floor New Building',
        '4th floor Main Building',
        '4th floor Main Building',
        '4th floor Main Building',
        '4th floor Main Building',
        '4th floor Main Building',
        '4th floor Main Building',
        '6th floor Main Building',
        '3rd floor New Building',
        '3rd floor New Building',
        '6th floor Main Building',
        '6th floor Main Building',
        '6th floor Main Building',
        '4th floor Main Building',
        '4th floor Main Building',
        '13th floor New Building',
        '13th floor New Building',
        '13th floor New Building',
        '13th floor New Building',
        '13th floor New Building',
        '13th floor New Building',
        '13th floor New Building',
        '13th floor New Building',
        '13th floor New Building'
    ];

    let value = document.getElementById("userInput").value;
    let inputValue = value.toLowerCase();

    if (code.includes(inputValue)) {
        let index = code.indexOf(inputValue);
        locationValue = location[index];
        alert(locationValue + ' playan');
    } else {
        alert("wrong location code!")
    }


}


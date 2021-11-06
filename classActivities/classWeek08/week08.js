function handleClick() {
    console.log('click');
    let f = awesomeForm;
    let firstName = awesomeForm.fname.value;
    let lastName = awesomeForm.lname.value;
    let p = document.createElement('p');
    p.innerHTML = `Hello ${firstName}`;
    p.innerHTML = 'Hello ' + firstName + ' ' + lastName
    document.body.appendChild(awesomeForm.fname);
};
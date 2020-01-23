

document.getElementById('btnSubmit').addEventListener('click', () => {
  let email = document.getElementById('inputEmail').value;
  let name = document.getElementById('inputName').value;
  let salary = parseFloat(document.getElementById('inputSalary').value);
  email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ?  email : '';
  
  document.getElementById('inputEmail').value = '';
  document.getElementById('inputName').value = '';
  document.getElementById('inputSalary').value = '';

  if (email && name && salary) {
    
    $.ajax({
      url : `http://localhost:5000/emp`,
      type : 'POST',
      dataType:'json',
      data : {
        name: name,
        email: email,
        salary: salary
      },
      success : (data) => { 
        alert(`${data.message}`); 
        console.log(data);   
      },
      error : (error) =>
      {   
          if(error.status === 409) {
            alert(`${error.responseJSON.message}`);
          } else {
            alert('Error');
          }
          console.log(error);
      }
    });
  } else {
    alert('Invalid input');
  }
  
});

document.getElementById('btnSearch').addEventListener('click', () => {
  
  const salary = parseFloat(document.getElementById('searchSalary').value);
  const option = document.getElementById('compareOption');
  const selectedOption = option.options[option.selectedIndex].value;
  const table = document.getElementById('emp-details');
  table.innerHTML = '';
  document.getElementById('searchSalary').value = '';

  if(salary && selectedOption){
    $.ajax({
      url : `http://localhost:5000/emp/${selectedOption}/${salary}`,
      type : 'GET',
      dataType:'json',
      success : (data) => {              
          if(data.count === 0) {
            alert('No Employee found');
          } else {
            data.employees.forEach((emp, count)  => {
              const row = table.insertRow(count);
              row.insertCell(0).innerHTML = emp.name;
              row.insertCell(1).innerHTML = emp.email;
            });
          }
      },
      error : (error) =>
      {   
          alert('Internal server error');
          console.log(error);
      }
    });

  } else {
    alert('Invalid input');
  }

});
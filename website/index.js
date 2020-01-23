

document.getElementById('btnSubmit').addEventListener('click', () => {
  let email = document.getElementById('inputEmail').value;
  let name = document.getElementById('inputName').value;
  let salary = parseFloat(document.getElementById('inputSalary').value);
  email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ?  email : '';
    

  if (email && name && salary) {
    console.log(`${email} , ${name} , ${salary}`);
    


  } else {
    alert('Invalid input');
  }
  
});

document.getElementById('btnSearch').addEventListener('click', () => {
  



  $.ajax({
    url : 'http://localhost:5000/emp/less/10000',
    type : 'GET',
    dataType:'json',
    success : (data) => {              
        console.log(data);
    },
    error : (request,error) =>
    {   
        alert('Error');
        console.log(request, error);
    }
  });
})
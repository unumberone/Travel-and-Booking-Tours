

export const saveDataToLocal = (data) => {
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    existingData.push(data);
    localStorage.setItem('formData', JSON.stringify(existingData));
  };
  
  export const handleFormSubmit = (event) => {
    event.preventDefault(); // Ngăn hành vi gửi dữ liệu của biểu mẫu
  
    const formData = new FormData(event.target);
  
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      numberOfPeople: formData.get("numberOfPeople"),
      date: formData.get("date"),
      numberOfTicket: formData.get("numberOfTicket"),
      message: formData.get("message"),
    };
  
    console.log("Form Data:", data);
  
  
    saveDataToLocal(data);
  
 
  };
  
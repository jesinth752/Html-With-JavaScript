
let selectrow=null;
let name=document.getElementById('name');
let set=0,setph=0,setc=0;
const ClearAllValues = () => {
    
    document.getElementById('name').value="";
    document.getElementById('phno').value="";
    document.getElementById('city').value="";
    document.getElementById('address').value="";
   
   

}
const valiadd=()=>
{
    document.getElementById('Emsg').style.display="none";
    document.getElementById('address').style.border="2px solid #04AA6D";
    

}
const validate=(v)=>
{ 
    document.getElementById('Emsg').style.display="none";
    console.log("validatename");
    console.log(v.value)
    if(v.id=="name")
    {
      for(let i=0;i<v.value.length;i++)
      {
       if(v.value.charAt(i)>='a' && v.value.charAt(i)<='z' || v.value.charAt(i)>='A' && v.value.charAt(i)<='Z'||v.value.charAt(i)==32)
       {
        console.log('set0')
        set=0;
        document.getElementById('name').style.border="2px solid #04AA6D";
      }
      else 
      {
          console.log('set1')
         set++;
         document.getElementById('name').style.border="2px solid red";
         }
       }
    }
    else if(v.id=="city")
    {
        const date=new Date()
        let currentdate=new Date(document.getElementById('city').value);

      if(v.value!=""&& currentdate<date )
       {
        console.log(Date());
        console.log('set0')
        setc=0;
        document.getElementById('city').style.border="2px solid #04AA6D";
       }
       else 
        {
          console.log('set1')
         setc++;
         document.getElementById('city').style.border="2px solid red";
         }
       
    }
    
}
const validateph=(v)=>
{ 
    document.getElementById('Emsg').style.display="none";
    console.log("validateph");
    console.log(v.value)
    for(let i=0;i<v.value.length;i++)
    {
        if(v.value.charAt(i)>='0' && v.value.charAt(i)<='9')
         {
           if(v.value.length==10)
           {

           console.log('setph0')
           setph=0;
          document.getElementById('phno').style.border="2px solid #04AA6D";
         }
    }
     else
     {
         console.log('set1ph')
         setph++;
         document.getElementById('phno').style.border="2px solid red";
     }
    }
}


const AddValue = () => {

    let dataArray=readData();
    if(selectrow==null) 
    {
        let name=document.getElementById('name').value;
        let phno=document.getElementById('phno').value;
        let address=document.getElementById('address').value;
        let city=document.getElementById('city').value;
        
        if(name!=="" && phno!=="" && address!=="" && city!=="")
        {
             if(set==0  && setph==0 && setc==0)
             {
             insertDataTotable(dataArray);
             ClearAllValues();
             document.getElementById('Emsg').style.display="none";
             }
             else
             
             {
                document.getElementById('Emsg').style.display="flex";
                document.getElementById('alertmsg').innerHTML="check All Fields are Filled with Appropriate Information";
                
             }
            
        
        }
        else
        {
            document.getElementById('Emsg').style.display="flex";
            document.getElementById('alertmsg').innerHTML="Please fill in all Fields";
            document.getElementById('name').style.border="1px solid red";
            document.getElementById('phno').style.border="1px solid red";
            document.getElementById('address').style.border="1px solid red";
            document.getElementById('city').style.border="1px solid red";

         
        }
      
    }
    else
    {
     updateTable(dataArray);
    }
   
}

const readData = () => {
    let data={};
    let dataArray = [];
    data['name'] = document.getElementById('name').value;
    data['phoneNum'] = document.getElementById('phno').value;
    data['city'] = document.getElementById('city').value;
    data['address'] = document.getElementById('address').value;
    dataArray.push(data);
    return dataArray;
   
}

const insertDataTotable = (dataArray) => {

    for(i=0;i<dataArray.length;i++) {
     let table=document.getElementById('StudentTable').getElementsByTagName('tbody')[0];
     let row=table.insertRow(table.length);
     let cell1=row.insertCell(0);
     cell1.innerHTML =dataArray[i].name;
     let cell2=row.insertCell(1);
     cell2.innerHTML =dataArray[i].phoneNum;
     let cell3=row.insertCell(2);
     cell3.innerHTML=dataArray[i].city;
     let cell4=row.insertCell(3);
     cell4.innerHTML=dataArray[i].address;
     let cell5=row.insertCell(4);
     cell5.innerHTML=`<button class="Editbtn" onclick="Edit(this)">Edit</button>
    <button class="Deletebtn" onclick="DeleteRecord(this)">Delete</button>`;
    }
}

const Edit=(td)=>{

    selectrow=td.parentElement.parentElement;
    document.getElementById("name").value=selectrow.cells[0].innerHTML;
    document.getElementById("phno").value=selectrow.cells[1].innerHTML;
    document.getElementById("city").value=selectrow.cells[2].innerHTML;
    document.getElementById("address").value=selectrow.cells[3].innerHTML;
         
}
const DeleteRecord=(td)=>{
   selectrow=td.parentElement.parentElement;
   let table=document.getElementById('StudentTable');
   table.deleteRow(selectrow.rowIndex);
   selectrow=null;

   
}
const updateTable = (dataArray) =>
{
    for(i=0; i<dataArray.length; i++)
    {

  selectrow.cells[0].innerHTML= dataArray[i].name;
  selectrow.cells[1].innerHTML= dataArray[i].phoneNum;
  selectrow.cells[2].innerHTML= dataArray[i].city; 
   selectrow.cells[3].innerHTML= dataArray[i].address;
    }
 selectrow=null;
}


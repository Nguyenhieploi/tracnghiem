// tạo mạng chứa tất cả câu hỏi
var dsCauHoi =[

]

var nutNopBai = false; // chưa nộp bài thì false , đã nộp thì true


 // tạo funciton để xử lí add
 function add(){
    var tracNghiem = {
        sothutu:null,
        cauhoi: null,
        dapana:null,
        dapanb:null,
        dapanc:null,
        dapand: null,
        dapandung:null,
        dapandachon:null,
    }
    // gán ID input vào biến
    var inputSoThuTu = document.getElementById('sothutu')
    var inputCauHoi = document.getElementById('addcauhoi')
    var inputDapAnA = document.getElementById('dapana')
    var inputDapAnB =document.getElementById('dapanb')
    var inputDapAnC =document.getElementById('dapanc')
    var inputDapAnD =document.getElementById('dapand')
    var inputDapAnDung =document.getElementById('dapandung')
    // truyền giá trị vừa nhập từ ô input vào biến trắc nghiệm
    tracNghiem.sothutu = inputSoThuTu.value;
    tracNghiem.cauhoi = inputCauHoi.value;
    tracNghiem.dapana = inputDapAnA.value;
    tracNghiem.dapanb = inputDapAnB.value;
    tracNghiem.dapanc = inputDapAnC.value;
    tracNghiem.dapand = inputDapAnD.value;
    tracNghiem.dapandung = inputDapAnDung.value

    // kiểm tra điều kiện 
    if(!sothutu.value || !inputCauHoi.value || !inputDapAnA.value ||!inputDapAnB.value || !inputDapAnC.value || !inputDapAnD.value ){
        alert('Kiểm tra lại xem còn thiếu gì không')
        return;
    }

    if(dsCauHoi.find(value=>value.sothutu == tracNghiem.sothutu)){
        alert('đã có số thứ tự')
        return;
    }
    if(!dapandung.value){
        alert('thiếu đáp án đúng')
        return;
    }
    
    dsCauHoi.push(tracNghiem)
   show()
   
   
   
   document.getElementById("addcauhoi").value = "";
   document.getElementById("dapana").value = "";
   document.getElementById("dapanb").value = "";
   document.getElementById("dapanc").value = "";
   document.getElementById("dapand").value = "";
   document.getElementById("dapandung").value = "";

   document.getElementById('nopbai').style.display="block"

   // 

   document.getElementById('sothutu').value = parseInt( document.getElementById('sothutu').value)+1
 }



 
 // tạo function show giao diện trác nghiệm đã thêm

 function show(){
   var showTracNghiem =  document.getElementById('tracnghiemdathem')

    showTracNghiem.innerHTML = "" // mỗi lần ấn sẽ xóa nội dung cũ
    dsCauHoi.forEach((value,index)=>{
        showTracNghiem.innerHTML += `
            <strong><span>Câu ${value.sothutu}:</span></strong>
            <span>${value.cauhoi}</span>
            <div class="row">
                <div class="col-lg-3">
                <input type="radio" onclick="chondapan('${value.sothutu}')" id="option1" name="${value.sothutu}" value="A">
                <span><label for="option1">A: ${value.dapana}</label></span>
                </div>
                 <div class="col-lg-3">
                 <input type="radio" onclick="chondapan('${value.sothutu}')" id="option1" name="${value.sothutu}" value="B">
                 <span><label for="option1">B: ${value.dapanb}</label></span>
                </div>
                <div class="col-lg-3">
                <input type="radio"  onclick="chondapan('${value.sothutu}')" id="option1" name="${value.sothutu}" value="C">
                <span><label for="option1">C: ${value.dapanc}</label></span>
                </div>
                <div class="col-lg-3">
                <input type="radio"  onclick="chondapan('${value.sothutu}')" id="option1" name="${value.sothutu}" value="D">
                <span><label for="option1">D: ${value.dapand}</label></span>
                </div>
            </div>
           ${nutNopBai==true?`<span class="${value.dapandung==value.dapandachon?"dapandung":"dapansai"}"  >Đáp án đúng: ${value.dapandung}</span><br>`:''}
            <button class="btn-sua"  onclick="edit('${value.sothutu}')">Sửa</button>
            <button class="btn-xoa" onclick="remove('${value.sothutu}')">Xóa</button>
            <hr>
            
    `
    })


 }


 // tạo function xóa 
function remove(sothutu){
  dsCauHoi = dsCauHoi.filter((value)=>{
    if(value.sothutu != sothutu){
        return true;
    }
  })

show()
  if(dsCauHoi.length ==  0){
    document.getElementById('nopbai').style.display="none"
  }
 
}


// sửa trắc nghiệm
// tạo funciton sửa
function edit(sothutu){

    // BƯỚC 1: Tìm Sothutu trong dsCauHỏi
    var cauHoiCanSua = dsCauHoi.find((value)=>{
        if(value.sothutu == sothutu){
            return true;
        }
    })
    
    // bước 2: gắn id vào biến
    var inputSuaSoThuTu = document.getElementById('suasothutu')
    var inputSuaAddCauHoi = document.getElementById('suaaddcauhoi')
    var inputSuaDapAnA = document.getElementById('suadapana')
    var inputSuaDapAnB = document.getElementById('suadapanb')
    var inputSuaDapAnC = document.getElementById('suadapanc')
    var inputSuaDapAnD = document.getElementById('suadapand')
    var inputSuaDapAnDung = document.getElementById('suadapandung')
  
    // "Input sửa" sẽ nhận value( giá trị) là sothutu từ biến cauHoiCanSua tìm thấy
    inputSuaSoThuTu.value = cauHoiCanSua.sothutu
    inputSuaAddCauHoi.value = cauHoiCanSua.cauhoi
    inputSuaDapAnA.value = cauHoiCanSua.dapana
    inputSuaDapAnB.value = cauHoiCanSua.dapanb
    inputSuaDapAnC.value = cauHoiCanSua.dapanc
    inputSuaDapAnD.value = cauHoiCanSua.dapanc
    inputSuaDapAnDung.value = cauHoiCanSua.dapandung

    document.getElementById('edit-block').style.display='block'
    document.getElementById('reset-form').style.display='none'
}

// lưu 
function luu(){
    cauHoiDaSua ={
        sothutu:null,
        cauhoi:null,
        dapana:null,
        dapanb:null,
        dapanc:null,
        dapand:null,
        dapandung:null,
        dapandachon:null,
    }

        // gán ID input vào biến
    var inputSuaSoThuTu = document.getElementById('suasothutu')
    var inputSuaAddCauHoi = document.getElementById('suaaddcauhoi')
    var inputSuaDapAnA = document.getElementById('suadapana')
    var inputSuaDapAnB = document.getElementById('suadapanb')
    var inputSuaDapAnC = document.getElementById('suadapanc')
    var inputSuaDapAnD = document.getElementById('suadapand')
    var inputSuaDapAnDung = document.getElementById('suadapandung')
        // truyền giá trị vừa nhập từ ô input vào biến trắc nghiệm
        cauHoiDaSua.sothutu = inputSuaSoThuTu.value
        cauHoiDaSua.cauhoi = inputSuaAddCauHoi.value
        cauHoiDaSua.dapana = inputSuaDapAnA.value
        cauHoiDaSua.dapanb = inputSuaDapAnB.value
        cauHoiDaSua.dapanc = inputSuaDapAnC.value
        cauHoiDaSua.dapand = inputSuaDapAnD.value
        cauHoiDaSua.dapandung = inputSuaDapAnDung.value

    var stt = dsCauHoi.findIndex((value)=>{
        if(value.sothutu == cauHoiDaSua.sothutu){
            return true;
        }
        else{
            return false;
        }
    })
   
    // gắn giá trị vào html
    dsCauHoi[stt].sothutu = cauHoiDaSua.sothutu
    dsCauHoi[stt].cauhoi = cauHoiDaSua.cauhoi
    dsCauHoi[stt].dapana = cauHoiDaSua.dapana
    dsCauHoi[stt].dapanb = cauHoiDaSua.dapanb
    dsCauHoi[stt].dapanc = cauHoiDaSua.dapanc
    dsCauHoi[stt].dapand = cauHoiDaSua.dapand
    dsCauHoi[stt].dapandung = cauHoiDaSua.dapandung
    document.getElementById('edit-block').style.display ="none"
    document.getElementById('reset-form').style.display ='block'
  show()
    
}

function chondapan(sothutu){
    // Lấy tất cả các đối tượng input radio button trong nhóm 'myRadioButton'

var radioButtons = document.getElementsByName(sothutu); 

// Lặp qua tất cả các input radio button và lấy giá trị của input radio button được chọn
var dapAnDaChon;
    radioButtons.forEach((item,index)=>{
        if(item.checked){
            dapAnDaChon = item.value
        }
    })

    var viTriCauTracNghiem = dsCauHoi.findIndex((item,index)=>{
        if(item.sothutu == sothutu){
            return true;
        }
    })
    dsCauHoi[viTriCauTracNghiem].dapandachon = dapAnDaChon

}

function nopbai(){
    var tongDiem = 0;
    
    // Duyệt qua từng câu trác nghiệm trong dscauhoi ta sẽ kiểm tra dap án đã chọn có bằng với lại đáp an dung hay không nếu đúng +1đ
    dsCauHoi.forEach((item,index)=>{
        console.log(item.dapandachon,item.dapandung)
        if(item.dapandachon == item.dapandung){
            tongDiem += 1;
            document.getElementById('bangdiem').innerHTML = `TỔNG ĐIỂM: ${tongDiem}`
        }
        else{
            tongDiem -= 0;
            document.getElementById('bangdiem').innerHTML = `TỔNG ĐIỂM: ${tongDiem}`
        }
        
    })
    
    nutNopBai = true;
    show()

   
}

// 1: Sau tổng điểm show giao diện
//2: Khi nào nộp bài thì mới xuất hiện tổng điểm
// 3: Tự động điền số thứ tự tăng dần 
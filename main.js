console.log("%cGettingDataFromUser_FUNCTION", "color:red; font-size:18px;");
function get_usr_data(name) {
  var res = document.getElementById(name);
  return res;
}
usr_data_arr = [];
function get_form_values() {
  usr_data_el = get_usr_data("usr_info_form");
  if (!usr_data_el) {
    console.error("Form element not found.");
    return;
  }
  usr_data_arr.length = 0;
  for (var i = 0; i < usr_data_el.elements.length - 1; i++) {
    if (usr_data_el.elements[i].type !== "button") {
      res = usr_data_el.elements[i].value;
      usr_data_arr.push(res);
    }
  }
  first = usr_data_arr[0];
  last = usr_data_arr[1];
  num = usr_data_arr[2];

  console.log("%cGenerator_PART", "color:yellow; font-size:20px;");
  const max_num = 47;
  const min_num = 33;
  const asc_cd_num =
    Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;
  let pass =
    first[0] +
    (Math.floor(Math.random() * (99 - 2 + 1)) + 1) +
    String.fromCharCode(asc_cd_num) +
    first[first.length - 2].toUpperCase() +
    last[last.length - 1] +
    String.fromCharCode(
      asc_cd_num + Math.floor(Math.random() * (99 - 2 + 1) + 1)
    ) +
    Math.floor(Math.random() * (990 - 100 + 1) + 100) +
    (((num * 15) / 2) * 7).toFixed(0) +
    String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97) +
    2;
  console.log(pass);
  console.log("%cGenerated_PASS_BOXPART", "color:blue; font-size:18px;");
  get_usr_data("usr_pass_result").textContent = pass;
  console.log(pass);
}

function copy_pass() {
  console.log("%cCopied_PASS_PART", "color:white; font-size:15px;");
  var textToCopy = get_usr_data("usr_pass_result").textContent;
  var textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
function change_icon() {
  var icon_el = document.querySelector(".fa-copy");
  icon_el.classList.toggle("fa-regular");
  icon_el.classList.toggle("fa-solid");
}
function copy_change_icon() {
  copy_pass();
  change_icon();
}

function start_rndm() {
  get_form_values();
}
